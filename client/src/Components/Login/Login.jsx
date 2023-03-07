import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Verificación de Gmail

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/i;
    console.log(email, password);

    if (email.match(gmailPattern)) {
      setPassword("");
      setEmail("");
    } else {
      alert("Por favor ingrese una dirección de Gmail válida");
    }
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "Center" }}
      onSubmit={handleSubmit}
    >
      <div>
        <h1>Please sig in</h1>
      </div>
      <div>
        <div>

        <label htmlFor="email"> Correo Electrónico: </label>
        </div>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />
      </div>

      <div>
        <div>
          <label htmlFor="password"> Contraseña: </label>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="submit">
          Sign In
        </button>
      </div>
      <div>
        <h4>© 2022-2023</h4>
      </div>
    </form>
  );
}

export default Login;
