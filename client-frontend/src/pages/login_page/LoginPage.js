import LoginForm from "../../components/login/loginForm";
import LoginBg from "../../components/loginRegister_bg/LoginBg";

export default function Login() {
  return (
    <>
      <div className="login_container" style={{display:"flex", justifyContent: "space-between"}}>
        <LoginForm />
        <LoginBg />
      </div>
    </>
  );
}
