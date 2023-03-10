import { useEffect, useState } from "react";
import "./BarberDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBarberById } from "../../../Store/fetchBarberByIdSlice";
import Loading from "../../Loading/Loading";
import BarberCard from "../BarberCard/BarberCard";
import Navbar from "../Nav/Nav";
import BarberCalendar from "../calendar/BarberCalendar";

function BarberDetails() {
  const { id } = useParams();
  const barber = useSelector((state) => state.fetchBarberById.barber);
  const status = useSelector((state) => state.fetchBarberById.status);
  const error = useSelector((state) => state.fetchBarberById.error);
  const dispatch = useDispatch();
  const [calendars, setCalendars] = useState(null); // Agregamos un estado para las propiedades "Calendars"

  useEffect(() => {
    dispatch(fetchBarberById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (barber && barber.Calendars) {
      // Verificamos si la propiedad "Calendars" existe en el objeto "barber"
      setCalendars(barber.Calendars); // Si existe, actualizamos el estado "calendars" con el valor de "Calendars"
    }
  }, [barber]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="Details">
        {barber && <BarberCard barber={barber} />}

        {calendars && calendars.length > 0 && (
          <BarberCalendar uuid={calendars[0].id} />
        )}
      </div>
    </div>
  );
}

export default BarberDetails;
