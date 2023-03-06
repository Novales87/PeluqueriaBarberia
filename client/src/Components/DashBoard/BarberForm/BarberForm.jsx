import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBarber } from "../../../Store/barberActions";
import "./BarberForm.css";
import logo from "../../../images/logo.jpeg";

function BarberForm() {
  const [barber, setBarber] = useState({
    name: "",
    lastName: "",
    startDate: "",
    active: false,
  });

  const [response, setResponse] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBarber((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse(""); // restablecer la respuesta antes de enviar la solicitud

    const resultAction = await dispatch(createBarber(barber));
    if (resultAction.payload.error) {
      setResponse(resultAction.payload.error);
    } else {
      setBarber({
        name: "",
        lastName: "",
        startDate: "",
        active: false,
      });
      setResponse("El barbero se creó correctamente.");
    }
  };
  return (
    <div className="ContainerForm">
      <div className="BarberFormCont">
        <img src={logo} />
        <h3>Crear Nuevo Barbero</h3>
        <form onSubmit={handleSubmit}>
          {response && <h>{response}</h>}
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={barber.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={barber.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="startDate">Fecha de inicio:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={barber.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="active">Activo:</label>
            <input
              type="checkbox"
              id="active"
              name="active"
              checked={barber.active}
              onChange={() =>
                setBarber((prevState) => ({
                  ...prevState,
                  active: !prevState.active,
                }))
              }
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default BarberForm;
