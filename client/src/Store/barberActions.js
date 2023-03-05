import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define la acción para crear un nuevo barbero
export const createBarber = createAsyncThunk(
  "barbers/createBarber",
  async (barber) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/barbers",
        barber
      );
      if (response.data.message) {
        return { message: response.data.message };
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return { error: error.response.data.message };
    }
  }
);
