import { useState } from "react";
import job_bg from "../../images/job_bg.png";
import styles from "./AddJob.module.css";
import { createJob } from "../../apis/jobs";
import { useNavigate } from "react-router-dom";

export default function AddJob({ userData }) {
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState({
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
    setJobDetails((prevData) => {
      return {
        ...prevData,
        [name]: value,
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
    skills,
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
        skills,
        information, 
        userData
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
                value={jobDetails.companyName}
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
                value={jobDetails.logoUrl}
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
                value={jobDetails.jobPosition}
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
                value={jobDetails.monthlySalary}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Job Type</label>
              <div className={styles.select_wrapper}>
                <select
                  value={jobDetails.jobType}
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
                  value={jobDetails.remote}
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
                value={jobDetails.location}
                onChange={handleChange}
              ></input>
            </div>

            <div className={styles.input_wrapper}>
              <label>Job Description</label>
              <textarea
                placeholder="Type the job description"
                name="jobDescription"
                value={jobDetails.jobDescription}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.input_wrapper}>
              <label>About Company</label>
              <textarea
                placeholder="Type about your company"
                name="aboutCompany"
                value={jobDetails.aboutCompany}
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
                value={jobDetails.skillsRequired}
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
                value={jobDetails.information}
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
                  jobDetails.companyName,
                  jobDetails.logoUrl,
                  jobDetails.jobPosition,
                  jobDetails.monthlySalary,
                  jobDetails.jobType,
                  jobDetails.remote,
                  jobDetails.location,
                  jobDetails.jobDescription,
                  jobDetails.aboutCompany,
                  jobDetails.skills,
                  jobDetails.information
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
