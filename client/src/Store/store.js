import { configureStore } from "@reduxjs/toolkit";
import barbersReducer from "./barberSlice";
import fetchBarbersSlice from "./fetchBarbersSlice";
import fetchBarberByIdSlice from "./fetchBarberByIdSlice";
import updateBarberReducer from "./updateBarberSlice";
import deleteBarberSlice from "./deleteBarberSlice";
import createCalendarSlice from "./CreateCalendarSlice";
const store = configureStore({
  reducer: {
    // aquí van tus reducers
    barbers: barbersReducer,
    fetchBarbers: fetchBarbersSlice,
    fetchBarberById: fetchBarberByIdSlice,
    updateBarber: updateBarberReducer,
    deleteBarber: deleteBarberSlice,
    calendar: createCalendarSlice,
  },
});

export default store;
