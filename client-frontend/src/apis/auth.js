import axios from "axios";

const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

export async function login(email, password, setUserData) {
  const reqUrl = `${backendBaseUrl}/auth/login`;
  const reqPayload = {
    email: email,
    password: password,
  };
  return await axios
    .post(reqUrl, reqPayload)
    .then((response) => {
      localStorage.setItem("jwToken", response.data.jwToken);
      localStorage.setItem("userData", JSON.stringify(response.data));
      setUserData(response.data);
      console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      alert("Invalid credentials !");
      throw error;
    });
}

export async function register(name, email, mobile, password, setUserData) {
  try {
    const reqUrl = `${backendBaseUrl}/auth/register`;
    const reqPayload = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    return await axios
      .post(reqUrl, reqPayload)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("jwToken", response.data.jwToken);
        localStorage.setItem("userData", JSON.stringify(response.data));
        setUserData(response.data);
        console.log(response.data)
        return response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
}
