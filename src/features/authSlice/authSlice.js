import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authdata",
  initialState: {
    isLoading: false,
    query: [],
    isError: false,
    isSuccess: false,
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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCreateDocument.pending, (state) => {
  //       state.isLoading = true;
  //       state.isSuccess = false;
  //       state.isError = false;
  //       state.message = "";
  //     })
  //     .addCase(getCreateDocument.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.isError = false;
  //       state.query = action.payload;
  //       state.message = "";
  //     })
  //     .addCase(getCreateDocument.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = false;
  //       state.isError = true;
  //       state.message = action.payload;
  //     });
  // },
});

// Create Document

// export const getCreateDocument = createAsyncThunk(
//   "CREATE/DOCUMENT",
//   async (formData, thunkAPI) => {
//     try {
//       const token = await thunkAPI.getState().auth.user.token;
//       return await documentService.createDocument(formData, token);
//     } catch (error) {
//       const message = error.response.data.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export default authSlice.reducer;
