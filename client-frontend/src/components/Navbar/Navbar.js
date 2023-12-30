import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import leftRectangle from "../../images/home_left_rectangle.png";
import rightRectangle from "../../images/home_right_rectangle.png";
import topRectangle from "../../images/home_top_rectangle.png";
import recruiter_logo from "../../images/recruiter_logo.png";
import "./navbar.css";

export default function Navbar({ userData }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(userData)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  function isLogOut() {
    setIsLoggedIn(false);
    navigate("/login");
    localStorage.removeItem("token");
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="navbar">
          <h3>Jobfinder</h3>
          <div className="login_btns_wrapper">
            <p className="logout_option" onClick={() => isLogOut()}>
              Logout
            </p>
            <p className="recruiter_name">Hello!, {userData.recruiterName}</p>
            <img src={recruiter_logo} alt="recruiter_logo"></img>
          </div>
          <img
            src={leftRectangle}
            alt="leftRectangle"
            className="leftRectangle"
          ></img>
          <img
            src={rightRectangle}
            alt="rightRectangle"
            className="rightRectangle"
          ></img>
          <img
            src={topRectangle}
            alt="topRectangle"
            className="topRectangle"
          ></img>
        </div>
      ) : (
        <div className="navbar">
          <h3>Jobfinder</h3>
          <div className="login_btns_wrapper">
            <button className="loginBtn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="registerBtn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
          <img
            src={leftRectangle}
            alt="leftRectangle"
            className="leftRectangle"
          ></img>
          <img
            src={rightRectangle}
            alt="rightRectangle"
            className="rightRectangle"
          ></img>
          <img
            src={topRectangle}
            alt="topRectangle"
            className="topRectangle"
          ></img>
        </div>
      )}
    </>
  );
}
