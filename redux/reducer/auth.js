import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null
    }
  },
});

export const { loginUser, logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
