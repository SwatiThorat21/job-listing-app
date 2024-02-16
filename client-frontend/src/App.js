import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/registerPage/RegistrationPage.js";
import Login from "./pages/login_page/LoginPage.js";
import Home from "./pages/home_page/Home.js";
import JobDescriptionPage from "./pages/job_description_page/jobDescriptionPage.js";
import AddAndEditJobPage from "./pages/addAndEditJob_page/AddAndEditJob_page.js";
import { getAllJobs } from "./apis/jobs.js";

function App() {
  const [userData, setUserData] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [jobFormDetails, setJobFormDetails] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    remote: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: "",
    information: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("jwToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getAllJobs();
        setJobsData(jobs.jobs);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(jobDetails);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userData={userData}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                jobsData={jobsData}
                setJobDetails={setJobDetails}
                jobDetails={jobDetails}
                setJobsData={setJobsData}
                setJobFormDetails={setJobFormDetails}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Registration
                setUserData={setUserData}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          ></Route>
          <Route
            path="/view-job/:id"
            element={
              <JobDescriptionPage
                userData={userData}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                jobDetails={jobDetails}
                setJobDetails={setJobDetails}
                setUserData={setUserData}
              />
            }
          ></Route>
          <Route
            path="/add-edit-job"
            element={
              <AddAndEditJobPage
                userData={userData}
                setJobsData={setJobsData}
                setJobDetails={setJobDetails}
                jobFormDetails={jobFormDetails}
                setJobFormDetails={setJobFormDetails}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
