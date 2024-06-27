
import React, { useState } from "react"
import { useContext } from "react"
import FooterComponent from "../components/Footer"
import NavBar from "../components/NavBar"
import loginContext from "../context/LoginContext"
import { Button, Form, ListGroup, Modal } from "react-bootstrap"

const AccountPage = ()=>{

    const loggg = useContext(loginContext)
    const [srcInputLink, setSrcInput] = useState("https://placehold.co/400")
    const [showModal, setShowModal] = useState(false)

    const hideModal = async ()=>{
        setShowModal(false)
        if(srcInputLink!==""){
            await fetch("http://localhost:8000/changePFP", {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({usr: loggg.usrState, photoURL: srcInputLink})
            }).then(res=>{console.log(res);})
            window.location.reload()
        }
    }

    const deleteReserv = ()=>{
        loggg.undoReservation();
        window.location.reload();
    }

    return(
        <>
            <div className="position-absolute w-100">
                <NavBar/>
            </div>

            {/* Change photo */}
            <Modal centered show={showModal} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cambiar foto de perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="form-group-id">
                            <Form.Label>Link</Form.Label>
                            <Form.Control onChange={(e)=>{
                                setSrcInput(e.target.value)
                                }} type="text"></Form.Control>
                            <Form.Text className="fs-5">Introduce un link a una imagen online, de otra forma no funcionara.<br></br>Puede tardar algunos segundos.</Form.Text>
                            <Form.Text className="fs-5"><br></br>Ejemplo: https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/384cb129896105.56ed80e1d4666.jpg</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" onClick={(e)=>{
                                e.preventDefault()
                                hideModal()
                            }} className="fs-4">Cambiar</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>


            {/* Con esto se crea toda la seccion de cuenta */}
            <div className="w-100 h-100 d-flex align-items-center">
                <div className="w-100 h-auto d-flex align-items-center justify-content-center flex-column"> {/* This is for the image */}
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                        <img className="rounded-circle" src={loggg.srcInput} alt=""/>
                        <Button className="my-3 fs-5" onClick={()=>{setShowModal(true)}}>Cambia la foto de perfil</Button>
                        <h3 className="mb-5">Bienvenido <em><strong>{loggg.usrState}</strong></em></h3>
                    </div>

                    {/* Con esto se muestra la reserva actual y una lista con las caracteristicas de la reserva */}
                    <div className="h-auto">
                        <h2>Reserva actual:</h2>
                        {(loggg.reservState==="")
                        ?
                        <h3>Actualmente, no tienes ninguna reserva hecha</h3>
                        :
                        <> 
                            <h3>Actualmente, tienes una reserva de vuelo hacia {loggg.reservState}</h3>
                            <h4>Especificaciones</h4>
                            <ListGroup className="fs-5">
                                <ListGroup.Item>Avión: {loggg.Avion}</ListGroup.Item>
                                <ListGroup.Item>Hora: {loggg.Hora}</ListGroup.Item>
                                <ListGroup.Item>Aeropuerto: {loggg.Aeropuerto}</ListGroup.Item>
                                <ListGroup.Item>Fecha: {loggg.Fecha}</ListGroup.Item>
                                <ListGroup.Item>Clase: {loggg.Clase}</ListGroup.Item>
                                <ListGroup.Item>Asiento: {loggg.selectedSeat}</ListGroup.Item>
                            </ListGroup>
                            <Button className="fs-5" onClick={deleteReserv}>Click para eliminar la reserva</Button>
                        </>
                        }
                    </div>
                </div>
            </div>
            <div className="position-absolute sticky-bottom w-100 bg-white">
                <FooterComponent/>
            </div>
        </>
    )

}

export default AccountPage