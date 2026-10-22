const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Job = require("./models/Job");

dotenv.config();

const jobs = [
  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "TechNova Solutions",
    jobTitle: "Software Developer",
    domain: "Software Development",
    description:
      "Work on software applications and solve programming problems as part of a development team.",
    requiredSkills: ["Java", "C++", "Python", "DSA", "SQL"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹8 LPA",
    deadline: new Date("2026-09-30")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "DigitalWorks India",
    jobTitle: "Full Stack Developer",
    domain: "Web Development",
    description:
      "Develop modern web applications using frontend and backend technologies.",
    requiredSkills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹9 LPA",
    deadline: new Date("2026-10-05")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "WebCraft Technologies",
    jobTitle: "Frontend Developer",
    domain: "Frontend Development",
    description:
      "Build responsive and user-friendly web interfaces.",
    requiredSkills: ["HTML", "CSS", "JavaScript", "React"],
    minimumCGPA: 6.5,
    eligibleDepartment: "CSE",
    salary: "₹6 LPA",
    deadline: new Date("2026-09-25")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "CloudMatrix",
    jobTitle: "Backend Developer",
    domain: "Backend Development",
    description:
      "Develop APIs and backend services for scalable applications.",
    requiredSkills: ["Node.js", "Express", "MongoDB", "REST API", "JavaScript"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹8.5 LPA",
    deadline: new Date("2026-10-10")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "JavaCore Systems",
    jobTitle: "Java Developer",
    domain: "Software Development",
    description:
      "Develop enterprise applications using Java technologies.",
    requiredSkills: ["Java", "Spring Boot", "SQL", "OOP"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹7.5 LPA",
    deadline: new Date("2026-09-28")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "PyTech Labs",
    jobTitle: "Python Developer",
    domain: "Software Development",
    description:
      "Build backend applications and automation solutions using Python.",
    requiredSkills: ["Python", "Django", "Flask", "SQL", "Git"],
    minimumCGPA: 6.5,
    eligibleDepartment: "CSE",
    salary: "₹7 LPA",
    deadline: new Date("2026-10-12")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "Insight Analytics",
    jobTitle: "Data Analyst",
    domain: "Data Analytics",
    description:
      "Analyze business data and create reports to support decision making.",
    requiredSkills: ["Python", "SQL", "Excel", "Power BI", "Statistics"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹6.5 LPA",
    deadline: new Date("2026-10-01")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "DataSphere",
    jobTitle: "Data Scientist",
    domain: "Data Science",
    description:
      "Analyze large datasets and develop machine learning solutions.",
    requiredSkills: ["Python", "Pandas", "NumPy", "Machine Learning", "SQL"],
    minimumCGPA: 7.5,
    eligibleDepartment: "CSE",
    salary: "₹10 LPA",
    deadline: new Date("2026-10-15")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "MLWorks",
    jobTitle: "Machine Learning Engineer",
    domain: "Artificial Intelligence",
    description:
      "Develop and deploy machine learning models for real-world applications.",
    requiredSkills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "NumPy"],
    minimumCGPA: 7.5,
    eligibleDepartment: "CSE",
    salary: "₹11 LPA",
    deadline: new Date("2026-10-20")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "AI Innovations",
    jobTitle: "AI Engineer",
    domain: "Artificial Intelligence",
    description:
      "Develop AI-powered applications using machine learning and generative AI.",
    requiredSkills: ["Python", "Machine Learning", "Generative AI", "APIs", "SQL"],
    minimumCGPA: 7.5,
    eligibleDepartment: "CSE",
    salary: "₹12 LPA",
    deadline: new Date("2026-10-18")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "DevOpsHub",
    jobTitle: "DevOps Engineer",
    domain: "DevOps",
    description:
      "Automate application deployment and maintain development infrastructure.",
    requiredSkills: ["Linux", "Docker", "Git", "AWS", "CI/CD"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹9 LPA",
    deadline: new Date("2026-10-25")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "CloudFirst Technologies",
    jobTitle: "Cloud Engineer",
    domain: "Cloud Computing",
    description:
      "Design and maintain cloud-based infrastructure and applications.",
    requiredSkills: ["AWS", "Azure", "Linux", "Networking", "Docker"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹9.5 LPA",
    deadline: new Date("2026-10-30")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "SecureNet Systems",
    jobTitle: "Cybersecurity Analyst",
    domain: "Cybersecurity",
    description:
      "Monitor systems and identify potential security threats.",
    requiredSkills: ["Networking", "Linux", "Cybersecurity", "Python", "Security"],
    minimumCGPA: 7.0,
    eligibleDepartment: "CSE",
    salary: "₹8 LPA",
    deadline: new Date("2026-10-22")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "QualityFirst Technologies",
    jobTitle: "QA / Test Engineer",
    domain: "Software Testing",
    description:
      "Test software applications and identify defects before release.",
    requiredSkills: ["Software Testing", "Selenium", "Java", "SQL", "Git"],
    minimumCGPA: 6.5,
    eligibleDepartment: "CSE",
    salary: "₹6 LPA",
    deadline: new Date("2026-09-27")
  },

  {
    recruiterId: new mongoose.Types.ObjectId(),
    companyName: "DesignSphere",
    jobTitle: "UI/UX Designer",
    domain: "UI/UX Design",
    description:
      "Design intuitive digital experiences and user interfaces.",
    requiredSkills: ["Figma", "UI Design", "UX Design", "Wireframing"],
    minimumCGPA: 6.0,
    eligibleDepartment: "ALL",
    salary: "₹6 LPA",
    deadline: new Date("2026-10-08")
  }
];

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Job.deleteMany({});

    await Job.insertMany(jobs);

    console.log("15 jobs inserted successfully!");

    await mongoose.connection.close();

    console.log("MongoDB connection closed");

  } catch (error) {

    console.error("Error inserting jobs:", error);

    process.exit(1);

  }
};

seedJobs();