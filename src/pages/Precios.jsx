
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { Card, ListGroup } from "react-bootstrap";
import "../css/precios.css"

const Precios = ()=>{
    return (
        <>
            {/* En esta pagina se muestran los precios y caracteristicas de cada una de las clases de vuelo, mas adelante cuando se tenga el backend cobrara mas importancia */}
            <div className="h-100 w-100">
                <div className="position-absolute w-100">
                    <NavBar/>
                </div>
                <div className="h-100 w-100" style={{"backgroundColor": "#EDEDED"}}> {/* Here will be all the pricing plans per seat in a 100 seats plane */}

                    <div className="w-auto h-100 d-flex justify-content-center align-items-center gap-5" id="cardPriceContainer">
                        <Card className="h-auto text-wrap cardClass" id="firstCard">
                            <Card.Title className="fs-1 m-3">Primera clase  -  200$</Card.Title>
                            <Card.Text className="fs-3 mx-3">En esta clase encontrarás las siguientes características:</Card.Text>
                            <ListGroup className="fs-5">
                                <ListGroup.Item>Asientos amplios y cómodos con mayor espacio para estirarse.</ListGroup.Item>
                                <ListGroup.Item>Servicio personalizado, con tripulación atenta y dedicada.</ListGroup.Item>
                                <ListGroup.Item>Comida gourmet y selección de bebidas de alta calidad.</ListGroup.Item>
                                <ListGroup.Item>Acceso a salas VIP en aeropuertos, que ofrecen comodidades como áreas de descanso, buffet de comida y bebida, duchas y más.</ListGroup.Item>
                                <ListGroup.Item>Prioridad en el embarque y desembarque.</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="h-auto text-wrap cardClass">
                            <Card.Title className="fs-1 m-3">Segunda clase  -  100$</Card.Title>
                            <Card.Text className="fs-3 mx-3">En esta clase encontrarás las siguientes características:</Card.Text>
                            <ListGroup className="fs-5">
                                <ListGroup.Item>Asientos cómodos con espacio adecuado para viajar.</ListGroup.Item>
                                <ListGroup.Item>Servicio estándar, con atención cordial por parte de la tripulación.</ListGroup.Item>
                                <ListGroup.Item>Comida básica y bebidas limitadas.</ListGroup.Item>
                                <ListGroup.Item>Entretenimiento limitado, como pantallas compartidas o selección limitada de películas y música.</ListGroup.Item>
                                <ListGroup.Item>Acceso limitado a áreas comunes en el aeropuerto.</ListGroup.Item>
                                <ListGroup.Item>Embarque por zonas y desembarque regular.</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="h-auto text-wrap cardClass">
                            <Card.Title className="fs-1 m-3">Tercera clase  -  50$</Card.Title>
                            <Card.Text className="fs-3 mx-3">En esta clase encontrarás las siguientes características:</Card.Text>
                            <ListGroup className="fs-5">
                                <ListGroup.Item>Asientos básicos con espacio limitado para viajar.</ListGroup.Item>
                                <ListGroup.Item>Servicio estándar, con atención básica por parte de la tripulación.</ListGroup.Item>
                                <ListGroup.Item>Opciones de comida básica y bebidas limitadas.</ListGroup.Item>
                                <ListGroup.Item>Entretenimiento limitado con pantallas compartidas.</ListGroup.Item>
                                <ListGroup.Item>Acceso restringido a áreas comunes en el aeropuerto.</ListGroup.Item>
                                <ListGroup.Item>Embarque y desembarque en los últimos grupos.</ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </div>

                </div>

                <div className="position-fixed sticky-bottom bg-white w-100">
                    <FooterComponent/>
                </div>
            </div>
        </>
    )
}

export default Precios;