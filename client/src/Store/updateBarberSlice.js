import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  barber: null,
  status: "idle",
  error: null,
};

export const updateBarber = createAsyncThunk("barbers/update", async (data) => {
  const { id, name, lastName, startDate, active } = data;
  const response = await axios.put(`http://localhost:3001/api/barbers/${id}`, {
    name,
    lastName,
    startDate,
    active,
  });
  return response.data.data;
});

const updateBarberSlice = createSlice({
  name: "updateBarber",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateBarber.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBarber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.barber = action.payload;
      })
      .addCase(updateBarber.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default updateBarberSlice.reducer;
