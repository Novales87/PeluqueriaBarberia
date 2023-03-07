import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCalendar = createAsyncThunk(
  "calendar/create",
  async ({ id, start, final }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/api/calendar", {
        id,
        start,
        final,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    status: "idle",
    error: null,
    newCalendar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCalendar.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.newCalendar = null;
      })
      .addCase(createCalendar.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newCalendar = action.payload;
      })
      .addCase(createCalendar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default calendarSlice.reducer;
