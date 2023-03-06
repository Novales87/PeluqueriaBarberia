// import React from "react";
// import { Link } from "react-router-dom";
// import barba from "../../../images/barba.png";
// import logo from "../../../images/logo.jpeg";
// import "./BarberCard.css";

// function BarberCard({ barber }) {
//   return (
//     <div className="barberCardDetail">
//       <img key={barber.id} src={logo}></img>
//       <div className="barberCardDetail2">
//         <h2>{barber.name}</h2>
//         <h2>{barber.lastName}</h2>
//         <p>{barber.startDate}</p>
//         <h4>{barber.active ? "Activo" : "Inactivo"}</h4>
//         <button>Eliminar</button>
//         <Link to={`/dashboard/update/${barber.id}`}>
//           <button>Editar</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default BarberCard;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBarber } from "../../../Store/deletebarberSlice";
import barba from "../../../images/barba.png";
import logo from "../../../images/logo.jpeg";
import "./BarberCard.css";

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
    <div className="barberCardDetail">
      <img key={barber.id} src={logo}></img>
      <div className="barberCardDetail2">
        <h2>{barber.name}</h2>
        <h2>{barber.lastName}</h2>
        <p>{barber.startDate}</p>
        <h4>Estado: {barber.active ? "Activo" : "Inactivo"}</h4>
        <button onClick={handleDelete}>Eliminar</button>
        <Link to={`/dashboard/update/${barber.id}`}>
          <button>Editar</button>
        </Link>
      </div>
      <Link to={`/dashboard/barbers`}>
        <button>Volver</button>
      </Link>
    </div>
  );
}

export default BarberCard;
