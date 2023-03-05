import { configureStore } from "@reduxjs/toolkit";
import barbersReducer from "./barberSlice";
import fetchBarbersSlice from "./fetchBarbersSlice";
const store = configureStore({
  reducer: {
    // aquí van tus reducers
    barbers: barbersReducer,
    fetchBarbers: fetchBarbersSlice,
  },
});

export default store;
