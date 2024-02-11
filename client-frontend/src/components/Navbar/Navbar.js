import { useNavigate } from "react-router-dom";
import leftRectangle from "../../images/home_left_rectangle.png";
import rightRectangle from "../../images/home_right_rectangle.png";
import topRectangle from "../../images/home_top_rectangle.png";
import recruiter_logo from "../../images/recruiter_logo.png";
import styles from "./Navbar.module.css";

export default function Navbar({ userData, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  function isLogOut() {
    setIsLoggedIn(false);
    navigate("/login");
   
  }

  return (
    <>
      {isLoggedIn ? (
        <div className={styles.navbar}>
          <h3 onClick={()=>navigate("/")}>Jobfinder</h3>
          <div className={styles.login_btns_wrapper}>
            <p className={styles.logout_option} onClick={() => isLogOut()}>
              Logout
            </p>
            <p className={styles.recruiter_name}>Hello! {userData?.recruiterName}</p>
            <img src={recruiter_logo} alt="recruiter_logo"></img>
          </div>
          <img
            src={leftRectangle}
            alt="leftRectangle"
            className={styles.leftRectangle}
          ></img>
          <img
            src={rightRectangle}
            alt="rightRectangle"
            className={styles.rightRectangle}
          ></img>
          <img
            src={topRectangle}
            alt="topRectangle"
            className={styles.topRectangle}
          ></img>
        </div>
      ) : (
        <div className={styles.navbar}>
          <h3>Jobfinder</h3>
          <div className={styles.login_btns_wrapper}>
            <button className={styles.loginBtn} onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className={styles.registerBtn}
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
          <img
            src={leftRectangle}
            alt="leftRectangle"
            className={styles.leftRectangle}
          ></img>
          <img
            src={rightRectangle}
            alt="rightRectangle"
            className={styles.rightRectangle}
          ></img>
          <img
            src={topRectangle}
            alt="topRectangle"
            className={styles.topRectangle}
          ></img>
        </div>
      )}
    </>
  );
}
