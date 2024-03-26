import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import auth2Reducer from "./Auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    auth2: auth2Reducer,
  },
});

export default store;
