import searchbar from "../../images/search.png";
import closeIcon from "../../images/close_icon.png";
import styles from "./Search.module.css";
import { createJob } from "../../apis/jobs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllJobs } from "../../apis/jobs";

export default function Search({ isLoggedIn, setJobsData }) {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setSelectedSkills((prevSkills) => {
      if (!prevSkills.includes(value)) {
        if (prevSkills.length < 5) {
          return [...prevSkills, value];
        }
        return prevSkills;
      } else {
        return prevSkills.filter((skill) => skill !== value);
      }
    });
    localStorage.setItem(
      "selectedSkills",
      JSON.stringify([...selectedSkills, value])
    );
  }

  useEffect(() => {
    const storedSkills = localStorage.getItem("selectedSkills");
    if (storedSkills) {
      setSelectedSkills(JSON.parse(storedSkills));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getAllJobs(selectedSkills);
        setJobsData(jobs.jobs);
        console.log(jobs);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [selectedSkills, setJobsData]);

  console.log(selectedSkills);

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

  function closeSkills(index) {
    setSelectedSkills((prevSkills) => {
      const updatedSkills = prevSkills.filter((_, i) => i !== index);
      localStorage.setItem("selectedSkills", JSON.stringify(updatedSkills));
      return updatedSkills;
    });
  }
  function clearSkillsSelected() {
    setSelectedSkills([]);
    localStorage.removeItem("selectedSkills");
  }
  return (
    <>
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
          <div
            className={styles.searchbySkills_wrapper}
            value={selectedSkills}
            onChange={handleChange}
            name="jobType"
          >
            <select className={styles.select}>
              <option value="ReactJs">ReactJs</option>
              <option value="Angular">Angular</option>
              <option value="Vue.js">Vue.js</option>
              <option value="Express.js">Express.js</option>
              <option value="Django">Django</option>
              <option value="Flask">Flask</option>
              <option value="Spring Boot">Spring Boot</option>
              <option value="Ruby on Rails">Ruby on Rails</option>
              <option value="Laravel">Laravel</option>
              <option value="ASP.NET Core">ASP.NET Core</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C##">C##</option>
              <option value="C++">C++</option>
              <option value="Ruby">Ruby</option>
              <option value="Swift">Swift</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Typescript">Typescript</option>
              <option value="PHP">PHP</option>
              <option value="Rust">Rust</option>
              <option value="Dart">Dart</option>
              <option value="RESTful APIs">RESTful APIs</option>
              <option value="GraphQL">GraphQL</option>
              <option value="HTML">HTML</option>
              <option value="Git">Git</option>
              <option value="Data Structures and Algorithms">
                Data Structures and Algorithms
              </option>
            </select>
            <div className={styles.skills_wrapper}>
              {selectedSkills.map((skill, index) => (
                <div className={styles.skill_withClose_div} key={index}>
                  <div className={styles.skill_div}>{skill}</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className={styles.closeIcon}
                    onClick={() => closeSkills(index)}
                  ></img>
                </div>
              ))}
            </div>
          </div>
          {isLoggedIn ? (
            <button onClick={addJob} className={styles.addJob_btn}>
              +Add Job
            </button>
          ) : (
            ""
          )}
        </div>
        <p className={styles.clear_skills} onClick={clearSkillsSelected}>
          Clear
        </p>
      </div>
    </>
  );
}
