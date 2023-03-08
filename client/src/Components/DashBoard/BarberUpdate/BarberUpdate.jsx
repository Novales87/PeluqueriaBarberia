import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { updateBarber } from "../../../Store/updateBarberSlice";
import { fetchBarberById } from "../../../Store/fetchBarberByIdSlice";
import Loading from "../../Loading/Loading";
import "./BarberUpdate.css";
import logo3 from "../../../images/Logo3.png";
import Navbar from "../Nav/Nav";
import AddCalendar from "./AddCalendar";

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
    <>
      <Navbar />
      <div className="ContainerUp">
        <div className="barberUpBox">
          <img
            src={logo3}
            style={{
              width: "40%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
          {status === "loading" ? (
            <Loading />
          ) : status === "failed" ? (
            <div>{error}</div>
          ) : (
            barber && (
              <div className="barberUpBox2">
                <form onSubmit={handleSubmit}>
                  <div
                    className="mb-3"
                    style={{
                      width: "80%",
                      color: "black",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                      }}
                    >
                      <h5>Nombre:</h5>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div
                    className="mb-3"
                    style={{
                      width: "80%",
                      color: "black",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <label
                      htmlFor="lastName"
                      className="form-label"
                      style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                      }}
                    >
                      <h5>Apellido:</h5>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div
                    className="mb-3"
                    style={{
                      width: "80%",
                      color: "black",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <label
                      htmlFor="startDate"
                      style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                      }}
                    >
                      <h6>Fecha de inicio:</h6>
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div
                    className="mb-3"
                    style={{
                      width: "80%",
                      color: "black",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <label
                      htmlFor="active"
                      style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                      }}
                    >
                      <h6>Activo:</h6>
                    </label>
                    <input
                      type="checkbox"
                      id="active"
                      checked={active}
                      onChange={(e) => setActive(e.target.checked)}
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary btn-sm"
                  >
                    Guardar
                  </button>
                  {operationStatus === "success" && (
                    <p>¡Actualización exitosa!</p>
                  )}
                  {operationStatus === "failed" && (
                    <p>Hubo un error al actualizar los datos.</p>
                  )}
                </form>
                <AddCalendar barberId={barber.id} />
                <Link to={`/dashboard/detail/${barber.id}`}>
                  <button className="btn btn-primary btn-sm">volver</button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default BarberUpdate;
