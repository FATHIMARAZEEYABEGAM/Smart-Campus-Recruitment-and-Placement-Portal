import type { Config } from "@netlify/functions";
import bcrypt from "bcryptjs";
import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { users, sessions } from "../../db/schema.js";

const ROLES = ["student", "recruiter", "placement_officer"];

const publicUser = (u: typeof users.$inferSelect) => ({
  id: u.id,
  fullName: u.fullName,
  email: u.email,
  role: u.role,
});

export default async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  const action = new URL(req.url).pathname.split("/").pop();
  let body: any;
  try {
    body = await req.json();
  } catch {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  try {
    if (action === "register") {
      const fullName = String(body.fullName ?? "").trim();
      const email = String(body.email ?? "").trim().toLowerCase();
      const password = String(body.password ?? "");
      const role = String(body.role ?? "");

      if (!fullName || !email || !password || !role) {
        return Response.json({ message: "Please fill all fields" }, { status: 400 });
      }
      if (!ROLES.includes(role)) {
        return Response.json({ message: "Invalid role" }, { status: 400 });
      }

      const [existing] = await db.select().from(users).where(eq(users.email, email));
      if (existing) {
        return Response.json({ message: "Email already registered" }, { status: 400 });
      }

      const hashed = await bcrypt.hash(password, 10);
      const [user] = await db
        .insert(users)
        .values({ fullName, email, password: hashed, role })
        .returning();

      return Response.json(
        { message: "Registration successful", user: publicUser(user) },
        { status: 201 }
      );
    }

    if (action === "login") {
      const email = String(body.email ?? "").trim().toLowerCase();
      const password = String(body.password ?? "");

      if (!email || !password) {
        return Response.json({ message: "Please enter email and password" }, { status: 400 });
      }

      const [user] = await db.select().from(users).where(eq(users.email, email));
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return Response.json({ message: "Invalid email or password" }, { status: 401 });
      }

      const token = randomBytes(32).toString("hex");
      await db.insert(sessions).values({
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      return Response.json({ message: "Login successful", token, user: publicUser(user) });
    }

    return Response.json({ message: "Not found" }, { status: 404 });
  } catch (error) {
    console.error(`Auth ${action} error:`, error);
    return Response.json({ message: `Server error during ${action}` }, { status: 500 });
  }
};

export const config: Config = {
  path: ["/api/auth/register", "/api/auth/login"],
};
