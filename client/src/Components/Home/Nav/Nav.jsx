import React from "react";
import "./Nav.scss"
import logo from "../../../images/logo.jpeg";
import { toggleDarkLight } from "../../../Utils/Mode";

export default function Nav() {

    return (
        <div className="contenedor-nav">
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Bootstrap" width="100" height="100" />
                        <span>THE CUTMAN CO.</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">AboutUs</a>
                            </li>
                            <li className="nav-item">
                                <div className="toggle-switcher" onClick={(e)=>toggleDarkLight(e)}>
                                    <input type="checkbox" id="toggle-switch" className="toggle-input"/>
                                        <label htmlFor="toggle-switch" className="toggle-label"></label>
                                        {/* onClick={(e)=>toggleDarkLight(e)} */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}