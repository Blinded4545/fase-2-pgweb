
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { useLocation } from "react-router-dom";

const Gallery = ()=>{

    const loc = useLocation()
    const { dest } = (loc!=null)?loc.state:false

    const titulos = {

        // Nacionales

        "Barranquilla": "Esta es Barranquilla, una ciudad costera de Colombia perteneciente al departamento Atlantico de Colombia",
        "Bogotá": "Esta es Bogota, la ciudad capital de Colombia",
        "Cali": "Esta es Cali, la capital de la salsa y pertenece al departamento de Valle del Cauca de Colombia",
        "Cartagena": "Esta es Cartagena, una ciudad costera de Colombia perteneciente al departamento Bolivar",
        "Medellín": "Esta es Medellin, considerada la ciudad de la eterna primavera y perteneciente al departamento de Antioquia, Colombia",
        "Santa Marta": "Esta es Santa Marta, Costa colombia",

        // Internacionales

        "ALemania": "Esta es Alemania, un país europeo con una amplia historia y una cultura espectacular",
        "Argentina": "Esta es Alemania, un país europeo con una amplia historia y una cultura espectacular",
        "Chile": "Esta es Alemania, un país europeo con una amplia historia y una cultura espectacular",
        "España": "Esta es Alemania, un país europeo con una amplia historia y una cultura espectacular",
        "México": "Esta es Alemania, un país europeo con una amplia historia y una cultura espectacular",
        "Reino Unido": "Esta es Alemania, un país europeo con una amplia historia y una cultura espectacular"
    }

    const imgs = [
        "https://www.wradio.com.co/resizer/v2/M3QEV5BLHVAHRO2CVVCYCEUZWQ.jpg?auth=1a19677aab5147edd0a2281e4051c7c0ec5f228ca14ac0b1b5f905e0401d6f3f&width=650&height=488&quality=70&smart=true",
        "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/inline-images/Parque%20NAcional.png",
        "https://bogota.gov.co/sites/default/files/2023-04/catedral-primada.jpeg"
    ] //Cambiar a query en db

    return (
        <>

            <div className="w-100 h-100">
                <NavBar/>

                {
                    (dest!==false)
                    ?
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column text-wrap" style={{"backgroundColor": "#EDEDED"}}>
                        <div className="text-wrap w-100 h-auto text-center d-flex justify-content-center">
                            <h1 className="w-75">{titulos[dest]}</h1>
                        </div>
                        <div className="d-flex w-100 my-5 px-5 justify-content-between">
                            <div className="px-5">
                                <div className="rounded-4" style={{"backgroundImage": `url(${imgs[0]})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                                    <img src="https://placehold.co/700" alt="" className="w-100 h-auto opacity-0"/>
                                </div>
                                <p>centro de bucaramanga</p>
                            </div>
                            <div className="px-5">
                                <div className="rounded-4" style={{"backgroundImage": `url(${imgs[1]})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                                    <img src="https://placehold.co/700" alt="" className="w-100 h-auto opacity-0"/>
                                </div>
                                <p>centro de bucaramanga</p>
                            </div>
                            <div className="px-5">
                                <div className="rounded-4" style={{"backgroundImage": `url(${imgs[2]})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                                    <img src="https://placehold.co/700" alt="" className="w-100 h-auto opacity-0"/>
                                </div>
                                <p>centro de bucaramanga</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                        <h2>No puedes estar aqui sin haber accedido mediante los destinos.</h2>
                        <h2>{dest}</h2>
                    </div>
                }

                <div className="bg-white sticky-bottom w-100">
                    <FooterComponent className=""/>
                </div>
            </div>

        </>
    )

}

export default Gallery;