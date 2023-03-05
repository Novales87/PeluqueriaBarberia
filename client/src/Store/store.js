import { configureStore } from "@reduxjs/toolkit";
import barbersReducer from "./barberSlice";
const store = configureStore({
  reducer: {
    // aquí van tus reducers
    barbers: barbersReducer,
  },
});

export default store;
