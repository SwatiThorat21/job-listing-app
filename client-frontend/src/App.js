import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/RegistrationPage.js";
import Login from "./pages/LoginPage.js";
import Home from "./pages/home_without_login/Home.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
