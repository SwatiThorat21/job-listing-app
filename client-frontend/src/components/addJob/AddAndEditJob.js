import { useState } from "react";
import job_bg from "../../images/job_bg.png";
import styles from "./AddAndEditJob.module.css";
import { createJob, editJobDataById } from "../../apis/jobs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getJobDataById } from "../../apis/jobs";

export default function AddAndEditJob({
  userData,
  setJobsData,
  setJobDetails,
  setJobFormDetails,
  jobFormDetails
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const jobId = urlParams.get("jobId");
      try {
        const jobDetails = await getJobDataById(jobId);
        setJobDetails(jobDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobDetails();
  }, [setJobDetails]);



  const [errors, setErrors] = useState({
    companyNameErr: false,
    logoUrlErr: false,
    jobPositionErr: false,
    monthlySalaryErr: false,
    jobTypeErr: false,
    remoteErr: false,
    locationErr: false,
    jobDescriptionErr: false,
    aboutCompanyErr: false,
    skillsRequiredErr: false,
    informationErr: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    const skillsArray =
      name === "skillsRequired"
        ? value.split(",").map((skill) => skill.toLowerCase().trim())
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
    const newErrors = {};
    if (!companyName) {
      newErrors.companyNameErr = true;
    }
    if (!logoUrl) {
      newErrors.logoUrlErr = true;
    }
    if (!jobPosition) {
      newErrors.jobPositionErr = true;
    }

    if (!monthlySalary) {
      newErrors.monthlySalaryErr = true;
    }
    if (!jobType) {
      newErrors.jobTypeErr = true;
    }
    if (!remote) {
      newErrors.remoteErr = true;
    }
    if (!location) {
      newErrors.locationErr = true;
    }
    if (!jobDescription) {
      newErrors.jobDescriptionErr = true;
    }
    if (!aboutCompany) {
      newErrors.aboutCompanyErr = true;
    }
    if (!skillsRequired) {
      newErrors.skillsRequiredErr = true;
    }
    if (!information) {
      newErrors.informationErr = true;
    }
    setErrors(newErrors);

    try {
      if (Object.keys(newErrors).length === 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = urlParams.get("jobId");
        const jwToken = localStorage.getItem("jwToken");
        if (jobId) {
          await editJobDataById(
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
            jobId,
            jwToken
          );
          navigate("/");
        } else {
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
        }
      }
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
              {!errors.companyNameErr && (
                <input
                  type="text"
                  placeholder="Enter your company name here"
                  className={styles.addJob_input}
                  name="companyName"
                  value={jobFormDetails.companyName}
                  onChange={handleChange}
                ></input>
              )}
              {errors.companyNameErr && (
                <input
                  type="text"
                  className={styles.errorInput}
                  name="companyName"
                  value={jobFormDetails.companyName}
                  onChange={handleChange}
                  placeholder="Please enter your company name"
                ></input>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>Add logo URL</label>
              {!errors.logoUrlErr && (
                <input
                  type="text"
                  placeholder="Enter the link"
                  className={styles.addJob_input}
                  name="logoUrl"
                  value={jobFormDetails.logoUrl}
                  onChange={handleChange}
                ></input>
              )}
              {errors.logoUrlErr && (
                <input
                  type="text"
                  placeholder="Please enter logo url"
                  className={styles.errorInput}
                  name="logoUrl"
                  value={jobFormDetails.logoUrl}
                  onChange={handleChange}
                ></input>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>Job position</label>
              {!errors.jobPositionErr && (
                <input
                  type="text"
                  placeholder="Enter job position"
                  className={styles.addJob_input}
                  name="jobPosition"
                  value={jobFormDetails.jobPosition}
                  onChange={handleChange}
                ></input>
              )}
              {errors.jobPositionErr && (
                <input
                  type="text"
                  placeholder="Please enter job position"
                  className={styles.errorInput}
                  name="jobPosition"
                  value={jobFormDetails.jobPosition}
                  onChange={handleChange}
                ></input>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>Monthly Salary</label>
              {!errors.monthlySalaryErr && (
                <input
                  type="text"
                  placeholder="Enter Amount in rupees"
                  className={styles.addJob_input}
                  name="monthlySalary"
                  value={jobFormDetails.monthlySalary}
                  onChange={handleChange}
                ></input>
              )}
              {errors.monthlySalaryErr && (
                <input
                  type="text"
                  placeholder="Please enter amount"
                  className={styles.errorInput}
                  name="monthlySalary"
                  value={jobFormDetails.monthlySalary}
                  onChange={handleChange}
                ></input>
              )}
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
                {errors.jobTypeErr && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    Please select job type
                  </div>
                )}
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
                {errors.remoteErr && (
                  <div style={{ color: "red", fontSize: "13px" }}>
                    Please select remote or office work
                  </div>
                )}
              </div>
            </div>

            <div className={styles.input_wrapper}>
              <label>Location</label>
              {!errors.locationErr && (
                <input
                  type="text"
                  placeholder="Enter Location"
                  className={styles.addJob_input}
                  name="location"
                  value={jobFormDetails.location}
                  onChange={handleChange}
                ></input>
              )}
              {errors.locationErr && (
                <input
                  type="text"
                  placeholder="Please enter location"
                  className={styles.errorInput}
                  name="location"
                  value={jobFormDetails.location}
                  onChange={handleChange}
                ></input>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>Job Description</label>
              {!errors.jobDescriptionErr && (
                <textarea
                  placeholder="Type the job description"
                  name="jobDescription"
                  value={jobFormDetails.jobDescription}
                  onChange={handleChange}
                ></textarea>
              )}
              {errors.jobDescriptionErr && (
                <textarea
                  placeholder="Please type the job description"
                  name="jobDescription"
                  value={jobFormDetails.jobDescription}
                  onChange={handleChange}
                  className={styles.errorInput}
                ></textarea>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>About Company</label>
              {!errors.aboutCompanyErr && (
                <textarea
                  placeholder="Type about your company"
                  name="aboutCompany"
                  value={jobFormDetails.aboutCompany}
                  onChange={handleChange}
                ></textarea>
              )}
              {errors.aboutCompanyErr && (
                <textarea
                  placeholder="Please type about your company"
                  name="aboutCompany"
                  value={jobFormDetails.aboutCompany}
                  onChange={handleChange}
                  className={styles.errorInput}
                ></textarea>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>Skills Required</label>
              {!errors.skillsRequiredErr && (
                <input
                  type="text"
                  placeholder="Enter the must have skills"
                  className={styles.addJob_input}
                  name="skillsRequired"
                  value={jobFormDetails.skillsRequired}
                  onChange={handleChange}
                ></input>
              )}
              {errors.skillsRequiredErr && (
                <input
                  type="text"
                  placeholder="Enter the skills"
                  className={styles.errorInput}
                  name="skillsRequired"
                  value={jobFormDetails.skillsRequired}
                  onChange={handleChange}
                ></input>
              )}
            </div>

            <div className={styles.input_wrapper}>
              <label>Information</label>
              {!errors.informationErr && (
                <input
                  type="text"
                  placeholder="Enter the additional information"
                  className={styles.addJob_input}
                  name="information"
                  value={jobFormDetails.information}
                  onChange={handleChange}
                ></input>
              )}
              {errors.informationErr && (
                <input
                  type="text"
                  placeholder="Please enter the information"
                  className={styles.errorInput}
                  name="information"
                  value={jobFormDetails.information}
                  onChange={handleChange}
                ></input>
              )}
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
