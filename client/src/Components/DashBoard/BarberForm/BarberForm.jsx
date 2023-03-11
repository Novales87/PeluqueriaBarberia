import "./BarberForm.css";
import { useNavigate } from "react-router-dom";
import logo3 from "../../../images/Logo3.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBarber } from "../../../Store/barberActions";
import Nav from "../Nav/Nav";

function BarberForm() {
  const [barber, setBarber] = useState({
    name: "",
    lastName: "",
    startDate: "",
    active: false,
    phone: "",
  });

  const [response, setResponse] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBarber((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setResponse(""); // restablece la respuesta antes de enviar la solicitud

  //   const resultAction = await dispatch(createBarber(barber));
  //   if (resultAction.payload.error) {
  //     setResponse(resultAction.payload.error);
  //   } else {
  //     setBarber({
  //       name: "",
  //       lastName: "",
  //       startDate: "",
  //       active: false,
  //       phone: "",
  //     });
  //     setResponse("El barbero se creó correctamente.");
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse(""); // restablece la respuesta antes de enviar la solicitud

    const resultAction = await dispatch(createBarber(barber));
    if (resultAction.payload.error) {
      setResponse(resultAction.payload.error);
    } else {
      setBarber({
        name: "",
        lastName: "",
        startDate: "",
        active: false,
        phone: "",
      });

      // esperar 1 segundo antes de navegar a /dashboard/barbers
      setTimeout(() => {
        navigate("/dashboard/barbers");
      }, 1000);

      setResponse("El barbero se creó correctamente.");
    }
  };

  return (
    <div className="ContainerForm">
      <Nav />

      <div
        style={{
          color: "black",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="holaqase"
      >
        <img
          src={logo3}
          alt="Logo"
          style={{
            width: "40%",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <h3>Crear Nuevo Barbero</h3>

        <form onSubmit={handleSubmit} className="Llename">
          {response && <h5>{response}</h5>}

          <div
            className="mb-3"
            style={{
              width: "80%",
              color: "black",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <label htmlFor="name" className="form-label">
              <h6>Nombre:</h6>
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={barber.name}
              onChange={handleInputChange}
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
            <label htmlFor="lastName" className="form-label">
              <h6> Apellido:</h6>
            </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              value={barber.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div
            className="mb-3"
            style={{
              width: "80%",
              color: "black",
              margin: "auto",
            }}
          >
            <label htmlFor="phone" className="form-label">
              <h6>Teléfono:</h6>
            </label>
            <input
              className="form-control"
              type="number"
              id="phone"
              name="phone"
              value={barber.phone}
              onChange={handleInputChange}
            />
          </div>

          <div
            style={{
              width: "80%",
              color: "black",
              margin: "auto",
            }}
          >
            <label
              htmlFor="startDate"
              style={{
                marginRight: "10px",
                padding: "10px",
              }}
            >
              <h6>Fecha de inicio:</h6>
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={barber.startDate}
              onChange={handleInputChange}
            />
          </div>

          <div
            className="mb-3 form-check"
            style={{
              width: "30%",
              color: "black",
              padding: "10px",
              margin: "auto",
            }}
          >
            <label
              htmlFor="active"
              style={{
                marginRight: "10px",
              }}
            >
              <h6> Activo:</h6>
            </label>
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

          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default BarberForm;
