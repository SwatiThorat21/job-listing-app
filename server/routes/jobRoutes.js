const express = require("express");
const router = express.Router();
const JobPost = require("../models/jobs");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/create-job-post", isLoggedIn, async (req, res) => {
  try {
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
    } = req.body;

    let skillsArray = skillsRequired;
    if (typeof skillsRequired === "string") {
      skillsArray = skillsRequired.split(",").map((skill) => skill.trim());
    }

    await JobPost.create({
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired: skillsArray,
      information,
    });
    res.status(200).json({
      status: "SUCCESS",
      message: "You have sucessfully created Job!",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.patch("/edit-job-post/:id", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
    } = req.body;

    await JobPost.findByIdAndUpdate(id, {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      remote,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
    });
    res.json({
      status: "SUCCESS",
      message: "User updated successfully",
    });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
});

router.get("/job-posts", async (req, res) => {
  const { jobPosition, skillsRequired } = req.query;
  try {
    let query = {};
    if (jobPosition) {
      query.jobPosition = new RegExp(jobPosition, 'i');
    }
    if (skillsRequired) {
      query.skillsRequired = { $in: skillsRequired.split(",")};
    }
    const jobs = await JobPost.find(query).sort({ createdAt: -1 });
    res.json({ jobs });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.get("/job-post/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await JobPost.findById(id);

    if (!job) {
      return res.status(404).json({
        status: "FAILED",
        message: "Job not found",
      });
    }
    res.status(200).json({ data: job });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

module.exports = router;
