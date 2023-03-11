import { configureStore } from "@reduxjs/toolkit";
import barbersReducer from "./barberSlice";
import fetchBarbersSlice from "./fetchBarbersSlice";
import fetchBarberByIdSlice from "./fetchBarberByIdSlice";
import updateBarberReducer from "./updateBarberSlice";
import deleteBarberSlice from "./deleteBarberSlice";
import createCalendarSlice from "./CreateCalendarSlice";
import BarberCalendarSlice from "./BarberCalendarSlice";
import myCalendarSlice from "./delteCalendarByIdSlice";
const store = configureStore({
  reducer: {
    // aquí van tus reducers
    barbers: barbersReducer,
    fetchBarbers: fetchBarbersSlice,
    fetchBarberById: fetchBarberByIdSlice,
    updateBarber: updateBarberReducer,
    deleteBarber: deleteBarberSlice,
    calendar: createCalendarSlice,
    BarberCalendarSlice: BarberCalendarSlice,
    deleteCalendar: myCalendarSlice,
  },
});

export default store;
