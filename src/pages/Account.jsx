
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

    const hideModal = ()=>{
        setShowModal(false)
        if(srcInputLink!==""){
            loggg.updatePhoto(srcInputLink)
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
                    <Modal.Title>Change profile photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="form-group-id">
                            <Form.Label>Link</Form.Label>
                            <Form.Control onChange={(e)=>{setSrcInput(e.target.value)}} type="text"></Form.Control>
                            <Form.Text className="fs-5">Introduce a web image link, otherwise it will not work.<br></br>It may take a few seconds.</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit" onClick={hideModal} className="fs-4">Change</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <div className="w-100 h-100 d-flex align-items-center">
                <div className="w-100 h-auto d-flex align-items-center justify-content-center flex-column"> {/* This is for the image */}
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                        <img className="rounded-circle" src={loggg.srcInput} alt=""/>
                        <Button className="my-3 fs-5" onClick={()=>{setShowModal(true)}}>Change profile photo</Button>
                        <h3 className="mb-5">Bienvenido <em><strong>{loggg.usrState}</strong></em></h3>
                    </div>
                    <div className="h-auto">
                        <h2>Reserva actual:</h2>
                        {(loggg.reservState==="")
                        ?
                        <h3>Actualmente no tienes ninguna reserva hecha</h3>
                        :
                        <> 
                            <h3>Actualmente tienes una reserva de vuelo hacia {loggg.reservState}</h3>
                            <h4>Especificaciones</h4>
                            <ListGroup className="fs-5">
                                <ListGroup.Item>Avion: {loggg.Avion}</ListGroup.Item>
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