import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";
import { login } from "../../apis/auth";

export default function LoginForm({ setUserData }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function addLoginUser(email, password) {
    login(email, password)
      .then((data) => {
        setUserData(data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      <div className="login_form_container">
        <h2>Already have an account?</h2>
        <p className="login_heading">Your personal job finder is here</p>
        <div className="input_wrapper">
          <input
            type="email"
            placeholder="Email"
            className="login_input"
            name="email"
            onChange={handleChange}
            value={loginData.email}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="login_input"
            name="password"
            onChange={handleChange}
            value={loginData.password}
          ></input>
        </div>
        <button
          className="login_btn"
          onClick={() => addLoginUser(loginData.email, loginData.password)}
        >
          Sign in
        </button>
        <p className="signup_link_para">
          Don't have an account?
          <span className="signup_link" onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
}
