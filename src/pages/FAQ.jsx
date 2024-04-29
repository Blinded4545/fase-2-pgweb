
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { Accordion } from "react-bootstrap";

// PREGUNTAS FRECUENTES

const FAQ = ()=>{
    return (

        // Esta es solo la seccion de preguntas frecuentes, dado que son pocas se opto por crear cada acordion individualmente
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
                                <h2>¿El uso de la aplicación es seguro?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">¡Claro! De momento la información almacenada se guarda directamente en el almacenamiento del cliente, esta es borrada una vez que se cierra la sesión, sin embargo, prontamente se realizara la implementación de un servidor de back-end en el cual se utilizara una base de datos SQL para almacenar los datos, los cuales serán encriptados previamente para mayor seguridad.</h4>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="w-100">
                            <Accordion.Header>
                                <h2>¿Qué tecnologías se utilizaron para crear la aplicación?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">De momento se ha realizado utilizando el framework para JavaScript React junto con las librerías de react-bootstrap y bootstrap, además posteriormente se planea la integración de un servidor de back-end con la librería Express.js, además de la implementación de una base de datos relacional SQL.</h4>
                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="2" className="w-100">
                            <Accordion.Header>
                                <h2>¿En cuánto al equipo de desarrollo, como se distribuyeron el desarrollo?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Para el desarrollo se le encargó a Camilo Herrera y a Cristian Choperena el estilizado y manejo general del front-end, además de parte del desarrollo del back-end; a Yeison Mayorga, el desarrollo de las funcionalidades generales del front-end y parte del desarrollo del back-end; a Angélica Sanabria se le fue encomendada la maquetación y verificación de textos y estilos aplicados, además de finalmente la verificación del back-end además de implementación de la base de datos. Cabe aclarar que los roles relacionados con el back-end aún no se han llevado a cabo debido a que este no se ha desarrollado aún.</h4>
                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="3" className="w-100">
                            <Accordion.Header>
                                <h2>¿Hasta el momento cuál fue el mayor reto presentado?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Definitivamente, la creación y manejo del formulario de reserva de vuelo, en el cual más precisamente se complicó el diseño y funcionalidad del panel de elección de asientos, además el lograr que todo corresponda a un diseño responsive tomo cierto esfuerzo en el cual todo el equipo contribuyó para que esto se llevase a cabo lo más rápido posible.</h4>
                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="4" className="w-100">
                            <Accordion.Header>
                                <h2>¿En cuánto al diseño, que fallas podría presentar?</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h4 className="text-wrap">Una de las cosas más preocupantes para el equipo es el cómo se pueda presentar la aplicación en distintos navegadores, ya que se nos presentó un problema particular y es que, a un zoom del 100%, se veía muy distinto entre diferentes navegadores, se lo atribuimos mayormente al tamaño de la pantalla en la que el navegador esté presentándose.</h4>
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