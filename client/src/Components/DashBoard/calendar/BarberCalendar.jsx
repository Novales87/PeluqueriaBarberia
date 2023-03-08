// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./BarberCalendar.css";

// const BarberCalendar = (id) => {
//   const [calendar, setCalendar] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(
//           `http://localhost:3001/api/calendar/${id}`
//         );
//         setCalendar(result.data.date);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const getScheduleForSelectedDate = () => {
//     console.log("Selected date:", selectedDate);
//     console.log("Calendar:", calendar);
//     if (selectedDate) {
//       const selectedDateSchedule = calendar.find(
//         (date) =>
//           date.date.substring(0, 10) ===
//           selectedDate.toISOString().substring(0, 10)
//       );
//       console.log("Selected date schedule:", selectedDateSchedule);
//       if (selectedDateSchedule) {
//         return selectedDateSchedule.schedule;
//       }
//     }
//     return [];
//   };

//   return (
//     <div className="Container-calendar">
//       <div className="calendar-container">
//         <Calendar onClickDay={handleDateClick} />
//       </div>

//       <div className="schedule-container">
//         <h2>Horarios disponibles</h2>
//         {getScheduleForSelectedDate().length > 0 && (
//           <div className="schedule-container-hours">
//             {getScheduleForSelectedDate().map((time) => (
//               <div key={time.hora} className="hour-button">
//                 <button
//                   onClick={() =>
//                     console.log(
//                       `Horario ${
//                         time.hora
//                       } seleccionado para la fecha ${selectedDate
//                         .toISOString()
//                         .substring(0, 10)}`
//                     )
//                   }
//                   disabled={time.reserved}
//                 >
//                   {time.hora}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BarberCalendar;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BarberCalendar.css";
import { fetchCalendar } from "../../../Store/BarberCalendarSlice";

const BarberCalendar = ({ id }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const calendar = useSelector((state) => state.barberCalendar.calendar);

  useEffect(() => {
    dispatch(fetchCalendar(id));
  }, [dispatch, id]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getScheduleForSelectedDate = () => {
    console.log("Selected date:", selectedDate);
    console.log("Calendar:", calendar);
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
