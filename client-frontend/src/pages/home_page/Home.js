import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Card from "../../components/cards/Card";

export default function Home({
  userData,
  isLoggedIn,
  setIsLoggedIn,
  jobsData,
  setJobDetails,
}) {
  return (
    <>
      <div className="home_container">
        <Navbar
          userData={userData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        {jobsData.length === 0 ? (
          <div className="noJobs_content">No Jobs are added.</div>
        ) : (
          <div className="mainPage_container">
            <Search isLoggedIn={isLoggedIn} />
            <div className="cards_container">
              <Card
                isLoggedIn={isLoggedIn}
                jobsData={jobsData}
                setJobDetails={setJobDetails}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
