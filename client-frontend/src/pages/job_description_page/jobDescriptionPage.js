import "./jobDescriptionPage.css";
import Navbar from "../../components/navbar/Navbar";
import JobDescription from "../../components/view_JobDescription/JobDescription";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getJobDataById } from "../../apis/jobs";

export default function JobDescriptionPage({
  userData,
  isLoggedIn,
  setIsLoggedIn,
  jobsData,
  jobDetails,
  setJobDetails,
  setUserData,
  setJobFormDetails,
}) {
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetails = await getJobDataById(id);
        setJobDetails(jobDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobDetails();
  }, [id, setJobDetails]);

  return (
    <>
      <div className="jd_page_container">
        <Navbar
          userData={userData}
          isLoggedIn={isLoggedIn}
          setUserData={setUserData}
          setIsLoggedIn={setIsLoggedIn}
        />
        <JobDescription
          jobDetails={jobDetails}
          setJobFormDetails={setJobFormDetails}
        />
      </div>
    </>
  );
}
