import { useState } from "react";
import job_bg from "../../images/job_bg.png";
import styles from "./AddJob.module.css";
import { createJob } from "../../apis/jobs";
import { useNavigate } from "react-router-dom";

export default function AddJob({ userData, setJobsData }) {
  const navigate = useNavigate();
  
  const [jobFormDetails, setJobFormDetails] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    remote: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: "",
    information: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    const skillsArray =
      name === "skillsRequired"
        ? value.split(",").map((skill) => skill.trim())
        : value;
    setJobFormDetails((prevData) => {
      return {
        ...prevData,
        [name]: skillsArray,
      };
    });
  }

  async function handleOnJobSubmit(
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
    information
  ) {
    try {
      await createJob(
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
        userData,
        setJobsData
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.addJob_container}>
        <div className={styles.description_container}>
          <h2>Add job description</h2>
          <div className={styles.input_form_wrapper}>
            <div className={styles.input_wrapper}>
              <label>Company name</label>
              <input
                type="text"
                placeholder="Enter your company name here"
                className={styles.addJob_input}
                name="companyName"
                value={jobFormDetails.companyName}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Add logo URL</label>
              <input
                type="text"
                placeholder="Enter the link"
                className={styles.addJob_input}
                name="logoUrl"
                value={jobFormDetails.logoUrl}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Job position</label>
              <input
                type="text"
                placeholder="Enter job position"
                className={styles.addJob_input}
                name="jobPosition"
                value={jobFormDetails.jobPosition}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Monthly Salary</label>
              <input
                type="text"
                placeholder="Enter Amount in rupees"
                className={styles.addJob_input}
                name="monthlySalary"
                value={jobFormDetails.monthlySalary}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Job Type</label>
              <div className={styles.select_wrapper}>
                <select
                  value={jobFormDetails.jobType}
                  onChange={handleChange}
                  name="jobType"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>

            <div className={styles.input_wrapper}>
              <label>Remote/office</label>
              <div className={styles.select_wrapper}>
                <select
                  value={jobFormDetails.remote}
                  onChange={handleChange}
                  name="remote"
                >
                  <option value="Remote">Remote</option>
                  <option value="Office">Office</option>
                </select>
              </div>
            </div>

            <div className={styles.input_wrapper}>
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter Location"
                className={styles.addJob_input}
                name="location"
                value={jobFormDetails.location}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Job Description</label>
              <textarea
                placeholder="Type the job description"
                name="jobDescription"
                value={jobFormDetails.jobDescription}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.input_wrapper}>
              <label>About Company</label>
              <textarea
                placeholder="Type about your company"
                name="aboutCompany"
                value={jobFormDetails.aboutCompany}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.input_wrapper}>
              <label>Skills Required</label>
              <input
                type="text"
                placeholder="Enter the must have skills"
                className={styles.addJob_input}
                name="skillsRequired"
                value={jobFormDetails.skillsRequired}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Information</label>
              <input
                type="text"
                placeholder="Enter the additional information"
                className={styles.addJob_input}
                name="information"
                value={jobFormDetails.information}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className={styles.btn_wrapper}>
            <button className={styles.cancel_btn}>Cancel</button>
            <button
              className={styles.addJob_btn}
              onClick={() =>
                handleOnJobSubmit(
                  jobFormDetails.companyName,
                  jobFormDetails.logoUrl,
                  jobFormDetails.jobPosition,
                  jobFormDetails.monthlySalary,
                  jobFormDetails.jobType,
                  jobFormDetails.remote,
                  jobFormDetails.location,
                  jobFormDetails.jobDescription,
                  jobFormDetails.aboutCompany,
                  jobFormDetails.skillsRequired,
                  jobFormDetails.information
                )
              }
            >
              +Add Job
            </button>
          </div>
        </div>
        <div className={styles.addJob_bg_container}>
          <h2>Recruiter add job details here</h2>
          <img src={job_bg} alt="job_bg"></img>
        </div>
      </div>
    </>
  );
}
