const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  monthlySalary: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Full-time", "Part-time", "Internship"],
    required: true,
  },
  remote: {
    type: String,
    enum: ["Remote", "Office"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  aboutCompany: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('JobPost', jobPostSchema)