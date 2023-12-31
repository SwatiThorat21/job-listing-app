import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { login } from "../../apis/auth";

export default function LoginForm({ setIsLoggedIn }) {
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
  async function addLoginUser(email, password) {
    try {
      await login(email, password);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className={styles.login_form_container}>
        <h2>Already have an account?</h2>
        <p className={styles.login_heading}>Your personal job finder is here</p>
        <div className={styles.input_wrapper}>
          <input
            type="email"
            placeholder="Email"
            className={styles.login_input}
            name="email"
            onChange={handleChange}
            value={loginData.email}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className={styles.login_input}
            name="password"
            onChange={handleChange}
            value={loginData.password}
          ></input>
        </div>
        <button
          className={styles.login_btn}
          onClick={() => addLoginUser(loginData.email, loginData.password)}
        >
          Sign in
        </button>
        <p className={styles.signup_link_para}>
          Don't have an account?
          <span className={styles.signup_link} onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
}
