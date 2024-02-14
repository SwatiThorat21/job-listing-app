import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function createJob(
  companyName,
  logoUrl,
  jobPosition,
  monthlySalary,
  jobType,
  remote,
  location,
  jobDescription,
  aboutCompany,
  skillsRequired,
  information,
  userData,
  setJobsData
) {
  if (!userData || !setJobsData ) return;
  try {
    const reqUrl = `${backendBaseUrl}/job/create-job-post`;
    const reqPayload = {
      companyName: companyName,
      logoUrl: logoUrl,
      jobPosition: jobPosition,
      monthlySalary: monthlySalary,
      jobType: jobType,
      remote: remote,
      location: location,
      jobDescription: jobDescription,
      aboutCompany: aboutCompany,
      skillsRequired: skillsRequired,
      information: information,
    };
    const headers = {
      jwtoken: `${userData.jwToken}`,
    };
    return await axios
      .post(reqUrl, reqPayload, { headers })
      .then((response) => {
        setJobsData((prevData) => {
          return [...prevData, response.data.data];
        });
        return response.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getAllJobs(skillsArray) {
  try {
    let reqUrl = `${backendBaseUrl}/job/job-posts`;
    if(skillsArray && skillsArray.length > 0){
      reqUrl += `?skillsRequired=${skillsArray.join(',')}`
    }
    return await axios
      .get(reqUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getJobDataById(id) {
  try {
    const reqUrl = `${backendBaseUrl}/job/job-post/${id}`;
    return await axios
      .get(reqUrl)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function editJobDataById(id, jwToken, setJobDetails) {
  if (!jwToken) return;
  try {
    const reqUrl = `${backendBaseUrl}/job/job-post/${id}`;
    const reqPayload = {
      id: id,
    };
    const headers = {
      jwtoken: `${jwToken}`,
    };
    return await axios
      .patch(reqUrl, reqPayload, { headers })
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
