import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBarberById = createAsyncThunk(
  "barberById/fetchBarberById",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/barbers/${id}`
      );
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

const barberByIdSlice = createSlice({
  name: "barberById",
  initialState: {
    barber: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarberById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBarberById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.barber = action.payload;
      })
      .addCase(fetchBarberById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default barberByIdSlice.reducer;
