import "./jobDescriptionPage.css";
import Navbar from "../../components/navbar/Navbar";
import JobDescription from "../../components/view_JobDescription/JobDescription";

export default function JobDescriptionPage() {
  return (
    <>
      <div className="jd_page_container">
        <Navbar />
        <JobDescription />
      </div>
    </>
  );
}
