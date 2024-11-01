const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", { ...data });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", { ...data });
};

export const requestAuthFetchMe = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      Authorization: `Bearers ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    refreshToken: token,
  });
};
