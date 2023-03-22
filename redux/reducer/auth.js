import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {}
})


export default AuthSlice.reducer