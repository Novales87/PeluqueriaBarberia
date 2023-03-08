import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.jpeg"
import "./Login.scss";

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
    <div className="Login-container "> 
      <img className="logo-barber fade-in-logo" src ={logo} alt ="The Cutman"/>
      <form onSubmit={handleSubmit} className="Login-form-container fade-in">
        <h1 className="title-sign-in">Sign in</h1>
        <div className="container-gmail">
          <div className="gmail-box">
            <i class='bx bx-envelope' style={{color:"#ffffff" }} ></i>
          </div>
          <input
            className="input-gmail"
            placeholder="Correo Electrónico"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="container-password">
          <div className="password-box">
            <i class='bx bx-lock' style={{color:"#ffffff" }} ></i>
          </div>
          <input
            className="input-password"
            placeholder="Contraseña"
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
        <h4 className="reserved-c">© 2022-2023</h4>
      </form>
    </div>
  );
}

export default Login;