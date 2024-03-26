import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

// Page reload
const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  users: userExist ? userExist : null,
  isLoadings: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoadings = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoadings = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
        state.message = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoadings = false;
        state.isSuccess = false;
        state.isError = true;
        state.users = null;
        state.message = action.payload;
      })

      // Logout
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.users = null;
        state.isLoadings = false;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoadings = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoadings = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
        state.message = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoadings = false;
        state.isSuccess = false;
        state.isError = true;
        state.users = null;
        state.message = action.payload;
      });
  },
});

// Login User

export const loginUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (formData, thunkAPI) => {
    // console.log(formData)
    try {
      return await authServices.login(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
  localStorage.removeItem("user");
});

// Register User

export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (formData, thunkAPI) => {
    console.log(formData);
    try {
      return await authServices.register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default authSlice.reducer;
