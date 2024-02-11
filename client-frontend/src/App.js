import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/registerPage/RegistrationPage.js";
import Login from "./pages/login_page/LoginPage.js";
import Home from "./pages/home_page/Home.js";
import JobDescriptionPage from "./pages/job_description_page/jobDescriptionPage.js";
import AddJobPage from "./pages/addJob_page/AddJob_page.js";
import { getAllJobs } from "./apis/jobs.js";

function App() {
  const [userData, setUserData] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    setIsLoggedIn(!!userData);
  }, [userData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getAllJobs();
        setJobsData(jobs);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(userData);

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
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
            }
          ></Route>
          )}
          <Route
            path="/register"
            element={
              <Registration
                setIsLoggedIn={setIsLoggedIn}
                setUserData={setUserData}
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
              />
            }
          ></Route>
          <Route
            path="/add-job"
            element={
              <AddJobPage userData={userData} setJobsData={setJobsData} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
