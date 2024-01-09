import searchbar from "../../images/search.png";
import closeIcon from "../../images/close_icon.png";
import styles from "./Search.module.css";
import { createJob } from "../../apis/jobs";
import { useNavigate } from "react-router-dom";

export default function Search({ isLoggedIn }) {
  const navigate = useNavigate();
  function addJob(
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
      createJob(
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
      );
      navigate("add-job");
    } catch (error) {}
  }
  return (
    <>
      {isLoggedIn ? (
        <div className={styles.search_container}>
          <div className={styles.input_container}>
            <img
              src={searchbar}
              alt="searchbar"
              className={styles.searchbar}
            ></img>
            <input type="text" placeholder="Type any job title"></input>
          </div>
          <div className={styles.searchbySkills_clear_container}>
            <div className={styles.searchbySkills_wrapper}>
              <select className={styles.select}>
                <option value="skillsRequired">Skills</option>
              </select>
              <div className={styles.skills_wrapper}>
                <div className={styles.skill_withClose_div}>
                  <div className={styles.skill_div}>Frontend</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className={styles.closeIcon}
                  ></img>
                </div>
                <div className={styles.skill_withClose_div}>
                  <div className={styles.skill_div}>CSS</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className={styles.closeIcon}
                  ></img>
                </div>
              </div>
            </div>
            <button onClick={addJob} className={styles.addJob_btn}>
              +Add Job
            </button>
          </div>
          <p className={styles.clear_skills}>Clear</p>
        </div>
      ) : (
        <div className={styles.search_container}>
          <div className={styles.input_container}>
            <img
              src={searchbar}
              alt="searchbar"
              className={styles.searchbar}
            ></img>
            <input type="text" placeholder="Type any job title"></input>
          </div>
          <div className={styles.searchbySkills_clear_container}>
            <div className={styles.searchbySkills_wrapper}>
              <select className={styles.select}>
                <option value={styles.skills}>Skills</option>
              </select>
              <div className={styles.skills_wrapper}>
                <div className={styles.skill_withClose_div}>
                  <div className={styles.skill_div}>Frontend</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className={styles.closeIcon}
                  ></img>
                </div>
                <div className={styles.skill_withClose_div}>
                  <div className={styles.skill_div}>CSS</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className={styles.closeIcon}
                  ></img>
                </div>
              </div>
            </div>
            <p className={styles.clear_skills}>Clear</p>
          </div>
        </div>
      )}
    </>
  );
}
