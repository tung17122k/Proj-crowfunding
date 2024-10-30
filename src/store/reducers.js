// authSlice.reducer = authReducer
import authReducer from "./auth/auth-slice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer,
});
