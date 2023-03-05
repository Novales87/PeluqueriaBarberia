import { useState, useEffect } from "react";

function BarberList() {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    async function fetchBarbers() {
      const response = await fetch("http://localhost:3001/api/barbers");
      const data = await response.json();
      setBarbers(data.data);
    }
    fetchBarbers();
  }, []);

  return (
    <div>
      {barbers.map((barber) => (
        <p key={barber.id}>
          Name: {barber.name} {barber.lastName} <br />
          Start Date: {barber.startDate} <br />
          Active: {barber.active.toString()}
        </p>
      ))}
    </div>
  );
}

export default BarberList;
