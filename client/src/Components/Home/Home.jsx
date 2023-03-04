import React from "react";
import Nav from "../Home/Nav/Nav"
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

export default function Home(){
    
    return(
        <div>
            <Nav/>
            <div> 
                Home
            </div>
            <Contacts/>
            <AboutUs/>
            <Footer/>
        </div>
    ); 
}