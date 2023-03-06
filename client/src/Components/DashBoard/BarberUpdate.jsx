// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { updateBarber } from "../../Store/updateBarberSlice";
// import { fetchBarberById } from "../../Store/fetchBarberByIdSlice";

// function BarberUpdate() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const barber = useSelector((state) => state.fetchBarberById.barber);
//   const status = useSelector((state) => state.fetchBarberById.status);
//   const error = useSelector((state) => state.fetchBarberById.error);
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     dispatch(fetchBarberById(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (barber) {
//       setName(barber.name);
//       setLastName(barber.lastName);
//       setStartDate(barber.startDate);
//       setActive(barber.active);
//     }
//   }, [barber]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedBarber = {
//       id: barber.id,
//       name,
//       lastName,
//       startDate,
//       active,
//     };
//     dispatch(updateBarber(updatedBarber));
//   };

//   if (status === "loading") {
//     return <div>Cargando...</div>;
//   }

//   if (status === "failed") {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       {barber && (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Nombre:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <label htmlFor="lastName">Apellido:</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />

//           <label htmlFor="startDate">Fecha de inicio:</label>
//           <input
//             type="date"
//             id="startDate"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />

//           <label htmlFor="active">Activo:</label>
//           <input
//             type="checkbox"
//             id="active"
//             checked={active}
//             onChange={(e) => setActive(e.target.checked)}
//           />

//           <button type="submit" onClick={handleSubmit}>
//             Guardar
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default BarberUpdate;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBarber } from "../../Store/updateBarberSlice";
import { fetchBarberById } from "../../Store/fetchBarberByIdSlice";

function BarberUpdate() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const barber = useSelector((state) => state.fetchBarberById.barber);
  const status = useSelector((state) => state.updateBarber.status);
  const error = useSelector((state) => state.updateBarber.error);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [active, setActive] = useState(false);
  const [operationStatus, setOperationStatus] = useState("");

  useEffect(() => {
    dispatch(fetchBarberById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (barber) {
      setName(barber.name);
      setLastName(barber.lastName);
      setStartDate(barber.startDate);
      setActive(barber.active);
    }
  }, [barber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBarber = {
      id: barber.id,
      name,
      lastName,
      startDate,
      active,
    };
    dispatch(updateBarber(updatedBarber))
      .then(() => setOperationStatus("success"))
      .catch(() => setOperationStatus("failed"));
  };

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {barber && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="startDate">Fecha de inicio:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="active">Activo:</label>
          <input
            type="checkbox"
            id="active"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />

          <button type="submit" onClick={handleSubmit}>
            Guardar
          </button>
          {operationStatus === "success" && <p>¡Actualización exitosa!</p>}
          {operationStatus === "failed" && (
            <p>Hubo un error al actualizar los datos.</p>
          )}
        </form>
      )}
    </div>
  );
}

export default BarberUpdate;
