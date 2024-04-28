
import { DropdownButton, Dropdown, Modal, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";

// La libreria mdi es usada para importar iconos svg y usarlos de forma mas rapida y eficiente
import { mdiEyeClosed, mdiEye } from "@mdi/js";
import Icon from "@mdi/react";

import loginContext from "../context/LoginContext";
import "../css/NavBar.css"

const NavBar = ()=>{
    const logggg = useContext(loginContext)

    const [usrInput, setUsrInput] = useState("")
    const [ShowLoginModal, setShowLoginModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            {/* Login Modal and form */}
            <Modal centered show={ShowLoginModal} onHide={()=>{setShowLoginModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Username" onChange={(e)=>{setUsrInput(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <div className="d-inline-flex">
                            <Form.Control required type={showPassword ? "text":"password"} placeholder="Password" />
                            <Button onClick={()=>{setShowPassword(!showPassword)}}>
                                <Icon path={showPassword ? mdiEye : mdiEyeClosed} size={1}/>
                            </Button>
                            <Form.Control.Feedback type="invalid">
                                Please insert a password
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit" href="/" onClick={()=>{logggg.LogIn(usrInput)}}>
                        Iniciar Sesion
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{setShowLoginModal(false)}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Nav bar */}
            <div className="w-100 fs-3 px-3 shadow sticky-top bg-white sticky-top">
                <ul className="nav w-100 d-flex justify-content-end align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Precios" className="nav-link">Precios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Destinos" className="nav-link">Destinos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/FAQ" className="nav-link">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        {/* Account settings */}
                            {/* Conditional rendering of user options */}
                            {logggg.state 
                            ?
                            
                            <DropdownButton
                            id="dropdown-button"
                            title=""
                            variant="success"
                            className="p-2 w-auto h-auto size-1.5"
                            drop="left"
                            >
                                <Dropdown.Item className="fs-4">
                                    <Link to="/Account" className="m-1 text-decoration-none">Account</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button className="fs-4" variant="danger" onClick={()=>{logggg.LogOut(); window.location.reload()}}>
                                        Cerrar sesion
                                    </Button>
                                </Dropdown.Item>
                            </DropdownButton>
                            
                            :
                            
                            <DropdownButton
                            id="dropdown-button"
                            title=""
                            variant="success"
                            className="p-2 w-auto h-auto size-1.5"
                            drop="left"
                            > 
                                <Dropdown.Item onClick={()=>{setShowLoginModal(true)}} className="fs-4">Iniciar sesion</Dropdown.Item>
                            </DropdownButton>
                            }
                    </li>                    
                </ul>    
            </div>            
        </>
    )
}

export default NavBar;