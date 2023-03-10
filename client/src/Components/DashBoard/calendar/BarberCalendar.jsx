import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BarberCalendar.css";
import { fetchCalendar } from "../../../Store/BarberCalendarSlice";

const BarberCalendar = ({ uuid }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const calendar = useSelector((state) => state.BarberCalendarSlice.calendar);

  useEffect(() => {
    dispatch(fetchCalendar(uuid));
  }, [dispatch, uuid]);
  console.log(calendar);
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getScheduleForSelectedDate = () => {
    if (selectedDate) {
      const selectedDateSchedule = calendar.find(
        (date) =>
          date.date.substring(0, 10) ===
          selectedDate.toISOString().substring(0, 10)
      );
      console.log("Selected date schedule:", selectedDateSchedule);
      if (selectedDateSchedule) {
        return selectedDateSchedule.schedule;
      }
    }
    return [];
  };

  return (
    <div className="Container-calendar">
      <div className="calendar-container">
        <Calendar onClickDay={handleDateClick} />
      </div>

      <div className="schedule-container">
        <h2>Horarios disponibles</h2>
        {getScheduleForSelectedDate().length > 0 && (
          <div className="schedule-container-hours">
            {getScheduleForSelectedDate().map((time) => (
              <div key={time.hora} className="hour-button">
                <button
                  onClick={() =>
                    console.log(
                      `Horario ${
                        time.hora
                      } seleccionado para la fecha ${selectedDate
                        .toISOString()
                        .substring(0, 10)}`
                    )
                  }
                  disabled={time.reserved}
                >
                  {time.hora}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BarberCalendar;
