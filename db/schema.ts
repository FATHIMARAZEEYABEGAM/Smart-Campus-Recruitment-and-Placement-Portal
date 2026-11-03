import { pgTable, serial, text, timestamp, integer, real } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  role: text().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  token: text().primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const jobs = pgTable("jobs", {
  id: serial().primaryKey(),
  recruiterId: integer("recruiter_id").references(() => users.id, { onDelete: "set null" }),
  companyName: text("company_name").notNull(),
  jobTitle: text("job_title").notNull(),
  domain: text().notNull(),
  description: text().notNull(),
  requiredSkills: text("required_skills").array().notNull(),
  minimumCGPA: real("minimum_cgpa").notNull(),
  eligibleDepartment: text("eligible_department").notNull(),
  salary: text().notNull(),
  deadline: timestamp().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
