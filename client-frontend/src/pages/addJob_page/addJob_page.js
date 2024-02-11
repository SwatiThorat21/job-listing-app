import AddJob from "../../components/addJob/AddJob";

export default function addJobPage({ userData, setJobsData }) {

  return (
    <>
      <AddJob userData={userData} setJobsData={setJobsData} />
    </>
  );
}
