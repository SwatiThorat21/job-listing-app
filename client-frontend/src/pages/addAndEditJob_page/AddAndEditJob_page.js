import AddAndEditJob from "../../components/addJob/AddAndEditJob";

export default function addJobPage({ userData, setJobsData, setJobDetails}) {
  return (
    <>
      <AddAndEditJob userData={userData} setJobsData={setJobsData} setJobDetails={setJobDetails} />
    </>
  );
}
