import { useNavigate } from "react-router-dom";
import "./register.css";
import login_bgImg from "../images/login_bg_img.png";

export default function Registration() {
  const navigate = useNavigate();

  return (
    <>
      <div className="registerPage_container">
        <div className="register_form_container">
          <h2>Create an account</h2>
          <p className="login_heading">Your personal job finder is here</p>
          <div className="input_wrapper">
            <input type="text" placeholder="Name" className="input"></input>
            <input type="email" placeholder="Email" className="input"></input>
            <input type="text" placeholder="Mobile" className="input"></input>
            <input
              type="password"
              placeholder="Password"
              className="input"
            ></input>
            <div className="conditions_check_wrapper">
              <input type="checkbox"></input>
              <label className="conditions_check">
                By creating an account, I agree to our terms of use and privacy
              </label>
            </div>
          </div>
          <button className="register_btn">Create Account</button>
          <p className="signup_link_para">
            Already have an account?
            <span className="signup_link" onClick={() => navigate("/login")}>
              Sign In
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
