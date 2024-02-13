import Register from "../../components/register/Register";
import LoginBg from "../../components/loginRegister_bg/LoginBg";

export default function Registration({ setUserData, setIsLoggedIn }) {
  return (
    <>
      <div
        className="registerPage_container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Register setUserData={setUserData} setIsLoggedIn={setIsLoggedIn}/>
        <LoginBg />
      </div>
    </>
  );
}
