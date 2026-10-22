const express = require("express");

const Job = require("../models/Job");

const router = express.Router();


// GET ALL JOBS
router.get("/", async (req, res) => {
  try {

    const jobs = await Job.find().sort({
      createdAt: -1
    });

    res.json(jobs);

  } catch (error) {

    console.error("Error fetching jobs:", error);

    res.status(500).json({
      message: "Server error while fetching jobs"
    });

  }
});


// CREATE JOB
router.post("/", async (req, res) => {
  try {

    const {
      recruiterId,
      companyName,
      jobTitle,
      domain,
      description,
      requiredSkills,
      minimumCGPA,
      eligibleDepartment,
      salary,
      deadline
    } = req.body;


    if (
      !recruiterId ||
      !companyName ||
      !jobTitle ||
      !domain ||
      !description ||
      !requiredSkills ||
      !minimumCGPA ||
      !eligibleDepartment ||
      !salary ||
      !deadline
    ) {

      return res.status(400).json({
        message: "Please fill all fields"
      });

    }


    const job = await Job.create({

      recruiterId,

      companyName,

      jobTitle,

      domain,

      description,

      requiredSkills,

      minimumCGPA,

      eligibleDepartment,

      salary,

      deadline

    });


    res.status(201).json({

      message: "Job created successfully",

      job

    });


  } catch (error) {

    console.error("Job creation error:", error);

    res.status(500).json({

      message: "Server error while creating job"

    });

  }
});


module.exports = router;