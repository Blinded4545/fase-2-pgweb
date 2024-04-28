
import React from "react";
import NavBar from "../components/NavBar";
import image from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import DestinyHomeCard from "../components/DestinyHomeCard";
import FooterComponent from "../components/Footer";
import "../css/Home.css";


const Home = ()=>{

    return(
        <>
            <div className="h-100 w-100" id="wrapper">
                <div className="position-absolute z-1 w-100 bg-white opacity-75">
                    <NavBar/>
                </div>

                {/* Con esto se crea todo el display central */}
                <div className="h-100 d-flex justify-content-center align-items-center overflow-scroll" id="wrapperA">
                    <div className="container-xl w-100 m-0 p-0 rounded-5" id="content-wrapper">
                        <div className="row w-100 h-100 rounded-5 p-5 d-flex justify-content-center align-items-center opacity-100" id="wrapperB">
                                <div className="w-100 h-50 col d-flex justify-content-center align-items-center">
                                    <img src={image} alt="" className="rounded-3" style={{scale: "1.4"}}/>
                                </div>
                                <div className="w-100 text-break text-wrap col text-center">
                                    <h3 id="homeText">
                                        Un viaje mas relajado al alcance de tu mano, solo un par de clicks y habras hecho una reserva de avion.
                                    </h3>   
                                    <div className="h-auto" id="buttonMediaScreen">
                                        <button className="rounded-4 p-3 my-3">
                                            <Link to="/Destinos" className="text-decoration-none text-primary fs-3">Mira todos nuestros destinos!</Link>
                                        </button>
                                    </div>
                                </div>

                                {/* Con esto se crea un carrusel de imagenes */}
                                <div className="w-auto d-flex flex-wrap justify-content-end align-content-center col" id="CarouselWrapper"> 
                                    <div className="w-auto h-100 d-flex flex-column justify-content-center align-items-center">
                                        <Carousel id="Carousel" className="text-success w-100" indicators={false} prevIcon="⮜" nextIcon="⮞"> 
                                            <Carousel.Item className="h-auto" interval={5000}> 
                                                <DestinyHomeCard src="https://shorturl.at/ehmGO"/>
                                            </Carousel.Item> 
                                            <Carousel.Item className="h-auto" interval={5000}> 
                                                <DestinyHomeCard src="https://shorturl.at/rEJL5"/>
                                            </Carousel.Item> 
                                            <Carousel.Item className="h-auto" interval={5000}> 
                                                <DestinyHomeCard src="https://shorturl.at/afjN3"/>
                                            </Carousel.Item> 
                                        </Carousel>
                                        <div className="h-full">
                                            <button className="rounded-4 p-3 my-3">
                                                <Link to="/Destinos" className="text-decoration-none text-primary fs-3">Mira todos nuestros destinos!</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="bg-white opacity-75 position-absolute sticky-bottom w-100">
                    <FooterComponent className=""/>
                </div>
            </div>
        </>
    )
}

export default Home;