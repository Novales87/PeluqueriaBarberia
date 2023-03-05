import { createSlice } from "@reduxjs/toolkit";
import { createBarber } from "./barberActions";

// Define el slice para los barberos
const barberSlice = createSlice({
  name: "barbers",
  initialState: {
    barber: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Maneja la acción para crear un nuevo barbero
      .addCase(createBarber.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBarber.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.barber = action.payload;
      })
      .addCase(createBarber.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Exporta el reducer del slice
export default barberSlice.reducer;
