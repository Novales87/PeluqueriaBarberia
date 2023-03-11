import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBarber } from "../../../Store/deleteBarberSlice";
import { deleteCalendar } from "../../../Store/delteCalendarByIdSlice";
import logo3 from "../../../images/Logo3.png";

import "./BarberCard.css";
import CardBarber from "./CardBarber";

function BarberCard({ barber }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleDelete = () => {
  //   const confirmed = window.confirm(
  //     "¿Estás seguro que deseas eliminar este barbero?"
  //   );
  //   if (confirmed) {
  //     if (barber.Calendars[0].id) {
  //       dispatch(deleteCalendar(barber.Calendars[0].id)).then(() => {
  //         dispatch(deleteBarber(barber.id)).then(() => {
  //           alert("Barbero y Calendario eliminados correctamente");
  //           setTimeout(() => navigate("/dashboard/barbers"), 1000);
  //         });
  //       });
  //     } else {
  //       dispatch(deleteBarber(barber.id)).then(() => {
  //         alert("Barbero eliminado correctamente");
  //         setTimeout(() => navigate("/dashboard/barbers"), 1000);
  //       });
  //     }
  //   }
  // };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "¿Estás seguro que deseas eliminar este barbero?"
    );
    if (confirmed) {
      if (barber.Calendars && barber.Calendars.length > 0) {
        await dispatch(deleteCalendar(barber.Calendars[0].id));
        await dispatch(deleteBarber(barber.id));
        alert("Barbero y Calendario eliminados correctamente");
      } else {
        await dispatch(deleteBarber(barber.id));
        alert("Barbero eliminado correctamente");
      }
      setTimeout(() => navigate("/dashboard/barbers"), 1000);
    }
  };

  return (
    <CardBarber barber={barber} logo={logo3} handleDelete={handleDelete} />
  );
}

export default BarberCard;
