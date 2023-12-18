export default function Login() {
  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <h2>Already have an account?</h2>
          <p>Your personal job finder is here</p>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <button className="login_btn">Sign in</button>
          <p className="signup_link_para">Don't have an account? <span className="signup_link">Sign Up</span></p>
        </div>
        <div className="login_bg_img_container">
            
        </div>
      </div>
    </>
  );
}
