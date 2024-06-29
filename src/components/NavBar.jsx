
import { DropdownButton, Dropdown, Modal, Button, Form, Toast, ToastContainer} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// La libreria mdi es usada para importar iconos svg y usarlos de forma rapida y eficiente
import { mdiEyeClosed, mdiEye } from "@mdi/js";
import Icon from "@mdi/react";

import loginContext from "../context/LoginContext";
import "../css/NavBar.css"

const NavBar = ()=>{
    const logggg = useContext(loginContext)
    const navigate = useNavigate();

    const [usrInput, setUsrInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [pwdInput, setPwdInput] = useState("")
    //const [recoveryPassword, setRecoveryPassword] = useState(false)
    const [ShowLoginModal, setShowLoginModal] = useState(false)
    const [ShowRegisterModal, setShowRegisterModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [validLogIn, setValidLogIn] = useState()
    const [validRegister, setValidRegister] = useState(true)

    const [showA, setShowA] =useState(false)
    //const [clickedRegister, setClickedRegister] = useState(false)

    const logInFunc = async ()=>{
        //En caso de que el backend este en otro puerto, reemplazar el 8000 por ese puerto
        setClicked(true)
        setValidLogIn(true)
        await fetch("http://localhost:8000/login", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usr: usrInput, pwd: pwdInput})
        }).then(res=>{
            if(res.status===401){
                console.log("Username or Password mismatch");
                setValidLogIn(false)
            }else if(res.status===200){
                console.log("LoggedIn");
                logggg.LogIn(usrInput)
                setClicked(false)
                navigate("/")
                setValidLogIn(true)
                window.location.reload()
            }
        })
    }

    const registerFunc = async ()=>{
        setClicked(true)
        await fetch("http://localhost:8000/reg", {
            method: "POST",
            credentials: "same-origin",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usr: usrInput, email: emailInput, pwd: pwdInput})
        }).then(res=>{
            if(res.status===401){
                console.log("Username or email alredy exists or invalid");
                setValidRegister(false)
            }else if(res.status===200){
                setShowA(true)
                setClicked(false)
            }
        }).catch(err=>console.log(err))
        setShowRegisterModal(false)
    }

    return (
        <>
            {/* Login Modal and form */}
            <Modal centered show={ShowLoginModal} onHide={()=>{
                    setShowLoginModal(false)
                    setValidLogIn(true)
                    setClicked(false)
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Username" onChange={(e)=>{setUsrInput(e.target.value)}}/>
                        <Form.Control.Feedback type="invalid">
                            Por favor, introduce un usuario.
                        </Form.Control.Feedback>
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

                    {
                        (validLogIn===false)
                        ?
                        <div className="bg-danger text-white rounded-3 py-1 px-3">Username or email alredy exists</div>
                        :
                        <></>
                    }
                    
                    <Button disabled={(usrInput==="" || pwdInput==="")?true:false} variant="primary" type="submit" href="/" onClick={(e)=>{
                        e.preventDefault()
                        logInFunc()
                    }}>
                        {
                            (!clicked)
                            ?
                            <>Iniciar sesión</>
                            :
                            (validLogIn!==false)?<>Cargando...</>:<>Iniciar sesión</>
                        }
                    </Button>
                    <Button className="mx-3" variant="primary" type="submit" href="/" onClick={(e)=>{
                        e.preventDefault()
                        //logInFunc()
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
            <Modal centered show={ShowRegisterModal} onHide={()=>{
                    setShowRegisterModal(false)
                    setClicked(false)
                    setUsrInput("")
                    setEmailInput("")
                    setPwdInput("")
                }}>
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

                        <Form.Control
                            required type="email"
                            placeholder="Enter Email"
                            isInvalid={
                                !/^\S+@\S+\.\S+$/.test(emailInput)
                            }   
                            onChange={(e)=>{setEmailInput(e.target.value)}}
                        />

                        <Form.Control.Feedback type="invalid">
                            Por favor, introduce un email valido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <div className="d-inline-flex">
                            <Form.Control required type={showPassword ? "text":"password"} placeholder="Password" onChange={(e)=>{setPwdInput(e.target.value)}} />
                            <Button onClick={()=>{setShowPassword(!showPassword)}}>
                                <Icon path={showPassword ? mdiEye : mdiEyeClosed} size={1}/>
                            </Button>
                        </div>
                    </Form.Group>
                    {
                        (validRegister===false)
                        ?
                        <div className="bg-danger text-white rounded-3 py-1 px-3">Username or email alredy exists</div>
                        :
                        <></>
                    }
                    <Button disabled={(usrInput==="" || pwdInput==="" || emailInput==="")?true: false} variant="primary" type="submit" href="/" onClick={(e)=>{
                        e.preventDefault()
                        registerFunc()
                    }}>
                        {
                            (!clicked)
                            ?
                            <>Registrarse</>
                            :
                            (validRegister!==false)?<>Cargando...</>:<>Registrarse</>
                        }
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
                        <Link to="/Precios" className="nav-link">Clases</Link>
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
                                {
                                    (logggg.usrState==="admin")?
                                        <Dropdown.Item className="fs-4 bg-warning rounded-3">
                                            <Link to="/Control" className="m-1 text-decoration-none">Control</Link>
                                        </Dropdown.Item>
                                    :
                                        <></>

                                }
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
                                <Dropdown.Item onClick={()=>{
                                    setShowLoginModal(true)
                                    setClicked(false)
                                    setUsrInput("")
                                    setPwdInput("")
                                }} className="fs-4">Iniciar sesión</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{
                                    setShowRegisterModal(true)
                                    setClicked(false)
                                    setUsrInput("")
                                    setEmailInput("")
                                    setPwdInput("")
                                }} className="fs-4">Registrarse</Dropdown.Item>
                            </DropdownButton>
                            }
                    </li>                    
                </ul>    
                <ToastContainer position="bottom-end" className="position-fixed mb-5 me-4" style={{ zIndex: 1 }}>
                    <Toast show={showA} onClose={()=>{setShowA(false)}} delay={5000} autohide>
                        <Toast.Header>
                            <strong className="me-auto text-success fs-3">Success</strong>
                        </Toast.Header>
                        <Toast.Body className="fs-4">Registro exitoso</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>            
        </>
    )
}

export default NavBar;
