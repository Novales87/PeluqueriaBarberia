import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCalendar } from "../../../Store/CreateCalendarSlice";

function AddCalendar({ barberId }) {
  const [start, setStart] = useState("");
  const [final, setFinal] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const allowedMinutes = ["00", "15", "30", "45"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      start &&
      final &&
      allowedMinutes.includes(start.slice(-2)) &&
      allowedMinutes.includes(final.slice(-2))
    ) {
      dispatch(
        createCalendar({
          id: barberId,
          start,
          final,
        })
      );
      setStart("");
      setFinal("");
      setMessage({ type: "success", text: "Horario asignado exitosamente." });
    } else {
      setMessage({
        type: "error",
        text: "Debe ingresar la hora de inicio y fin del horario.",
      });
    }
  };

  return (
    <div>
      <h6>Asignar Horario</h6>
      {message && (
        <div className={`alert alert-${message.type}`} role="alert">
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="Hours">
          <label htmlFor="horaInicio">
            <h6>inicio:</h6>
          </label>
          <input
            type="time"
            id="horaInicio"
            name="horaInicio"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />

          <label htmlFor="horaFin">
            <h6>fin:</h6>
          </label>
          <input
            type="time"
            id="horaFin"
            name="horaFin"
            value={final}
            onChange={(e) => setFinal(e.target.value)}
          />

          {!allowedMinutes.includes(start.slice(-2)) && (
            <p className="text-danger">
              Los minutos permitidos son: 00, 15, 30 y 45.
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={
              !start ||
              !final ||
              !allowedMinutes.includes(start.slice(-2)) ||
              !allowedMinutes.includes(final.slice(-2))
            }
          >
            Asignar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCalendar;
