import React from "react";
import "./Home.scss"
import Nav from "../Home/Nav/Nav"
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

export default function Home() {

    return (
        <div className="Home">
            <Nav />
            <div className="Contenedor-Home">
                <Banner />
                <Card />
            </div>
            <Contacts />
            <Footer />
        </div>
    );
}