import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerPage.css";
import login_bgImg from "../images/login_bg_img.png";
import { register } from "../apis/auth";

export default function Registration() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function addRegisterUser(name, email, mobile, password) {
    register(name, email, mobile, password);
    navigate("/");
  }

  return (
    <>
      <div className="registerPage_container">
        <div className="register_form_container">
          <h2>Create an account</h2>
          <p className="login_heading">Your personal job finder is here</p>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Name"
              className="input"
              name="name"
              onChange={handleChange}
              value={registerData.name}
            ></input>
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              onChange={handleChange}
              value={registerData.email}
            ></input>
            <input
              type="text"
              placeholder="Mobile"
              className="input"
              name="mobile"
              onChange={handleChange}
              value={registerData.mobile}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              onChange={handleChange}
              value={registerData.password}
            ></input>
            <div className="conditions_check_wrapper">
              <input type="checkbox"></input>
              <label className="conditions_check">
                By creating an account, I agree to our terms of use and privacy
              </label>
            </div>
          </div>
          <button
            className="register_btn"
            onClick={() =>
              addRegisterUser(
                registerData.name,
                registerData.email,
                registerData.mobile,
                registerData.password
              )
            }
          >
            Create Account
          </button>
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
