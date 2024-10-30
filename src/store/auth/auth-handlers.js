import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log(response);

    if (response.status === 201) {
      toast.success("Created new user successfully");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    // console.log(response);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (error) {
    // toast.error("Password incorrected");
  }
}

export { handleAuthLogin };
