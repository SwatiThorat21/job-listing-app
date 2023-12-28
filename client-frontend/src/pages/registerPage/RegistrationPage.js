import Register from "../../components/register/Register";
import LoginBg from "../../components/loginRegister_bg/LoginBg";

export default function Registration() {
  return (
    <>
      <div
        className="registerPage_container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Register />
        <LoginBg />
      </div>
    </>
  );
}
