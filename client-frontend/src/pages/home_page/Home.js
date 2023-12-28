import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Card from "../../components/cards/Card";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <Navbar />
        <div className="mainPage_container">
          <Search />
          <div className="cards_container">
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
