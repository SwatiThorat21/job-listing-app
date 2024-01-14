import google from "../../images/Google.png";
import stipend from "../../images/money-fill.png";
import calender from "../../images/calender.png";
import styles from "./JobDescription.module.css";

export default function JobDescription({ jobsData }) {
  return (
    <>
      <div className={styles.jd_containder}>
        <div className={styles.jd_heading_wrapper}>
          <p>
            {" "}
            {jobsData.jobPosition} {jobsData.remote} job/{jobsData.jobType}
          </p>
          <p> at {jobsData.companyName} </p>
        </div>
        <div className={styles.job_details_wrapper}>
          <div className={styles.top_details}>
            <p>1w ago</p>
            <p>.</p>
            <p>{jobsData.jobType}e</p>
            <img src={google} alt={styles.google}></img>
            <p>Google</p>
          </div>
          <div className={styles.job_title_container}>
            <div className={styles.title_wrapper}>
              <div className={styles.job_title}>{jobsData.jobPosition}</div>
              <p>{jobsData.location} | India</p>
            </div>
            <button className={styles.edit_btn}>Edit job</button>
          </div>
          <div className={styles.stipend_duration_wrapper}>
            <div>
              <div className={styles.flex_details}>
                <img
                  src={stipend}
                  alt="stipend"
                  style={{ width: "17px" }}
                ></img>
                <p style={{ color: "#999999", fontSize: "14px" }}>Stipend</p>
              </div>
              <p style={{ fontSize: "16px", color: "#595959" }}>
                Rs {jobsData.monthlySalary}/month
              </p>
            </div>
            <div>
              <div className={styles.flex_details}>
                <img
                  src={calender}
                  alt="stipend"
                  style={{ width: "15px" }}
                ></img>
                <p style={{ color: "#999999", fontSize: "14px" }}>Durtion</p>
              </div>
              <p style={{ fontSize: "16px", color: "#595959" }}>6 Months</p>
            </div>
          </div>
          <div className={styles.description_wrapper}>
            <div className={styles.about_company}>
              <h2 className="about_title">About company</h2>
              <p>{jobsData.aboutCompany}</p>
            </div>
            <div className={styles.about_job}>
              <h2 className="about_title">About the job/internship</h2>
              <p>{jobsData.jobDescription}</p>
            </div>
            <div className={styles.skilld_required_wrapper}>
              <h2 className="about_title">Skills required</h2>
              <div className={styles.skills_wrapper}>
                {jobsData.skillsRequired?.map((skill) => {
                  return <div className={styles.skill}>{skill}</div>;
                })}
              </div>
            </div>
            <div className={styles.additional_info}>
              <h2 className="about_title">Additional Information</h2>
              <p>{jobsData.information}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
