import React from "react";
import "./Contacts.scss"

export default function Contacts({barbers}) {

    return (
        <div className="Contacts-Container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
            {!!barbers && barbers.length > 0 ? (
                    barbers.map((barber,i) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`flush-heading-${i}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${i}`} aria-expanded="false" aria-controls={`flush-collapse-${i}`}>
                                    {barber.name} {barber.lastName}
                                </button>
                            </h2>
                            <div id={`flush-collapse-${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${i}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No hay barberos disponibles</h2>
                )}
            </div>
        </div>
    )
}