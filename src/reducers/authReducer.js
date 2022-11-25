import { createSlice } from "@reduxjs/toolkit";

export const authenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    user: {},
  },
  reducers: {
    login: (state, params) => {
      const { payload } = params;
      state.user = payload;
    },
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("access_token");
      localStorage.removeItem("sb-awmgldofkkbalduukncj-auth-token");
    },
  },
});

export const { login, logout } = authenticationReducer.actions;

export const selectUser = (state) => state.user.user;

export default authenticationReducer.reducer;
