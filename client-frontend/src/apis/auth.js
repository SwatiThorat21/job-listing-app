import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export function login(email, password) {
  try {
    const reqUrl = `${backendBaseUrl}/auth/login`;
    const reqPayload = {
      email: email,
      password: password,
    };
 axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        localStorage.setItem("token", response.data.jwToken);
        return response.data;
      })
      .catch((error) => console.log(error));
  
  } catch (error) {
    console.log(error.message);
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
