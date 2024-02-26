import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Card from "../../components/jobs/JobCards";
import { ColorRing } from "react-loader-spinner";

export default function Home({
  userData,
  isLoggedIn,
  setIsLoggedIn,
  jobsData,
  setJobDetails,
  setJobsData,
  setJobFormDetails,
  isLoading,
}) {
  return (
    <>
      <div className="home_container">
        <Navbar
          userData={userData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        {jobsData.length === 0 && !isLoggedIn ? (
          <div className="noJobs_content">No Jobs are added.</div>
        ) : isLoading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <div className="mainPage_container">
            <Search isLoggedIn={isLoggedIn} setJobsData={setJobsData} />
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
