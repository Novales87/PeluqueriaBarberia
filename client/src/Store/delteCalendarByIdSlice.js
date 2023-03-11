import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  calendar: {},
  status: "idle",
  error: null,
};

export const deleteCalendar = createAsyncThunk(
  "myCalendarSlice/deleteCalendar",
  async (calendarId) => {
    const response = await axios.delete(
      `http://localhost:3001/api/calendar/${calendarId}`
    );
    return response.data;
  }
);

const myCalendarSlice = createSlice({
  name: "myCalendarSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCalendar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCalendar.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.calendar = action.payload;
      })
      .addCase(deleteCalendar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default myCalendarSlice.reducer;
