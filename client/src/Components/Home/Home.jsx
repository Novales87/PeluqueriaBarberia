import React, { useEffect } from "react";
import "./Home.scss"
import Nav from "../Home/Nav/Nav"
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import { ColorChange } from "../../Utils/Mode";
import { useDispatch, useSelector } from "react-redux";
import { fetchBarbers } from "../../Store/fetchBarbersSlice";

export default function Home() {
    const dispatch = useDispatch();
    const barbers = useSelector((state) => state.fetchBarbers.barbers);
    console.log(barbers)

    useEffect(() => {
        dispatch(fetchBarbers());
        ColorChange();
      }, [dispatch]);
    return (
        <div className="Home">
            <Nav />
            <div className="Contenedor-Home">
                <Banner />
                <Card />
            </div>
            <Contacts barbers={barbers}/>
            <Footer />
        </div>
    );
}