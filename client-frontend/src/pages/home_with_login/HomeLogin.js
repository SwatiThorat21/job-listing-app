import logo from "../../images/company_logo.png";
import peopleIcon from "../../images/people_logo.png";
import rupeeIcon from "../../images/rupee_logo.png";
import flag from "../../images/country_flag.png";
import leftRectangle from "../../images/home_left_rectangle.png";
import rightRectangle from "../../images/home_right_rectangle.png";
import topRectangle from "../../images/home_top_rectangle.png";
import searchbar from "../../images/search.png";
import closeIcon from "../../images/close_icon.png";
import recruiter_logo from "../../images/recruiter_logo.png";
import "./homelogin.css";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <div className="navbar">
          <h3>Jobfinder</h3>
          <div className="login_btns_wrapper">
            <p className="logout_option">Logout</p>
            <p className="recruiter_name">Hello! Recruiter</p>
            <img src={recruiter_logo} alt="recruiter_logo"></img>
          </div>
          <img
            src={leftRectangle}
            alt="leftRectangle"
            className="leftRectangle"
          ></img>
          <img
            src={rightRectangle}
            alt="rightRectangle"
            className="rightRectangle"
          ></img>
          <img
            src={topRectangle}
            alt="topRectangle"
            className="topRectangle"
          ></img>
        </div>
        <div className="mainPage_container">
          <div className="search_container">
            <div className="input_container">
              <img src={searchbar} alt="searchbar" className="searchbar"></img>
              <input type="text" placeholder="Type any job title"></input>
            </div>
            <div className="searchbySkills_clear_container">
              <div className="searchbySkills_wrapper">
                <select className="select">
                  <option value="skills">Skills</option>
                </select>
                <div className="skill_withClose_div">
                  <div className="skill_div">Frontend</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className="closeIcon"
                  ></img>
                </div>
                <div className="skill_withClose_div">
                  <div className="skill_div">CSS</div>
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className="closeIcon"
                  ></img>
                </div>
              </div>
              <button className="addJob_btn">+Add Job</button>
            </div>
            <p className="clear_skills">Clear</p>
          </div>
          <div className="cards_container">
            <div className="jobCard_container">
              <div className="job_card">
                <div className="job_details_container">
                  <div className="logo_container">
                    <img src={logo} alt="logo"></img>
                  </div>
                  <div className="job_details_wrapper">
                    <p className="job_title">Frontend Developer</p>
                    <div className="company_details_wrapper">
                      <div className="people_count">
                        <img
                          src={peopleIcon}
                          alt="people_icon"
                          style={{ width: "15px" }}
                        ></img>
                        <p>11-50</p>
                      </div>
                      <div className="salary">
                        <img
                          src={rupeeIcon}
                          alt="rupeeIcon"
                          style={{ width: "8px" }}
                        ></img>
                        <p>50,000</p>
                      </div>
                      <div className="country">
                        <img
                          src={flag}
                          alt="flag"
                          style={{ width: "18px" }}
                        ></img>
                        <p>Delhi</p>
                      </div>
                    </div>
                    <div className="remote">
                      <p>Office</p>
                      <p>Full time</p>
                    </div>
                  </div>
                </div>
                <div className="skills_wrapper">
                  <div className="skills">
                    <div className="skill">Frontend</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">React</div>
                  </div>
                  <div className="details_btn_wrapper">
                    <button className="editJob_btn">Edit Job</button>
                    <button className="viewDetails_btn">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="jobCard_container">
              <div className="job_card">
                <div className="job_details_container">
                  <div className="logo_container">
                    <img src={logo} alt="logo"></img>
                  </div>
                  <div className="job_details_wrapper">
                    <p className="job_title">Frontend Developer</p>
                    <div className="company_details_wrapper">
                      <div className="people_count">
                        <img
                          src={peopleIcon}
                          alt="people_icon"
                          style={{ width: "15px" }}
                        ></img>
                        <p>11-50</p>
                      </div>
                      <div className="salary">
                        <img
                          src={rupeeIcon}
                          alt="rupeeIcon"
                          style={{ width: "8px" }}
                        ></img>
                        <p>50,000</p>
                      </div>
                      <div className="country">
                        <img
                          src={flag}
                          alt="flag"
                          style={{ width: "18px" }}
                        ></img>
                        <p>Delhi</p>
                      </div>
                    </div>
                    <div className="remote">
                      <p>Office</p>
                      <p>Full time</p>
                    </div>
                  </div>
                </div>
                <div className="skills_wrapper">
                  <div className="skills">
                    <div className="skill">Frontend</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">React</div>
                  </div>
                  <div className="details_btn_wrapper">
                    <button className="editJob_btn">Edit Job</button>
                    <button className="viewDetails_btn">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
