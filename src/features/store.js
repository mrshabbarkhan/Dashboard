import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import auth2Reducer from "./Auth/authSlice";
import documentReducer from "./document/documentSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    auth2: auth2Reducer,
    document: documentReducer,
  },
});

export default store;
