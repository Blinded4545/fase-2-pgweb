
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { Accordion } from "react-bootstrap";

// PREGUNTAS FRECUENTES

const FAQ = ()=>{
    return (
        <div className="h-100">
            <div className="position-relative sticky-top w-100">
                <NavBar/>
            </div>
            <div className="w-100 h-100 d-flex justify-content-center align-items-center" id="faqWrapper">

                <div className="h-auto w-75 bg-white rounded border border-solid border-secondary">
                    <h1 className="m-3">Preguntas Frecuentes</h1>
                    <Accordion className="">
                        <Accordion.Item eventKey="0" className="w-100">
                            <Accordion.Header>
                                <h2>El uso de la aplicacion es seguro?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Claro! de momento la informacion almacenada se guarda directamente en el almacenamiento del cliente, esta es borrada una vez que se cierra la sesion, sin embargo, prontamente se realizara la implementacion de un servidor de backend en el cual se utilizara una base de datos SQL para almacenar los datos, los cuales seran encriptados previamente para mayor seguridad</h4>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="w-100">
                            <Accordion.Header>
                                <h2>Que tecnologias se utilizaron para crear la aplicacion?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">De momento se ha realizado utilizando el framework para JavaScript React junto con las librerias de react-bootstrap y bootstrap, ademas posteriormente se planea la integracion de un servidor de backend con la libreria ExpressJS, ademas de la implementacion de una base de datos relacional SQL</h4>
                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="2" className="w-100">
                            <Accordion.Header>
                                <h2>En cuanto al equipo de desarrollo, como se distribuyeron el desarrollo?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Para el desarrollo se le encargo a Camilo Herrera y a Cristian Choperena el estilizado y manejo general del frontend, ademas de parte del desarrollo del backend; a Yeison Mayorga, el desarrollo de las funcionalidades generales del frontend y parte del desarrollo del backend; a Angelica Sanabria se le fue encomendada la maquetacion y verificacion de textos y estilos aplicados, ademas de finalmente la verificacion del backend ademas de implementacion de la base de datos. Cabe aclarar que los roles relacionados al backend aun no se han llevado a cabo debido a que este no se ha desarrollado aun</h4>
                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="3" className="w-100">
                            <Accordion.Header>
                                <h2>Hasta el momento cual fue el mayor reto presentado?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Definitivamente la creacion y manejo del formulario de reserva de vuelo, en el cual mas precisamente se complico el diseño y funcionalidad del panel de eleccion de asientos, ademas el lograr que todo corresponda a un diseño responsive tomo cierto esfuerzo en el cual todo el equipo contibuyo para que esto se llevase a cabo lo mas rapido posible</h4>
                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="4" className="w-100">
                            <Accordion.Header>
                                <h2>En cuanto al diseño, que fallas podria presentar?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Una de las cosas mas preocupantes para el equipo es el como se pueda presentar la aplicacion en distintos navegadores, ya que se nos presento un problema particular y es que, a un zoom del 100%, se veia muy distinto entre diferentes navegadores, se lo atribuimos mayormente al tamaño de la pantalla en la que el navegador este presentandose</h4>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
            <div className="position-fixed sticky-bottom w-100 bg-white">
                <FooterComponent/>
            </div>
        </div>
    )
}

export default FAQ;