
import { DropdownButton, Dropdown, Modal, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";

// La libreria mdi es usada para importar iconos svg y usarlos de forma rapida y eficiente
import { mdiEyeClosed, mdiEye } from "@mdi/js";
import Icon from "@mdi/react";

import loginContext from "../context/LoginContext";
import "../css/NavBar.css"

const NavBar = ()=>{
    const logggg = useContext(loginContext)

    const [usrInput, setUsrInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [pwdInput, setPwdInput] = useState("")
    const [recoveryPassword, setRecoveryPassword] = useState(false)
    const [ShowLoginModal, setShowLoginModal] = useState(false)
    const [ShowRegisterModal, setShowRegisterModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const logInFunc = async ()=>{
        //En caso de que el backend este en otro puerto, reemplazar el 8000 por ese puerto
        await fetch("http://localhost:8000/login", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usr: usrInput, pwd: pwdInput})
        }).then(res=>{
            if(res.status===401){
                console.log("Username or Password mismatch");
            }else if(res.status===200){
                console.log("LoggedIn");
                logggg.LogIn(usrInput)
                window.location.reload()
            }
        })
    }

    const registerFunc = async ()=>{
        await fetch("http://localhost:8000/reg", {
            method: "POST",
            credentials: "same-origin",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usr: usrInput, email: emailInput, pwd: pwdInput})
        }).then(res=>console.log(res)).catch(err=>console.log(err))
    }

    return (
        <>
            {/* Login Modal and form */}
            <Modal centered show={ShowLoginModal} onHide={()=>{setShowLoginModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Username" onChange={(e)=>{setUsrInput(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <div className="d-inline-flex">
                            <Form.Control required type={showPassword ? "text":"password"} placeholder="Password" onChange={(e)=>{setPwdInput(e.target.value)}} />
                            <Button onClick={()=>{setShowPassword(!showPassword)}}>
                                <Icon path={showPassword ? mdiEye : mdiEyeClosed} size={1}/>
                            </Button>
                            <Form.Control.Feedback type="invalid">
                                Por favor, introduce una contraseña.
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit" href="/" onClick={(e)=>{
                        e.preventDefault()
                        logInFunc()
                    }}>
                        Iniciar sesión
                    </Button>
                    <Button className="mx-3" variant="primary" type="submit" href="/" onClick={(e)=>{
                        e.preventDefault()
                        logInFunc()
                    }}>
                        Recuperar Contraseña
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{setShowLoginModal(false)}}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            
            
            {/* Register Modal */}
            <Modal centered show={ShowRegisterModal} onHide={()=>{setShowRegisterModal(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrarse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Username" onChange={(e)=>{setUsrInput(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Email" onChange={(e)=>{setEmailInput(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <div className="d-inline-flex">
                            <Form.Control required type={showPassword ? "text":"password"} placeholder="Password" onChange={(e)=>{setPwdInput(e.target.value)}} />
                            <Button onClick={()=>{setShowPassword(!showPassword)}}>
                                <Icon path={showPassword ? mdiEye : mdiEyeClosed} size={1}/>
                            </Button>
                            <Form.Control.Feedback type="invalid">
                                Por favor, introduce una contraseña.
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit" href="/" onClick={(e)=>{
                        e.preventDefault()
                        registerFunc()
                    }}>
                        Registrarse
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{setShowRegisterModal(false)}}>
                        Cerrar
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
                                    <Link to="/Account" className="m-1 text-decoration-none">Cuenta</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button className="fs-4" variant="danger" onClick={()=>{
                                        logggg.LogOut(); 
                                        }}>
                                        Cerrar sesión
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
                                <Dropdown.Item onClick={()=>{setShowLoginModal(true)}} className="fs-4">Iniciar sesión</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{setShowRegisterModal(true)}} className="fs-4">Registrarse</Dropdown.Item>
                            </DropdownButton>
                            }
                    </li>                    
                </ul>    
            </div>            
        </>
    )
}

export default NavBar;
