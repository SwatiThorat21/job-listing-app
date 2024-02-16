import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { register } from "../../apis/auth";

export default function Register({ setUserData, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    agreeTerms: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    nameErr: false,
    emailErr: false,
    mobileErr: false,
    passwordErr: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setRegisterData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function addRegisterUser(name, email, mobile, password) {
    const newErrors = {};
    if (!name) {
      newErrors.nameErr = true;
    }

    let mailFormat = /\S+@\S+\.\S+/;
    if (!email || !email.match(mailFormat)) {
      newErrors.emailErr = true;
    }

    let mobileFormat = /^\d{10}$/;
    if (!mobile || !mobile.match(mobileFormat)) {
      newErrors.mobileErr = true;
    }

    if (!password || password.length < 8 || password.length > 15) {
      newErrors.passwordErr = true;
    }
    setErrors(newErrors);
    try {
      if (Object.keys(newErrors).length === 0 && registerData.agreeTerms) {
        setIsLoading(true);
        await register(name, email, mobile, password, setUserData);
        setIsLoggedIn(true);
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
          {errors.nameErr && (
            <label className={styles.errorMsg}>Please enter name !</label>
          )}
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            name="email"
            onChange={handleChange}
            value={registerData.email}
          ></input>
          {errors.emailErr && (
            <label className={styles.errorMsg}>Invalid email !</label>
          )}
          <input
            type="text"
            placeholder="Mobile"
            className={styles.input}
            name="mobile"
            onChange={handleChange}
            value={registerData.mobile}
          ></input>
          {errors.mobileErr && (
            <label className={styles.errorMsg}>
              Please enter valid mobile number !
            </label>
          )}
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            name="password"
            onChange={handleChange}
            value={registerData.password}
          ></input>
          {errors.passwordErr && (
            <label className={styles.errorMsg}>Invalid password !</label>
          )}
          <div className={styles.conditions_check_wrapper}>
            <input
              type="checkbox"
              checked={registerData.agreeTerms}
              onChange={handleChange}
              name="agreeTerms"
            ></input>
            <label className={styles.conditions_check}>
              By creating an account, I agree to our terms of use and privacy
            </label>
          </div>
          {!registerData.agreeTerms && (
            <label className={styles.errorMsg}>
              Check this box if you want to proceed !
            </label>
          )}
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
            {isLoading ? "Loading..." : "Sign Up"}
          </span>
        </p>
      </div>
    </>
  );
}
