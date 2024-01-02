import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Card from "../../components/cards/Card";

export default function Home({ userData, isLoggedIn, setIsLoggedIn }) {
  console.log(userData);
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
            <Card isLoggedIn={isLoggedIn} />
            <Card isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
    </>
  );
}
