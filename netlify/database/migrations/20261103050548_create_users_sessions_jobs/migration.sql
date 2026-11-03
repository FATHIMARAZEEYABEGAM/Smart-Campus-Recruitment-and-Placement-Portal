CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY,
	"recruiter_id" integer,
	"company_name" text NOT NULL,
	"job_title" text NOT NULL,
	"domain" text NOT NULL,
	"description" text NOT NULL,
	"required_skills" text[] NOT NULL,
	"minimum_cgpa" real NOT NULL,
	"eligible_department" text NOT NULL,
	"salary" text NOT NULL,
	"deadline" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"token" text PRIMARY KEY,
	"user_id" integer NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"full_name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"password" text NOT NULL,
	"role" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_recruiter_id_users_id_fkey" FOREIGN KEY ("recruiter_id") REFERENCES "users"("id") ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;