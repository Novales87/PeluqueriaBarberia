import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  barber: null,
  status: "idle",
  error: null,
};

export const deleteBarber = createAsyncThunk(
  "barbers/deleteBarber",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/barbers/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteBarberSlice = createSlice({
  name: "barbers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteBarber.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBarber.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(deleteBarber.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default deleteBarberSlice.reducer;
