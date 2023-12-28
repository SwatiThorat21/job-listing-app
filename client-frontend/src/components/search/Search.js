import searchbar from "../../images/search.png";
import closeIcon from "../../images/close_icon.png";
import "./search.css";

export default function Search() {
  return (
    <>
      <div className="search_container">
        <div className="input_container">
          <img src={searchbar} alt="searchbar" className="searchbar"></img>
          <input type="text" placeholder="Type any job title"></input>
        </div>
        <div className="searchbySkills_clear_container">
          <div className="searchbySkills_wrapper">
            <select className="select">
              <option value="skills">Skills</option>
            </select>
            <div className="skill_withClose_div">
              <div className="skill_div">Frontend</div>
              <img src={closeIcon} alt="closeIcon" className="closeIcon"></img>
            </div>
            <div className="skill_withClose_div">
              <div className="skill_div">CSS</div>
              <img src={closeIcon} alt="closeIcon" className="closeIcon"></img>
            </div>
          </div>
          <p className="clear_skills">Clear</p>
        </div>
      </div>
    </>
  );
}
