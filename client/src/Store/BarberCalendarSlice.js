import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCalendar = createAsyncThunk(
  "calendar/fetchCalendar",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/api/calendar/${id}`
    );
    return response.data.date;
  }
);

const BarberCalendarSlice = createSlice({
  name: "calendar",
  initialState: {
    calendar: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCalendar.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCalendar.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.calendar = action.payload;
    },
    [fetchCalendar.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default BarberCalendarSlice.reducer;
