import React from "react";
import { Link } from "react-router-dom";

function CardBarber({ barber, logo, handleDelete }) {
  return (
    
      <div className="card" style={{ width: "28rem" }}>
        <img
          src={logo}
          className="rounded float-start img-fluid "
          alt={barber.id}
          style={{ marginBottom: "20px" }}
        />
        <div className="card-body">
          <h3 className="card-title">{barber.name}</h3>
          <h4 className="card-title">{barber.lastName}</h4>
          <p className="card-text"> {barber.startDate}</p>
          <h6>Estado: {barber.active ? "Activo" : "Inactivo"}</h6>
          <Link
            to={`/dashboard/update/${barber.id}`}
            className="btn btn-primary btn-sm"
            style={{ margin: "5px" }}
          >
            Editar
          </Link>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-primary btn-sm"
          >
            Eliminar
          </button>
        </div>
        <Link to={`/dashboard/barbers`} className="btn btn-primary btn-sm">
          Volver
        </Link>
      </div>
  );
}

export default CardBarber;
