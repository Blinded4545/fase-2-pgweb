
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { useLocation } from "react-router-dom";
import "../css/gallery.css"

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

        "Alemania": "Descubre Alemania: mezcla de modernidad y tradición, paisajes impresionantes, cultura rica y ciudades vibrantes te esperan en cada esquina.",
        "Argentina": "Argentina: Tierra de tango, carne asada, paisajes variados desde glaciares hasta selvas tropicales, y una pasión cultural única.",
        "Chile": "Chile: Naturaleza impresionante con desiertos, volcanes y fiordos, vinos de clase mundial y una rica herencia histórica.",
        "China": "China: Una mezcla fascinante de antigua historia y modernidad deslumbrante, con paisajes diversos y una gastronomía increíblemente variada.",
        "España": "España: Encanto histórico, playas soleadas, una vida nocturna vibrante, arte renombrado y una cocina que deleita todos los sentidos.",
        "México": "México: Ruinas antiguas, playas paradisíacas, comida picante y sabrosa, cultura colorida y festivales llenos de música y tradición."
    }

    const imgs = {
        "Barranquilla": [
            "https://cdn.getyourguide.com/img/tour/f89573b5571ec4dd519fabc88a4bc1b305d742d411824265ba2e4bba0580386a.jpg/145.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/a2/58/15/plaza-san-nicolas.jpg",
            "https://blog.properati.com.co/wp-content/uploads/2021/11/vivir-barranquilla-centro-historico-colombia-properati.jpg"
        ],
        "Bogotá":[
            "https://www.wradio.com.co/resizer/v2/M3QEV5BLHVAHRO2CVVCYCEUZWQ.jpg?auth=1a19677aab5147edd0a2281e4051c7c0ec5f228ca14ac0b1b5f905e0401d6f3f&width=650&height=488&quality=70&smart=true",
            "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/inline-images/Parque%20NAcional.png",
            "https://bogota.gov.co/sites/default/files/2023-04/catedral-primada.jpeg"
        ],
        "Cali":[
            "https://www.travelers.com.co/assets/cache/uploads/cali/cali-2024/fachada/1200x630/travelers-castellon-de-juanambu-cali-08-1681142327.jpg",
            "https://i0.wp.com/passporterapp.com/es/blog/wp-content/uploads/2021/09/que-ver-en-cali-.jpg?fit=1740%2C1080&ssl=1",
            "https://www.cali.gov.co/turismo/info/principal/media/galeria/thumbs/thgaleria_400X400_273125.jpg"
        ],
        "Cartagena": [
            "https://cdn.forbes.com.mx/2014/09/Travelocity-Cartagena-Destacada.Galeria.jpg",
            "https://media.staticontent.com/media/pictures/9495889e-54f9-40d2-939d-b04bf30b47c7",
            "https://img.lalr.co/cms/2023/01/10172000/ciudad-cartagena-800-1.jpg?size=xl"
        ],
        "Medellín": [
            "https://www.travelers.com.co/assets/cache/uploads/medellin/1300x868/medellin-travelers-apartamentos-suites-colombia.jpeg",
            "https://media.nomadicmatt.com/2024/medellinthings.jpg",
            "https://telemedellin.tv/wp-content/uploads/2023/11/Medellin-1.jpg"
        ],
        "Santa Marta": [
            "https://viajaconrichy.com/wp-content/uploads/2022/12/Santa-Marta-rodadero.jpg",
            "https://www.santamarta.gov.co/sites/default/files/bahia_de_santa_marta_web.jpg?fid=27406",
            "https://www.hotelestequendama.com.co/assets/cache/uploads/tequendama-hoteles/destinos/1920x1080/santa-marta-destino-tequendama-hoteles-colombia-1693913997.jpeg"
        ],

        //Ahora los internacionales
        "Alemania": [
            "https://tipsparatuviaje.com/wp-content/uploads/2019/10/berlin-alemania.jpg",
            "https://blog.hoteleus.com/wp-content/uploads/2022/09/Viajar-en-Verano-a-Alemania-PORTADA.jpg",
            "https://www.germany.travel/media/redaktion/natur_aktiv_content/_grb9720.jpg"
        ],
        "Argentina": [
            "https://digitalhub.fifa.com/transform/f65ed923-9b64-4ba2-af70-c44345c61b59/Obelisco-Buenos-Aires-Argentina-celebrations",
            "https://realestatemarket.com.mx/images/2023/05-mayo/30-05/buenos-aires-mejor-ciudad-para-el-turismo-de-reuniones-g.jpg",
            "https://www.lugaresturisticosdeargentina.com/wp-content/gallery/mardelplata/Mar-del-Plata1.jpg"
        ],
        "Chile": [
            "https://content.skyscnr.com/m/25adda91669a1d75/original/GettyImages-466024975_doc.jpg?resize=1800px:1800px&quality=100",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68563-Santiago.jpg",
            "https://faro.travel/blog/wp-content/uploads/2019/01/mercado-fluvial-valdivia-1024x683.jpg"
        ],
        "China": [
            "https://www.cathaypacific.com/content/dam/destinations/chengdu/cityguide-gallery/chengdu-qintaistreet-920x500.jpg",
            "https://i0.wp.com/viajesytramites.com/wp-content/uploads/2019/02/SZX_01.jpg?fit=931%2C428&ssl=1&resize=1280%2C720",
            "https://static.vecteezy.com/system/resources/previews/039/218/128/non_2x/ai-generated-chinese-spring-festival-atmosphere-professionalgraphy-photo.jpg"
        ],
        "España": [
            "https://cdn1.intriper.com/wp-content/uploads/2024/05/24212719/20-mejores-visitas-culturales-para-hacer-en-barcelona-2024-turismo-espana.jpg",
            "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/catedral-de-tarragona-desde-los-tejados-s77304961.jpg_1224728085.jpg",
            "https://eu-central-1.linodeobjects.com/tecnohotelnews/2022/12/florian-wehde-WBGjg0DsO_g-unsplash.jpg",
        ],
        "México": [
            "https://blog.estrellaroja.com.mx/wp-content/uploads/2023/09/zocalo-cdmx.jpg",
            "https://content.r9cdn.net/rimg/dimg/9b/2d/0aeefb46-city-53588-162aa932673.jpg?width=1366&height=768&xhint=1388&yhint=923&crop=true",
            "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1705582644/mkiosll4innhftkz2hie.jpg",
        ]
    }

    return (
        <>

            <div className="w-100 h-100">
                <NavBar/>

                {
                    (dest!==false)
                    ?
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center flex-column text-wrap" style={{"backgroundColor": "#EDEDED"}} id="MainWrapper">
                        <div className="text-wrap w-100 h-auto text-center d-flex justify-content-center" id="textWrapper">
                            <h1 className="w-75">{titulos[dest]}</h1>
                        </div>
                        <div className="d-flex w-100 my-5 px-5 justify-content-between flex-column" id="imgChildsWrapper">
                            <div className="imgWrappers px-5">
                                <div className="rounded-4" style={{"backgroundImage": `url(${imgs[dest][0]})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                                    <img src="https://placehold.co/700" alt="" className="w-100 h-auto opacity-0"/>
                                </div>
                            </div>
                            <div className=" imgWrappers px-5">
                                <div className="rounded-4" style={{"backgroundImage": `url(${imgs[dest][1]})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                                    <img src="https://placehold.co/700" alt="" className="w-100 h-auto opacity-0"/>
                                </div>
                            </div>
                            <div className="imgWrappers px-5">
                                <div className="rounded-4" style={{"backgroundImage": `url(${imgs[dest][2]})`, "backgroundSize": "cover", "backgroundPosition": "center"}}>
                                    <img src="https://placehold.co/700" alt="" className="w-100 h-auto opacity-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                        <h2>No puedes estar aqui sin haber accedido mediante los destinos.</h2>
                        <h2>{dest}</h2>
                    </div>
                }

                <div className="bg-white position-relative sticky-bottom w-100 h-auto">
                    <FooterComponent className=""/>
                </div>
            </div>

        </>
    )

}

export default Gallery;