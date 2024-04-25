
import React from "react";
import NavBar from "../components/NavBar";
import image from "../assets/logo.jpeg"
import { Carousel } from "react-bootstrap";
import DestinyCard from "../components/DestinyCard";
import FooterComponent from "../components/Footer";
import "../css/Home.css"


const Home = ()=>{

    return(
        <>
            <div className="h-100 w-100">
                <NavBar className="position-fixed"/>
                <div className="bg-primary h-100 d-flex justify-content-center align-items-center">
                    <div className="container-xl w-100 h-100 m-0 p-0 justify-content-center align-items-center">
                        <div className="row w-100 h-100 d-flex justify-content-evenly">
                            <div className="w-100 h-100 col d-flex justify-content-center align-items-center flex-column">
                                <div className="">
                                    <img src={image} alt="" className="rounded-4" />
                                </div>
                                <div className="w-75 text-break text-wrap">
                                    <h3>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, deleniti. Voluptatibus quos rerum rem! Ad beatae animi, est sunt omnis assumenda, aspernatur exercitationem eaque facilis enim possimus ea consectetur harum?
                                    </h3>   
                                </div>
                            </div>
                            <div className="col d-flex flex-wrap justify-content-end align-content-center"> 
                                <div className="w-auto h-100 d-flex flex-column justify-content-center align-items-center">
                                    <Carousel id="Carousel" className="text-success w-75" indicators={false} prevIcon="⮜" nextIcon="⮞"> 
                                        <Carousel.Item className=" " interval={5000}> 
                                            <DestinyCard src="https://www.ul.edu.co/uleduco/cache/mod_roksprocket/caba858bd232dc141cde641e6d15b438_350_500.jpg"/>
                                        </Carousel.Item> 
                                        <Carousel.Item interval={5000}> 
                                            <DestinyCard src="https://www.ul.edu.co/uleduco/cache/mod_roksprocket/caba858bd232dc141cde641e6d15b438_350_500.jpg"/>
                                        </Carousel.Item> 
                                    </Carousel>
                                    <div className="h-full">
                                        <button className="rounded-4 p-3 my-3">Check more destinations</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        </>
    )
}

export default Home;