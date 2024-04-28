
import React, { useState, useContext } from "react";
import { Accordion, Button, Modal, Form, Toast, ToastContainer} from "react-bootstrap";
import DatePicker from "react-date-picker"; //Esta libreria se implemento para poder obtener datos de fechas
import loginContext from "../context/LoginContext";
import "../css/DestinationToggle.css"

const DestinationToggle = ({src="https://placehold.co/100", Place="", Description=""})=>{

    const [showModal, setShowModal] = useState(false)
    const [showA, setShowA] =useState(false)
    const loggg = useContext(loginContext)

    const [Avion, setAvion] = useState("A1")
    const [Hora, setHora] = useState("6AM")
    const [Aeropuerto, setAeropuerto] = useState("El Dorado")
    const [Fecha, setFecha] = useState(new Date())
    const [Clase, setClase] = useState("")
    const [selectedSeat, setSelectedSeat] = useState("")

    const listSeats = [
        {seat: "A1"}, {seat: "A2"}, {seat: "A3"}, {seat: "A4"}, {seat: "A5"}, {seat: "A6"},
        {seat: "B1"}, {seat: "B2"}, {seat: "B3"}, {seat: "B4"}, {seat: "B5"}, {seat: "B6"},
        {seat: "C1"}, {seat: "C2"}, {seat: "C3"}, {seat: "C4"}, {seat: "C5"}, {seat: "C6"},
        {seat: "D1"}, {seat: "D2"}, {seat: "D3"}, {seat: "D4"}, {seat: "D5"}, {seat: "D6"},
        {seat: "E1"}, {seat: "E2"}, {seat: "E3"}, {seat: "E4"}, {seat: "E5"}, {seat: "E6"}]

    const setReservs = ()=>{
        loggg.MakeReservation(Place, Avion, Hora, Aeropuerto, `${Fecha.getUTCDate()}/${Fecha.getUTCMonth()}/${Fecha.getUTCFullYear()}`, Clase, selectedSeat)
    }

    const renderList = listSeats.map(s => {
        return <Button 
            disabled={(s.seat!==selectedSeat && selectedSeat!=="")?true:false}
            key={s.seat}
            id={s.seat}
            onHover={console.log("a")}
            onClick={()=>{(selectedSeat===s.seat)?setSelectedSeat(""):setSelectedSeat(s.seat)}}
            className="w-25">{s.seat}</Button>
    })

    const handleCloseModal = ()=>{
        setShowModal(false)
    }

    return (
        <>
            {/* Reservation Modal */}
            <Modal centered show={showModal} onHide={handleCloseModal} id="reservModal">
                <Modal.Header closeButton style={{width: "100%"}}>
                    <Modal.Title className="fs-1">Haz tu reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-wrap w-100">
                    <div className="fs-2 mb-5 w-100">Reserva tu vuelo a {Place}</div>
                    <div className="w-100">
                        <div className="d-flex w-100">
                            <div className="d-flex flex-wrap justify-content-center gap-2 w-50 h-25">
                                {renderList}
                            </div>
                            <div className="w-100 m-0">

                                {/* Formulario de reservacion de vuelo */}

                                <Form className="w-100 m-0">
                                    <Form.Group controlId="form-group-id">
                                        <Form.Label className="fs-4">Avion</Form.Label> 
                                        <Form.Select className="fs-5`" onChange={(e)=>{setAvion(e.target.value)}}>
                                            <option value="A1">A1</option>
                                            <option value="B2">B2</option>
                                            <option value="C3">C3</option>
                                        </Form.Select>                                    
                                    </Form.Group>
                                    <Form.Group controlId="form-group-id">
                                        <Form.Label className="fs-4">Hora de salida</Form.Label>
                                        <Form.Select className="fs-5" onChange={(e)=>{setHora(e.target.value)}}>
                                            <option value="6AM">6AM</option>
                                            <option value="10AM">10AM</option>
                                            <option value="2PM">2PM</option>
                                            <option value="4PM">4PM</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="form-group-id">
                                        <Form.Label className="fs-4">Aeropuerto de salida</Form.Label>
                                        <Form.Select className="fs-5" onChange={(e)=>{setAeropuerto(e.target.value)}}>
                                            <option value="El Dorado">El Dorado - Bogota</option>
                                            <option value="Palo Negro">Palo Negro - Bucaramanga</option>
                                            <option value="Jose Maria Cordova">Jose Maria Cordova - Medellin</option>
                                            <option value="Alfonso Bonilla Aragon">Alfonso Bonilla Aragon - Cali</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group id="CalendarWrapper" className="w-100">
                                        <Form.Label className="fs-4">Elige la fecha de vuelo</Form.Label>
                                        <DatePicker
                                            id="datePicker"
                                            className="h-100 fs-5 text-center gap-5"
                                            required
                                            calendarIcon={null}
                                            closeCalendar={true}
                                            locale=""
                                            format="d-M-y"
                                            clearIcon={null}
                                            onChange={(fecha)=>{
                                                (fecha.getTime()<Date.now())?fecha.setDate(Date.now()):setFecha(fecha)
                                            }}
                                            value={Fecha}
                                        ></DatePicker>
                                        <Form.Text>Recuerda que no puedes poner fechas anteriores al dia de hoy</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="form-group-id" className="d-inline">
                                        <Form.Label className="fs-4">Clase de vuelo</Form.Label>
                                        <div key="inline-radio" onChange={(e)=>{setClase(e.target.value)}}>
                                            <Form.Check required className="fs-4" inline value="Primera Clase" type="radio" label="Primera Clase" aria-label="radio 1" id="inline-radio-1" name="group1"/>   
                                            <Form.Check required className="fs-4" inline value="Segunda Clase" type="radio" label="Segunda Clase" aria-label="radio 1" id="inline-radio-2" name="group1"/>   
                                            <Form.Check required className="fs-4" inline value="Tercera Clase" type="radio" label="Tercera Clase" aria-label="radio 1" id="inline-radio-3" name="group1"/>   
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="fs-4">
                                            Tu asiento: {selectedSeat}
                                        </Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button 
                                        disabled={(loggg.reservState==="")? ((selectedSeat!=="")?false:true):true} 
                                        type="Submit" 
                                        className="my-3 fs-4" 
                                        onClick={setReservs}
                                        >
                                            Reservar
                                        </Button>

                                        {(selectedSeat!=="")
                                        ?
                                        <Button className="fs-4 mx-3" onClick={()=>{setSelectedSeat("")}}>Cambiar asiento</Button>
                                        :
                                        <></>}
                                    </Form.Group>
                                    <Form.Group>
                                        {(loggg.reservState!=="")?<Form.Text className="fs-5 text-danger"><strong>Ya hiciste una reservacion.</strong></Form.Text>:<></>}
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            <Accordion className="accordion-flush accordionCard">
                <Accordion.Header>
                    <img src={src} alt="" className="AccordionImg"/>
                    <h3 className="p-3">{Place}</h3>
                </Accordion.Header>
                <Accordion.Body className="h-auto">
                    <p className="fs-4">{Description}</p>
                    <Button className="fs-3" onClick={()=>{loggg.state?setShowModal(true):setShowA(true)}}>Reserva un vuelo</Button>
                </Accordion.Body>
            </Accordion>


            <ToastContainer position="bottom-end" className="position-fixed mb-5 me-4" style={{ zIndex: 1 }}>
                <Toast show={showA} onClose={()=>{setShowA(false)}} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="me-auto text-danger fs-3">Error</strong>
                    </Toast.Header>
                    <Toast.Body className="fs-4">Debes iniciar sesion para poder hacer una reserva</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default DestinationToggle