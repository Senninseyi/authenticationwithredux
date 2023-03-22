import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducer/auth.js"

const store = configureStore({
  reducer: {
    auth : AuthSlice
  },
});

export { store };
