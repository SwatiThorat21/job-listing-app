const express = require("express");
const router = express.Router();
const JobPost = require("../models/jobs");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/job-post", isLoggedIn, async (req, res) => {
  console.log("req.body")
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
      skills,
      information,
    } = req.body;

    let skillsArray = skills;
    if (typeof skills === "string") {
      skillsArray = skills.split(",").map((skill) => skill.trim());
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
      skills: skillsArray,
      information,
    });
    res.status(200).json({
      status: "SUCCESS",
      message: "You have sucessfully created Job!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

router.patch("/job-post/:id", async (req, res) => {
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
      skills,
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
      skills,
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

router.get("/job-post", async (req, res) => {
  const { jobPosition, skills } = req.query;
  try {
    let query = {};
    if (jobPosition) {
      query.jobPosition = jobPosition;
    }
    if (skills) {
      query.skills = { $in: skills.split("&") };
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
    console.log(job);

    if (!job) {
      return res.status(404).json({
        status: "FAILED",
        message: "Job not found",
      });
    }
    res.json({ job });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

module.exports = router;
