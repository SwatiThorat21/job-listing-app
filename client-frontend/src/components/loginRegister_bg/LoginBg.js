import login_bgImg from "../../images/login_bg_img.png";
import "./loginBg.css";

export default function LoginBg() {
  return (
    <>
      <div className="login_bg_img_container">
        <h2 className="tagline">Your Personal Job Finder</h2>
        <img src={login_bgImg} alt="login_bgImg" className="loginPage_bg"></img>
      </div>
    </>
  );
}
