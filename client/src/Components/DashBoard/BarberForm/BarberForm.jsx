import "./BarberForm.scss";
import { useNavigate } from "react-router-dom";
import logo3 from "../../../images/Logo3.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBarber } from "../../../Store/barberActions";
import Nav from "../Nav/Nav";
import { ColorChange } from "../../../Utils/Mode";

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
  
    useEffect(() => {
        ColorChange()
    }, [dispatch]);

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
      <div className="Card-Create">
        <img src={logo3} alt="Logo" />
        <h2>Crear Nuevo Barbero</h2>
        <form onSubmit={handleSubmit} className="Card-Create-Info">
          {response && <h5>{response}</h5>}
          <div className="mb-3 spanInfo">
            <label htmlFor="name" className="form-label">
              <h6>Nombre:</h6>
            </label>
            <input className="form-control" type="text" id="name" name="name" value={barber.name} onChange={handleInputChange} />
          </div>

          <div className="mb-3 spanInfo">
            <label htmlFor="lastName" className="form-label">
              <h6> Apellido:</h6>
            </label>
            <input className="form-control" type="text" id="lastName" name="lastName" value={barber.lastName} onChange={handleInputChange} />
          </div>

          <div className="mb-3 spanInfo">
            <label htmlFor="phone" className="form-label">
              <h6>Teléfono:</h6>
            </label>
            <input className="form-control" type="number" id="phone" name="phone" value={barber.phone} onChange={handleInputChange} />
          </div>

          <div className="spanInfo">
            <label htmlFor="startDate">
              <h6>Fecha de inicio:</h6>
            </label>
            <input type="date" id="startDate" name="startDate" value={barber.startDate} onChange={handleInputChange} />
          </div>
          <div className="form-check">
            <label htmlFor="active">
              <h6> Activo:</h6>
            </label>
            <input type="checkbox" id="active" name="active" checked={barber.active} onChange={() => setBarber((prevState) => ({ ...prevState, active: !prevState.active, }))} />
          </div>
          <button type="submit" className="GuardarTodo">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default BarberForm;
