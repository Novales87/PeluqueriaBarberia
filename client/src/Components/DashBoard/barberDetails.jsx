import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBarberById } from "../../Store/fetchBarberByIdSlice";

function BarberDetails() {
  const { id } = useParams();
  const barber = useSelector((state) => state.fetchBarberById.barber);
  const status = useSelector((state) => state.fetchBarberById.status);
  const error = useSelector((state) => state.fetchBarberById.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBarberById(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {barber && (
        <>
          <h3>{barber.name}</h3>
          <p>{barber.lastName}</p>
          <p>{barber.startDate}</p>
          <p>{barber.active ? "Activo" : "Inactivo"}</p>
          <button>eliminar</button>
          <Link to={`/dashboard/update/${barber.id}`}>
            <button>editar</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default BarberDetails;
