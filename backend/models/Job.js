const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    companyName: {
      type: String,
      required: true,
      trim: true
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true
    },

    domain: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    requiredSkills: {
      type: [String],
      required: true
    },

    minimumCGPA: {
      type: Number,
      required: true
    },

    eligibleDepartment: {
      type: String,
      required: true
    },

    salary: {
      type: String,
      required: true
    },

    deadline: {
      type: Date,
      required: true
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;