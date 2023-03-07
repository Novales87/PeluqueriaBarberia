import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Verificación de Gmail


  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/i;
    console.log(email, password);

    if(email.match(gmailPattern)) {
        setPassword("");
        setEmail("");

    } else {
        alert("Por favor ingrese una dirección de Gmail válida");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Correo Electrónico: </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        autoComplete="off"
        required
      />
      <label htmlFor="password"> Contraseña: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        required
      />

      <button type="submit">Click Me</button>
    </form>
  );
}

export default Login;
