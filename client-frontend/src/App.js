import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration.js";
import Login from "./pages/Login.js";
import Home from "./pages/home_without_login/Home.js"

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
