import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBarbers } from "../../../Store/fetchBarbersSlice";
import Loading from "../../Loading/Loading";
import "./BarberList.css";
import Navbar from "../Nav/Nav";
import CardBarberList from "./CardBarberList";
import logo from "../../../images/logo.jpeg";

function BarberList() {
  const barbers = useSelector((state) => state.fetchBarbers.barbers);
  const status = useSelector((state) => state.barbers.status);
  const error = useSelector((state) => state.barbers.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBarbers());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />

      {!!barbers && barbers.length > 0 ? (
        barbers.map((barber) => (
          <div key={barber.id}>
            <CardBarberList barber={barber} logo={logo} />
          </div>
        ))
      ) : (
        <div>No hay barberos disponibles</div>
      )}
    </div>
  );
}

export default BarberList;
