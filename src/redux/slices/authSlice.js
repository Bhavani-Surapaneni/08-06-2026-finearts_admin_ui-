import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 1,
    name: "Super Admin",
    email: "admin@danceplatform.com",
    role: "super_admin",
    avatar: null,
  },
  isAuthenticated: true,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
