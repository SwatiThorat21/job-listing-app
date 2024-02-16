import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { login } from "../../apis/auth";

export default function LoginForm({ setUserData, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    emailErr: false,
    passwordErr: false,
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
    const newErrors = {};
    let mailFormat = /\S+@\S+\.\S+/;
    if (!email || !email.match(mailFormat)) {
      newErrors.emailErr = true;
    }
    if (!password || password.length < 8 || password.length > 15) {
      newErrors.passwordErr = true;
    }
    setErrors(newErrors);
    try {
      if (Object.keys(newErrors).length === 0) {
        setIsLoading(true);
        await login(email, password, setUserData);
        setIsLoggedIn(true)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
          {errors.emailErr && (
            <label className={styles.errorMsg}>Invalid email !</label>
          )}
          <input
            type="password"
            placeholder="Password"
            className={styles.login_input}
            name="password"
            onChange={handleChange}
            value={loginData.password}
            style={{marginTop:"0.7rem"}}
          ></input>
          {errors.passwordErr && (
            <label className={styles.errorMsg}>Invalid password !</label>
          )}
        </div>
        <button
          className={styles.login_btn}
          onClick={() => addLoginUser(loginData.email, loginData.password)}
        >
           {isLoading ? "Loading..." : "Sign In"}
        </button>
        <p className={styles.signup_link_para}>
          Don't have an account?
          <span
            className={styles.signup_link}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
}
