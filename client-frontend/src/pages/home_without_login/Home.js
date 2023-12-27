import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../images/company_logo.png";
import peopleIcon from "../../images/people_logo.png";
import rupeeIcon from "../../images/rupee_logo.png";
import flag from "../../images/country_flag.png";
import searchbar from "../../images/search.png";
import closeIcon from "../../images/close_icon.png";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <Navbar />
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
              <p className="clear_skills">Clear</p>
            </div>
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
