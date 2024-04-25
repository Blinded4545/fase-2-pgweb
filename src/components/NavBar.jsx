
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "../css/NavBar.css"

const NavBar = ()=>{
    return (
        <>
            <div className="d-flex justify-content-end fs-4 align-items-center px-3">
                <ul className="nav gap-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Pricing" className="nav-link">Precio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Reservations" className="nav-link">Reservaciones</Link>
                    </li>
                    <li className="nav-item w-auto h-auto">
                        <DropdownButton
                        id="dropdown-button"
                        variant="success"
                        className="p-2 w-auto h-auto size-1.5"
                        drop="left"
                        >
                            <Dropdown.Item href="#/action-1" className="fs-4">Cuenta</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className="fs-4">Cerrar sesion</Dropdown.Item>
                        </DropdownButton>
                    </li>                    
                </ul>    
            </div>            
        </>
    )
}

export default NavBar;