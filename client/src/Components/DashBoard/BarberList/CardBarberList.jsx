import React from "react";
import { Link } from "react-router-dom";
function CardBarberList({ barber, logo }) {
  return (
    <div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-xs-8 col-md-9 col-xl-5  ">
          <div className="card">
            <div className="card-body">
              <img
                src={logo}
                className="rounded float-start w-100 "
                alt={barber.id}
                style={{ marginBottom: "20px" }}
              />
              <h4 className="card-title">{barber.name}</h4>
              <h5 className="card-title">{barber.lastName}</h5>
              <p className="card-text">
                {barber.active ? "Activo" : "Inactivo"}
              </p>
              <Link
                to={`/dashboard/detail/${barber.id}`}
                className="btn btn-primary"
              >
                Detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBarberList;
