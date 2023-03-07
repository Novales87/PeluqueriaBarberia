import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { updateBarber } from "../../../Store/updateBarberSlice";
import { fetchBarberById } from "../../../Store/fetchBarberByIdSlice";
import Loading from "../../Loading/Loading";
import "./BarberUpdate.css";
import logo3 from "../../../images/Logo3.png";
import logo from "../../../images/logo.jpeg";

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
    if (!name || !lastName || !startDate) {
      alert("Por favor complete los campos obligatorios.");
      return;
    }
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

  return (
    <div className="barberUpBox">
      <img src={logo3} />
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <div>{error}</div>
      ) : (
        barber && (
          <div className="barberUpBox2">
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
          </div>
        )
      )}
      <Link to={`/dashboard/detail/${barber.id}`}>
        <button>volver</button>
      </Link>
    </div>
  );
}

export default BarberUpdate;
