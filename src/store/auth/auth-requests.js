const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", { ...data });
};

export const requestAuthLogin = (data) => {
  console.log(data);

  return axios.post("/auth/login", { ...data });
};
