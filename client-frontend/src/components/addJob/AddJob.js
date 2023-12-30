import job_bg from "../../images/job_bg.png";
import "./addJob.css"

export default function AddJob() {
  return (
    <>
      <div className="addJob_container">
        <div className="description_container">
          <h2>Add job description</h2>
          <div className="input_form_wrapper">
            <div className="input_wrapper">
              <label>Company name</label>
              <input
                type="text"
                placeholder="Enter your company name here"
              ></input>
            </div>

            <div className="input_wrapper">
              <label>Add logo URL</label>
              <input type="text" placeholder="Enter the link"></input>
            </div>

            <div className="input_wrapper">
              <label>Job position</label>
              <input type="text" placeholder="Enter job position"></input>
            </div>

            <div className="input_wrapper">
              <label>Monthly Salary</label>
              <input type="text" placeholder="Enter Amount in rupees"></input>
            </div>

            <div className="input_wrapper">
              <label>Job Type</label>
              <select>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="input_wrapper">
              <label>Remote/office</label>
              <select>
                <option value="Remote">Remote</option>
                <option value="Part-time">Office</option>
              </select>
            </div>

            <div className="input_wrapper">
              <label>Location</label>
              <input type="text" placeholder="Enter Location"></input>
            </div>

            <div className="input_wrapper">
              <label>Job Description</label>
              <textarea placeholder="Type the job description"></textarea>
            </div>

            <div className="input_wrapper">
              <label>About Company</label>
              <textarea placeholder="Type about your company"></textarea>
            </div>

            <div className="input_wrapper">
              <label>Skills Required</label>
              <input
                type="text"
                placeholder="Enter the must have skills"
              ></input>
            </div>

            <div className="input_wrapper">
              <label>Information</label>
              <input
                type="text"
                placeholder="Enter the additional information"
              ></input>
            </div>
          </div>
          <div className="btn_wrapper">
            <button className="cancel_btn">Cancel</button>
            <button className="addJob_btn">+Add Job</button>
          </div>
        </div>
        <div className="addJob_bg_container">
          <h2>Recruiter add job details here</h2>
          <img src={job_bg} alt="job_bg"></img>
        </div>
      </div>
    </>
  );
}
