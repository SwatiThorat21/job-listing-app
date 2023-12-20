import login_bgImg from "../images/login_bg_img.png";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <h2>Already have an account?</h2>
          <p className="login_heading">Your personal job finder is here</p>
          <div className="input_wrapper">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
          </div>
          <button className="login_btn">Sign in</button>
          <p className="signup_link_para">
            Don't have an account? <span className="signup_link">Sign Up</span>
          </p>
        </div>
        <div className="login_bg_img_container">
          <h2 className="tagline">Your Personal Job Finder</h2>
          <img src={login_bgImg} alt="login_bgImg" className="loginPage_bg"></img>
        </div>
      </div>
    </>
  );
}
