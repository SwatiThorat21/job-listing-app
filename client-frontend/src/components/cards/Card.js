import peopleIcon from "../../images/people_logo.png";
import rupeeIcon from "../../images/rupee_logo.png";
import flag from "../../images/country_flag.png";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { getJobDataById } from "../../apis/jobs";

export default function Card({
  isLoggedIn,
  jobsData,
  setJobDetails,
}) {
  const navigate = useNavigate();
  if (!jobsData) return;

  function viewJobDetails(index) {
    navigate(`/view-job/${jobsData[index]._id}`);
    getJobDataById(jobsData[index]._id, setJobDetails);
  }

  return (
    <>
      {jobsData &&
        jobsData.map((jobData, index) => {
          return (
            <div
              className={jobData ? styles.jobCard_container : ""}
              key={index}
            >
              <div className={styles.job_card}>
                <div className={styles.job_details_container}>
                  <div className={styles.logo_container}>
                    <img src={jobData.logoUrl} alt="logo"></img>
                  </div>
                  <div className={styles.job_details_wrapper}>
                    <p className={styles.job_title}>{jobData.jobPosition}</p>
                    <div className={styles.company_details_wrapper}>
                      <div className={styles.people_count}>
                        <img
                          src={peopleIcon}
                          alt="people_icon"
                          style={{ width: "15px" }}
                        ></img>
                        <p>11-50</p>
                      </div>
                      <div className={styles.salary}>
                        <img
                          src={rupeeIcon}
                          alt="rupeeIcon"
                          style={{ width: "8px" }}
                        ></img>
                        <p>{jobData.monthlySalary}</p>
                      </div>
                      <div className={styles.country}>
                        <img
                          src={flag}
                          alt="flag"
                          style={{ width: "18px" }}
                        ></img>
                        <p>{jobData.location}</p>
                      </div>
                    </div>
                    <div className={styles.remote}>
                      <p>{jobData.remote}</p>
                      <p>{jobData.jobType}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.skills_wrapper}>
                  <div className={styles.skills}>
                    {jobData.skillsRequired &&
                      jobData.skillsRequired.map((skill, skillIndex) => (
                        <div key={skillIndex} className={styles.skill}>
                          {skill}
                        </div>
                      ))}
                  </div>
                  <div className={styles.details_btn_wrapper}>
                    {isLoggedIn ? (
                      <button className={styles.editJob_btn}>Edit Job</button>
                    ) : (
                      ""
                    )}
                    <button
                      className={styles.viewDetails_btn}
                      onClick={() => viewJobDetails(index)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
