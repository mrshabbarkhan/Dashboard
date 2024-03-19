import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isloading: false,
    isError: false,
    isSucces: false,
    user: [
      {
        id: 1,
        name: "shabbar",
        email: "shabbar@gmail.com",
        message: "hello sir how are you",
      },
      {
        id: 2,
        name: "admin",
        email: "admin@gmail.com",
        message: "i am fine",
      },
    ],
    message: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
