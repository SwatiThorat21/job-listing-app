import AddAndEditJob from "../../components/addJob/AddAndEditJob";

export default function addJobPage({
  userData,
  setJobsData,
  setJobDetails,
  setJobFormDetails,
  jobFormDetails,
}) {
  return (
    <>
      <AddAndEditJob
        userData={userData}
        setJobsData={setJobsData}
        setJobDetails={setJobDetails}
        jobFormDetails={jobFormDetails}
        setJobFormDetails={setJobFormDetails}
      />
    </>
  );
}
