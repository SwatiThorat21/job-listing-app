import "./jobDescriptionPage.css";
import Navbar from "../../components/navbar/Navbar";
import JobDescription from "../../components/view_JobDescription/JobDescription";

export default function JobDescriptionPage({
  userData,
  isLoggedIn,
  setIsLoggedIn,
  jobsData,
  jobDetails,
  setJobDetails
}) {
  return (
    <>
      <div className="jd_page_container">
        <Navbar
          userData={userData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <JobDescription jobsData={jobsData} jobDetails={jobDetails} userData={userData} setJobDetails={setJobDetails}/>
      </div>
    </>
  );
}
