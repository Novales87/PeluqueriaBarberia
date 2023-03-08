import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { verifyLogin } from "../../Store/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

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
        navigate("/");
      } catch (error) {
        throw Error(error);
      }
      
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
          name="email"
          type="text"
          id="email"
          value={formLogin.email}
          onChange={(e) => handleChangeLogin(e)}
          autoComplete="off"
          required
        />
      </div>

      <div>
        <div>
          <label htmlFor="password"> Contraseña: </label>
        </div>
        <input
          name="password"
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
      <div>
        <h4>© 2022-2023</h4>
      </div>
    </form>
  );
}

export default Login;
