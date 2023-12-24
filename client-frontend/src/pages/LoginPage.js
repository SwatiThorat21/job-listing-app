import { useNavigate } from "react-router-dom";
import login_bgImg from "../images/login_bg_img.png";
import "./loginPage.css";
// import login from "../apis/auth"

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <h2>Already have an account?</h2>
          <p className="login_heading">Your personal job finder is here</p>
          <div className="input_wrapper">
            <input
              type="email"
              placeholder="Email"
              className="login_input"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="login_input"
            ></input>
          </div>
          <button className="login_btn">Sign in</button>
          <p className="signup_link_para">
            Don't have an account?
            <span className="signup_link" onClick={() => navigate("/register")}>
              Sign Up
            </span>
          </p>
        </div>
        <div className="login_bg_img_container">
          <h2 className="tagline">Your Personal Job Finder</h2>
          <img
            src={login_bgImg}
            alt="login_bgImg"
            className="loginPage_bg"
          ></img>
        </div>
      </div>
    </>
  );
}
