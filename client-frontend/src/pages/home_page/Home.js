import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Card from "../../components/cards/Card";

export default function Home({ userData, isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <div className="home_container">
        <Navbar
          userData={userData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div className="mainPage_container">
          <Search isLoggedIn={isLoggedIn} />
          <div className="cards_container">
            <Card isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Card isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      </div>
    </>
  );
}
