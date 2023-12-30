import LoginForm from "../../components/login/loginForm";
import LoginBg from "../../components/loginRegister_bg/LoginBg";

export default function Login({ setUserData }) {
  return (
    <>
      <div
        className="login_container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <LoginForm setUserData={setUserData} />
        <LoginBg />
      </div>
    </>
  );
}
