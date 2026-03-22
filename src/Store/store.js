import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Feature/user";

const store = configureStore({
  reducer: {
    user : userReducer,
  },
});

export default store;
