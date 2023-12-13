const express = require("express");
const router = express.Router();
const JobPost = require("../models/jobs");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/job-post", isLoggedIn, async (req, res) => {
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
      skillsArray.split(",").map((skill) => skill.trim());
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
    console.log(error)
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

module.exports = router;
