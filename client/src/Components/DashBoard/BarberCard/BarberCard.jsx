import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBarber } from "../../../Store/deletebarberSlice";
import logo3 from "../../../images/Logo3.png";

import "./BarberCard.css";
import CardBarber from "./CardBarber";

function BarberCard({ barber }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm(
      "¿Estás seguro que deseas eliminar este barbero?"
    );
    if (confirmed) {
      dispatch(deleteBarber(barber.id)).then(() => {
        alert("Barbero eliminado correctamente");
        setTimeout(() => navigate("/dashboard/barbers"), 2000);
      });
    }
  };

  return (
    <div>
      <CardBarber barber={barber} logo={logo3} handleDelete={handleDelete} />
    </div>
  );
}

export default BarberCard;
