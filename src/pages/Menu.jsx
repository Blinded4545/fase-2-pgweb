
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import loading from "../assets/loading.svg"
import loginContext from "../context/LoginContext";
import { useContext } from "react";

const Menu = ()=>{
    const loggg = useContext(loginContext)

    return (
        <>
            <div className="position-absolute w-100">
                <NavBar/>
            </div>

            <div>
                <h1>{loggg.state} a</h1>
            </div>

            <div className="position-absolute sticky-bottom w-100 bg-white">
                <FooterComponent/>
            </div>
        </>
    )
}

export default Menu;