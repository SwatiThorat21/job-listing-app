import google from "../../images/Google.png";
import stipend from "../../images/money-fill.png";
import calender from "../../images/calender.png";

export default function JobDescription() {
  return (
    <>
      <div className="jd_containder">
        <div className="jd_heading">
          <p>
            WordPress Development work from home job/internship at Adyaka
            Infosec Private Limited
          </p>
        </div>
        <div className="job_details">
          <div className="top_details">
            <p>1w ago</p>
            <p>.</p>
            <p>Full time</p>
            <img src={google} alt="google"></img>
            <p>Google</p>
          </div>
          <div className="job_title_container">
            <div className="title_wrapper">
              <div className="job_title">WordPress Development</div>
              <p>Banglore</p>
            </div>
            <button className="edit_btn">Edit job</button>
          </div>
          <div className="stipend_duration_wrapper">
            <div>
              <div className="flex_details">
                <img src={stipend} alt="stipend"></img>
                <p>Stipend</p>
              </div>
              <p>Rs 25000/month</p>
            </div>
            <div>
              <div className="flex_details">
                <img src={calender} alt="stipend"></img>
                <p>Durtion</p>
              </div>
              <p>6 Months</p>
            </div>
          </div>
          <div className="description_wrapper">
            <div className="about_company">
              <h2>About company</h2>
              <p>
                We provide technology-based services to help businesses and
                organizations achieve their goals. We offer a wide range of
                services, including software development, system integration,
                network and security services, cloud computing, and data
                analytics. Our primary focus is on leveraging technology to
                streamline business processes, improve productivity, and enhance
                overall efficiency.
              </p>
            </div>
            <div className="about_job">
              <h2>About the job/internship</h2>
              <p>
                We are looking for a responsible PHP/WordPress/Laravel/Shopify
                Developer. He/She will be liable for managing services and
                therefore the interchange of knowledge between the server and
                the users. The candidate's primary focus is going to be the
                event of all server-side logic, definition, and maintenance of
                the central database and ensuring high performance and
                responsiveness to requests from the front end.
              </p>
              <p>
                Selected intern's day-to-day responsibilities include: 1. Work
                on the development of theme customization, liquid programming
                language, and corresponding apps 2. Implement system
                integrations that are crucial to our success 3. Contribute to
                the development of HTML5/CSS/JavaScript and standard web
                technologies integral to building seamless multi-channel
                experiences 4. Work on speed optimization and making a
                mobile-friendly website
              </p>
            </div>
            <div className="skilld_required_wrapper">
              <div className="skill">CSS</div>
              <div className="skill">HTML</div>
              <div className="skill">WordPress</div>
            </div>
            <div className="additional_info">
              <h2>Additional Information</h2>
              <p>
                Stipend structure: This is a performance-based internship. In
                addition to the minimum-assured stipend, you will also be paid a
                performance-linked incentive (₹ 2500 per design)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
