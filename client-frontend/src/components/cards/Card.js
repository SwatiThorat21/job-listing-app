import logo from "../../images/company_logo.png";
import peopleIcon from "../../images/people_logo.png";
import rupeeIcon from "../../images/rupee_logo.png";
import flag from "../../images/country_flag.png";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  function viewJobDetails() {
    navigate("/view-job");
    setIsLoggedIn(true);
  }
  return (
    <>
      {isLoggedIn ? (
        <div className={styles.jobCard_container}>
          <div className={styles.job_card}>
            <div className={styles.job_details_container}>
              <div className={styles.logo_container}>
                <img src={logo} alt="logo"></img>
              </div>
              <div className={styles.job_details_wrapper}>
                <p className={styles.job_title}>Frontend Developer</p>
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
                    <p>50,000</p>
                  </div>
                  <div className={styles.country}>
                    <img src={flag} alt="flag" style={{ width: "18px" }}></img>
                    <p>Delhi</p>
                  </div>
                </div>
                <div className={styles.remote}>
                  <p>Office</p>
                  <p>Full time</p>
                </div>
              </div>
            </div>
            <div className={styles.skills_wrapper}>
              <div className={styles.skills}>
                <div className={styles.skill}>Frontend</div>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>React</div>
              </div>
              <div className={styles.details_btn_wrapper}>
                <button className={styles.editJob_btn}>Edit Job</button>
                <button
                  className={styles.viewDetails_btn}
                  onClick={viewJobDetails}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.jobCard_container}>
          <div className={styles.job_card}>
            <div className={styles.job_details_container}>
              <div className={styles.logo_container}>
                <img src={logo} alt="logo"></img>
              </div>
              <div className={styles.job_details_wrapper}>
                <p className={styles.job_title}>Frontend Developer</p>
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
                    <p>50,000</p>
                  </div>
                  <div className={styles.country}>
                    <img src={flag} alt="flag" style={{ width: "18px" }}></img>
                    <p>Delhi</p>
                  </div>
                </div>
                <div className={styles.remote}>
                  <p>Office</p>
                  <p>Full time</p>
                </div>
              </div>
            </div>
            <div className={styles.skills_wrapper}>
              <div className={styles.skills}>
                <div className={styles.skill}>Frontend</div>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>React</div>
              </div>
              <div className={styles.details_btn_wrapper}>
                <button className={styles.viewDetails_btn}>View Details</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
