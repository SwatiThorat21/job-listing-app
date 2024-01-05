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
  skills,
  information, 
  userData
) {
  console.log(userData.jwToken)
  try {
    const reqUrl = `${backendBaseUrl}/job/job-post`;
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
      skills: skills,
      information: information,
    };
    const headers = {
      Authorization: `Bearer ${userData.jwToken}`,
    }
    console.log(`Bearer ${userData.jwToken}`)
    return await axios
      .post(reqUrl, reqPayload, {headers})
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
