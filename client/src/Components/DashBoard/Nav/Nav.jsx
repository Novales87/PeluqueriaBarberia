import React from "react";
import logo from "../../../images/logo.jpeg";
import { Link } from "react-router-dom";
import { toggleDarkLight } from "../../../Utils/Mode";
function Nav() {
  return (
    <nav className="navbar  navbar-expand-sm navbar-dark bg-dark ">
      <div className="container-fluid">
        <img src={logo} className="img-fluid" style={{ width: "100px" }} onClick={(e)=>toggleDarkLight(e)}/>
        <Link className="navbar-brand" href="#"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/dashboard/addbarber`}>
                Crear Barbero
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/dashboard/barbers`}>
                Lista de Barberos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/dashboard/barbers`}>
                Crear Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/dashboard/barbers`}>
                Productos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
