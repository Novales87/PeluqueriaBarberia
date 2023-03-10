import React from "react";
import "./Card.scss"
import logo from "../../../images/logo.jpeg";

export default function Card() {

    function seleccionado(n) {
        var ptn = document.getElementsByClassName("seleccionado");
        for (let i = 0; i < ptn.length; i++) {
            if (ptn[i].className.includes("active")) {
                ptn[i].className = ptn[i].className.replace("active", "");
                break;
            }
        }
        ptn[n].className = "nav-link seleccionado active";
        mostrar(n)
    }

    function mostrar(n) {
        let cantidad = document.getElementsByClassName("informacion").length;
        if (document.getElementsByClassName("informacion").length == 0) {

        } else {
            if (cantidad > 0) {
                var imagenes = document.getElementsByClassName("informacion");
                for (let i = 0; i < imagenes.length; i++) {
                    if (imagenes[i].className.includes("mostrar")) {
                        imagenes[i].className = imagenes[i].className.replace(
                            " mostrar",
                            ""
                        );
                        break;
                    }
                }
                imagenes[n].className = "card-body row informacion mostrar";
            }
        }
    }


    return (
        <div className="Card-Container row">

            <div className="card P1 col-md-3">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card P2 text-center col-md-9">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link seleccionado active" onClick={() => seleccionado(0)}>Peluquero 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link seleccionado" onClick={() => seleccionado(1)}>Peluquero 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link seleccionado" onClick={() => seleccionado(2)}>Peluquero 3</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body row informacion mostrar">
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE NIÑO</h5>
                                    <p className="card-text"><small className="text">$3.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar calvo como el de One Punch Man</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTATE ESTA</h5>
                                    <p className="card-text"><small className="text">$3.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar pensando en como rellenar el texto de esta cosa para ver que tan responsive me sale esta cosa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body informacion">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-body row informacion">
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTATE ESTA</h5>
                                    <p className="card-text"><small className="text">$3.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar pensando en como rellenar el texto de esta cosa para ver que tan responsive me sale esta cosa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div><div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div><div className="card Cortes col-md-5">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={logo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">CORTE DE ADULTO</h5>
                                    <p className="card-text"><small className="text">$4.000 - 45 min</small></p>
                                    <p className="card-text">Con este corte te vamos a dejar como pie grande</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}