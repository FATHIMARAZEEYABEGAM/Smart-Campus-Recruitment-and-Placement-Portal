import type { Config } from "@netlify/functions";
import { desc, eq, and, gt } from "drizzle-orm";
import { db } from "../../db/index.js";
import { jobs, sessions, users } from "../../db/schema.js";

const withLegacyId = (job: typeof jobs.$inferSelect) => ({ ...job, _id: job.id });

export default async (req: Request) => {
  try {
    if (req.method === "GET") {
      const all = await db.select().from(jobs).orderBy(desc(jobs.createdAt), desc(jobs.id));
      return Response.json(all.map(withLegacyId));
    }

    if (req.method === "POST") {
      // Only logged-in recruiters or placement officers can post jobs
      const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
      if (!token) {
        return Response.json({ message: "Authentication required" }, { status: 401 });
      }
      const [session] = await db
        .select({ userId: users.id, role: users.role })
        .from(sessions)
        .innerJoin(users, eq(sessions.userId, users.id))
        .where(and(eq(sessions.token, token), gt(sessions.expiresAt, new Date())));
      if (!session) {
        return Response.json({ message: "Invalid or expired session" }, { status: 401 });
      }
      if (session.role !== "recruiter" && session.role !== "placement_officer") {
        return Response.json({ message: "Not allowed to create jobs" }, { status: 403 });
      }

      const b: any = await req.json().catch(() => ({}));
      const required = [
        "companyName", "jobTitle", "domain", "description", "requiredSkills",
        "minimumCGPA", "eligibleDepartment", "salary", "deadline",
      ];
      if (required.some((k) => b[k] === undefined || b[k] === null || b[k] === "")) {
        return Response.json({ message: "Please fill all fields" }, { status: 400 });
      }

      const skills = Array.isArray(b.requiredSkills)
        ? b.requiredSkills.map(String)
        : String(b.requiredSkills).split(",").map((s) => s.trim()).filter(Boolean);
      const deadline = new Date(b.deadline);
      const cgpa = Number(b.minimumCGPA);
      if (Number.isNaN(deadline.getTime()) || Number.isNaN(cgpa)) {
        return Response.json({ message: "Invalid deadline or CGPA" }, { status: 400 });
      }

      const [job] = await db
        .insert(jobs)
        .values({
          recruiterId: session.userId,
          companyName: String(b.companyName),
          jobTitle: String(b.jobTitle),
          domain: String(b.domain),
          description: String(b.description),
          requiredSkills: skills,
          minimumCGPA: cgpa,
          eligibleDepartment: String(b.eligibleDepartment),
          salary: String(b.salary),
          deadline,
        })
        .returning();

      return Response.json(
        { message: "Job created successfully", job: withLegacyId(job) },
        { status: 201 }
      );
    }

    return Response.json({ message: "Method not allowed" }, { status: 405 });
  } catch (error) {
    console.error("Jobs error:", error);
    return Response.json({ message: "Server error while processing jobs" }, { status: 500 });
  }
};

export const config: Config = {
  path: "/api/jobs",
};
