import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/registerPage/RegistrationPage.js";
import Login from "./pages/login_page/LoginPage.js";
import Home from "./pages/home_page/Home.js";
import JobDescriptionPage from "./pages/job_description_page/jobDescriptionPage.js";

function App() {
  const [userData, setUserData] = useState(undefined);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home userData={userData} />}></Route>
          <Route path="/login" element={<Login setUserData={setUserData}/>}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/job-decription" element={<JobDescriptionPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
