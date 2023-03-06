import React from "react";
import { Link } from "react-router-dom";
import barba from "../../../images/barba.png";
import "./BarberCard.css";

function BarberCard({ barber }) {
  return (
    <div className="barberCardDetail">
      <img key={barber.id} src={barba}></img>
      <div className="barberCardDetail2">
        <h3>{barber.name}</h3>
        <h3>{barber.lastName}</h3>
        <p>{barber.startDate}</p>
        <h3>{barber.active ? "Activo" : "Inactivo"}</h3>
        <button>eliminar</button>
        <Link to={`/dashboard/update/${barber.id}`}>
          <button>editar</button>
        </Link>
      </div>
    </div>
  );
}

export default BarberCard;
