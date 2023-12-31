import searchbar from "../../images/search.png";
import closeIcon from "../../images/close_icon.png";
import styles from "./Search.module.css";

export default function Search({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <div className={styles.search_container}>
          <div className={styles.input_container}>
            <img src={searchbar} alt="searchbar" className={styles.searchbar}></img>
            <input type="text" placeholder="Type any job title"></input>
          </div>
          <div className={styles.searchbySkills_clear_container}>
            <div className={styles.searchbySkills_wrapper}>
              <select className={styles.select}>
                <option value="skills">Skills</option>
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
            <button className={styles.addJob_btn}>+Add Job</button>
          </div>
          <p className={styles.clear_skills}>Clear</p>
        </div>
      ) : (
        <div className={styles.search_container}>
          <div className={styles.input_container}>
            <img src={searchbar} alt="searchbar" className={styles.searchbar}></img>
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
