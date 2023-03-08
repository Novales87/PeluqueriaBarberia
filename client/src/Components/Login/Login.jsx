import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { verifyLogin } from "../../Store/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo.jpeg"
import "./Login.scss";

function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  // navigate('/home', { state: { from: location }, replace: true})

  //Verificación de Gmail

  const handleChangeLogin = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    })
    console.log(formLogin);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/i;
    console.log(formLogin);
    const email = formLogin.email;

    if (email.match(gmailPattern)) {
      try {
        dispatch(verifyLogin(formLogin))
        navigate("/dashboard/barbers");
      } catch (error) {
        throw Error(error);
      }
      
    } else {
      alert("Por favor ingrese una dirección de Gmail válida");
    }
  };

  return (
  <div className="Login-container"> 
      <img className="logo-barber fade-in-logo" src ={logo} alt ="The Cutman"/>
      <form onSubmit={handleSubmit} className="Login-form-container fade-in">
        <h1 className="title-sign-in">Sign in</h1>
        <div className="container-gmail">
          <div className="gmail-box">
            <i class='bx bx-envelope' style={{color:"#ffffff" }} ></i>
          </div>
          <input
            name="email"
            className="input-gmail"
            placeholder="Correo Electrónico"
            type="text"
            id="email"
            value={formLogin.email}
            onChange={(e) => handleChangeLogin(e)}
            autoComplete="off"
            required
          />
        </div>
        <div className="container-password">
          <div className="password-box">
            <i class='bx bx-lock' style={{color:"#ffffff" }} ></i>
          </div>
          <input
            name="password"
            className="input-password"
            placeholder="Contraseña"
            type="password"
            id="password"
            value={formLogin.password}
            onChange={(e) => handleChangeLogin(e)}
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