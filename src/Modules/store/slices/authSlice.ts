import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  status: "successed" | "loading" | "failed";
}

const initialState: AuthState = {
  isAuthenticated: false,
  status: "failed",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      if (username === "admin" && password === "admin") {
        state.isAuthenticated = true;
        state.status = "successed";
      } else {
        alert("올바른 정보를 기입하세요.")
        state.isAuthenticated = false;
        state.status = "failed";
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.status = "failed";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
