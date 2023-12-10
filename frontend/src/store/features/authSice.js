import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("USER = ", action.payload.data);
      state.user = {
        userdId: action.payload.data.data.userId,
        userName: action.payload.data.data.username,
      };
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: action.payload.data.data.token,
        })
      );
      state.token = action.payload.data.data.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
