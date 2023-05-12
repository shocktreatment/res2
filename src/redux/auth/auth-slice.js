import { createSlice } from "@reduxjs/toolkit";
import { currentUser, logIn, logOut, signUp } from "./auth-operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    loading: false,
    isLogin: false,
    error: null,
    isCurrent: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = true;
        state.user = {};
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
      }),
});

export const authReducer = authSlice.reducer;
