import Register from "../../components/register/Register";
import LoginBg from "../../components/loginRegister_bg/LoginBg";

export default function Registration({ setIsLoggedIn, setUserData }) {
  return (
    <>
      <div
        className="registerPage_container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Register setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
        <LoginBg />
      </div>
    </>
  );
}
