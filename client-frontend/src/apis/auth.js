import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function login(email, password) {
  try {
    const reqUrl = `${backendBaseUrl}/auth/login`;
    const reqPayload = {
      email: email,
      password: password,
    };
    return await axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        localStorage.setItem("token", response.data.jwToken);
        localStorage.setItem("userData", JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export const register = (name, email, mobile, password) => {
  try {
    const reqUrl = `${backendBaseUrl}/auth/register`;
    const reqPayload = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    const response = axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
