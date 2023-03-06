import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBarbers } from "../../Store/fetchBarbersSlice";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function BarberList() {
  const barbers = useSelector((state) => state.fetchBarbers.barbers);
  const status = useSelector((state) => state.barbers.status);
  const error = useSelector((state) => state.barbers.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBarbers());
    // dispatch(fetchBarberById(1));
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!!barbers && barbers.length > 0 ? (
        barbers.map((barber) => (
          <div key={barber.id}>
            <h4>{barber.name}</h4>
            <h4>{barber.lastName}</h4>

            <Link to={`/dashboard/detail/${barber.id}`}>
              <button>Detalle</button>
            </Link>
          </div>
        ))
      ) : (
        <div>No hay barberos disponibles</div>
      )}
    </div>
  );
}

export default BarberList;
