import logo from "../../images/company_logo.png";
import peopleIcon from "../../images/people_logo.png";
import rupeeIcon from "../../images/rupee_logo.png";
import flag from "../../images/country_flag.png";
import "./card.css"

export default function Card(){
    return(
        <>
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
        </>
    )
}