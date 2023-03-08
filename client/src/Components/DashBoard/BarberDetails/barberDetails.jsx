import { useEffect, useState } from "react";
import "./BarberDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBarberById } from "../../../Store/fetchBarberByIdSlice";
import Loading from "../../Loading/Loading";
import BarberCard from "../BarberCard/BarberCard";
import Navbar from "../Nav/Nav";

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
    return <Loading />;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="Details">{barber && <BarberCard barber={barber} />}</div>
    </div>
  );
}

export default BarberDetails;
