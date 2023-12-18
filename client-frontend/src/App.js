import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
