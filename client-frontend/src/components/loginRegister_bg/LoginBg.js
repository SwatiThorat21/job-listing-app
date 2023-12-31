import login_bgImg from "../../images/login_bg_img.png";
import styles from "./LoginBg.module.css";

export default function LoginBg() {
  return (
    <>
      <div className={styles.login_bg_img_container}>
        <h2 className={styles.tagline}>Your Personal Job Finder</h2>
        <img src={login_bgImg} alt="login_bgImg" className={styles.loginPage_bg}></img>
      </div>
    </>
  );
}
