import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { register } from "../../apis/auth";

export default function Register({ setIsLoggedIn, setUserData }) {
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
  async function addRegisterUser(name, email, mobile, password) {
    try {
      await register(name, email, mobile, password, setUserData);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className={styles.register_form_container}>
        <h2>Create an account</h2>
        <p className={styles.login_heading}>Your personal job finder is here</p>
        <div className={styles.input_wrapper}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            name="name"
            onChange={handleChange}
            value={registerData.name}
          ></input>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            name="email"
            onChange={handleChange}
            value={registerData.email}
          ></input>
          <input
            type="text"
            placeholder="Mobile"
            className={styles.input}
            name="mobile"
            onChange={handleChange}
            value={registerData.mobile}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            name="password"
            onChange={handleChange}
            value={registerData.password}
          ></input>
          <div className={styles.conditions_check_wrapper}>
            <input type="checkbox"></input>
            <label className={styles.conditions_check}>
              By creating an account, I agree to our terms of use and privacy
            </label>
          </div>
        </div>
        <button
          className={styles.register_btn}
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
        <p className={styles.signup_link_para}>
          Already have an account?
          <span
            className={styles.signup_link}
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </div>
    </>
  );
}
