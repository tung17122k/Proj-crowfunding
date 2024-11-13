const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    // xử lý khi đăng nhập
    authLogin: (state, action) => ({
      // ...state,
      // ...action.payload,
    }),
    // xử lý khi người dùng tạo tài khoản
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    //cập nhật thông tin người dùng và accessToken
    authUpdateUser: (state, action) => ({
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    // Lấy thông tin người dùng hiện tại
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    // accessToken hết hạn cần được làm mới
    authRefreshToken: (state, action) => ({}),
    // xóa user và accessToken ra khỏi state
    authLogOut: (state, action) => ({}),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogOut,
} = authSlice.actions;
export default authSlice.reducer;
