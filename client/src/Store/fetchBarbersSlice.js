import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Creamos un action asíncrono utilizando createAsyncThunk
export const fetchBarbers = createAsyncThunk(
  "barbers/fetchBarbers",
  async () => {
    const response = await axios.get("http://localhost:3001/api/barbers");
    return response.data.data;
  }
);

// Creamos un slice con la información de los barberos
const barbersSlice = createSlice({
  name: "barbers",
  initialState: {
    barbers: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarbers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBarbers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.barbers = action.payload;
      })
      .addCase(fetchBarbers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default barbersSlice.reducer;
