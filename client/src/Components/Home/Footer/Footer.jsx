import React from "react";
import git from "../../../images/git.png";
import DataTeam from "./DataMembers/DataMembers"
import "./Footer.scss";

export default function Footer() {


    return (
        <footer className="text-center footer-container">
            <div className="container p-4">
                <section className="mb-4">
                    <p>
                        Texto diciendo algo relevante de nosotros
                    </p>
                </section>
                <section className="">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {DataTeam.map((data) => (
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">{data.gitName}</h5>

                                <ul className="list-unstyled mb-0">
                                    {data.gitLink ?
                                        <li>
                                            <a href={data.gitLink} target="_blank">GitHub</a>
                                        </li>
                                        : null}
                                    {data.linkedin ?
                                        <li>
                                            <a href={data.linkedin} target="_blank">Linkedin</a>
                                        </li>
                                        : null}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </footer>
    )
}