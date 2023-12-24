import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export const login = (email, password) => {
  try {
    const reqUrl = `${backendBaseUrl}/auth/login`;
    const reqPayload = {
      email: email,
      password: password,
    };
    const response = axios.post(reqUrl, reqPayload);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = (name, email, mobile, password) => {
  try {
    const reqUrl = `${backendBaseUrl}/auth/login`;
    const reqPayload = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    const response = axios.post(reqUrl, reqPayload);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
