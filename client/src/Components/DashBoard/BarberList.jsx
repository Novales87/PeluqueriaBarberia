import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBarbers } from "../../Store/fetchBarbersSlice";

// import { fetchBarberById } from "../../Store/fetchBarberByIdSlice";
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
    return <div>Cargando...</div>;
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
            <p>{barber.lastName}</p>

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
