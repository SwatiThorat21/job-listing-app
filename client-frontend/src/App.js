import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/registerPage/RegistrationPage.js";
import Login from "./pages/login_page/LoginPage.js";
import Home from "./pages/home_page/Home.js";
import JobDescriptionPage from "./pages/job_description_page/jobDescriptionPage.js";
import AddJobPage from "./pages/addJob_page/AddJob_page.js";

function App() {
  const [userData, setUserData] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    setIsLoggedIn(!!userData);
    console.log(userData);
  }, [userData]);

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
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />}
          ></Route>
          <Route
            path="/register"
            element={<Registration setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />}
          ></Route>
          <Route
            path="/job-description"
            element={<JobDescriptionPage />}
          ></Route>
          <Route path="/add-job" element={<AddJobPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
