
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";

const Menu = ()=>{

    return (
        <>
            <div className="position-absolute w-100">
                <NavBar/>
            </div>

            <div>

            </div>

            <div className="position-absolute sticky-bottom w-100 bg-white">
                <FooterComponent/>
            </div>
        </>
    )
}