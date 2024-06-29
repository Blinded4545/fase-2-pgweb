
import React from "react";
import NavBar from "../components/NavBar";
import image from "../assets/AEROVIAJES (1).png";
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
                    <div className="container-2xl w-75 rounded-5" id="content-wrapper">
                        <div className="row w-100 h-100 rounded-5 px-3 mx-1 my-3 d-flex justify-content-center align-items-center opacity-100" id="wrapperB">
                                <div className="w-100 h-50 col d-flex justify-content-center align-items-center" id="imgWrapper">
                                    <img src={image} alt="" className="rounded-3" style={{scale: "1.5"}}/>
                                </div>
                                <h3 id="homeText" className="col h-auto p-5 text-break text-center">
                                    Bienvenido a Aeroviajes: Tu puerta de entrada al mundo. ¡Descubre, reserva y vuela con nosotros hacia nuevas aventuras!
                                </h3>   
                                <div className="h-auto col" id="buttonMediaScreen">
                                    <button className="rounded-4 p-3 my-3">
                                        <Link to="/Destinos" className="text-decoration-none text-primary fs-3">¡Mira todos nuestros destinos!</Link>
                                    </button>
                                </div>

                                {/* Con esto se crea un carrusel de imagenes */}
                                <div className="w-100 d-flex flex-wrap justify-content-end align-content-center col" id="CarouselWrapper"> 
                                    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                        <Carousel id="Carousel" className="text-success w-100" indicators={false} prevIcon="⮜" nextIcon="⮞"> 
                                            <Carousel.Item className="h-auto" interval={5000}> 
                                                <DestinyHomeCard src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/a2/58/15/plaza-san-nicolas.jpg"/>
                                            </Carousel.Item> 
                                            <Carousel.Item className="h-auto" interval={5000}> 
                                                <DestinyHomeCard src="https://colombiapais.com/principales-destinos/destinos-principales/cali-corcovado.jpg"/>
                                            </Carousel.Item> 
                                            <Carousel.Item className="h-auto" interval={5000}> 
                                                <DestinyHomeCard src="https://images.ctfassets.net/cfexf643femz/7ffmw1z22uDIYLvOwPWKvc/d7cdd973106b745b58904dd19a36d687/razones-invertir-cartagena-colombia.jpg"/>
                                            </Carousel.Item> 
                                        </Carousel>
                                        <div className="h-full">
                                            <Link to="/Destinos" className="text-decoration-none text-primary fs-3">
                                                <button className="rounded-4 p-3 my-3">
                                                    ¡Mira todos nuestros destinos!
                                                </button>
                                            </Link>
                                            
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