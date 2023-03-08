import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  accessToken: {},
  status: "idle",
  error: null,
};

export const verifyLogin = createAsyncThunk(
  "login/verifyLogin",
  async (data) => {
    try {
      const { email, password } = data;
      const response = await axios.post(
        `http://localhost:3001/api/login`, 
        {
          email, password
        }, {
          withCredentials: true,
        });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

// Define el slice para los barberos
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Maneja la acción para crear un nuevo barbero
      .addCase(createBarber.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBarber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload;
      })
      .addCase(createBarber.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Exporta el reducer
export default loginSlice.reducer;