
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";

const NoPage = ()=>{
    return (
        <>
            
            <div className="position-absolute w-100">
                <NavBar/>
            </div>
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <h1>No puedes acceder a esta ruta.</h1>
            </div>
            <div className="position-fixed sticky-bottom w-100">
                <FooterComponent/>
            </div>
        </>
    )
}

export default NoPage