import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Card from "../../components/jobs/JobCards";

export default function Home({
  userData,
  isLoggedIn,
  setIsLoggedIn,
  jobsData,
  setJobDetails,
  setJobsData,
  setJobFormDetails
}) {
  return (
    <>
      <div className="home_container">
        <Navbar
          userData={userData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        {jobsData.length === 0  && !isLoggedIn ? (
          <div className="noJobs_content">No Jobs are added.</div>
        ) : (
          <div className="mainPage_container">
            <Search isLoggedIn={isLoggedIn} setJobsData={setJobsData}/>
            <div className="cards_container">
              <Card
                isLoggedIn={isLoggedIn}
                jobsData={jobsData}
                setJobDetails={setJobDetails}
                setJobFormDetails={setJobFormDetails}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
