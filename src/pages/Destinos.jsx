
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import DestinationToggle from "../components/DestinationToggle";

const Destinos = ()=>{
    return (
        <>
            <div className="h-100 w-100">
                <NavBar/>

                <div id="destinationHandler" className="h-100 w-100 d-flex justify-content-center align-items-center flex-wrap overflow-scroll my-5 p-2"> {/* Here will be all the Destinations */}

                    {/* Vuelos nacionales */}
                    <div className="w-100 h-auto d-flex flex-column gap-5 align-items-center">   
                        <h1 className="d-inline">Vuelos Nacionales</h1>
                        <div className="d-flex w-100 gap-3 flex-wrap justify-content-center">
                        <DestinationToggle src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/a2/58/15/plaza-san-nicolas.jpg" Place="Barranquilla" Description="Explora la belleza costera de Barranquilla, Colombia. Desde sus playas doradas hasta su bullicioso carnaval, esta ciudad te sorprenderá con su encanto tropical y su rica historia. ¡Déjate cautivar por la esencia caribeña de Barranquilla!"></DestinationToggle>
                        <DestinationToggle src="https://shorturl.at/ehmGO" Place="Bogota" Description="Descubre la vibrante Bogotá.. Desde su fascinante arquitectura colonial hasta su escena cultural en constante evolución, la capital te espera con experiencias únicas y paisajes urbanos cautivadores."></DestinationToggle>
                        <DestinationToggle src="https://shorturl.at/afjN3" Place="Cali" Description="Explora la energía contagiosa de Cali. Conocida como la capital de la salsa, esta ciudad te invita a bailar al ritmo de la música, a disfrutar de su deliciosa gastronomía y a maravillarte con sus paisajes montañosos. ¡Cali te espera con los brazos abiertos!"></DestinationToggle>
                        <DestinationToggle src="https://shorturl.at/fgCT2" Place="Cartagena" Description="Cartagena tiene más de 5 complejos de islas a su alrededor que a su vez proporcionan más de 20 playas para visitar y disfrutar. La arena blanca, las palmeras, la brisa del mar y en algunos casos los arrecifes de coral, te darán la bienvenida a estos paraísos de descanso."></DestinationToggle>
                        <DestinationToggle src="https://shorturl.at/rEJL5" Place="Medellín" Description="Medellín ha emergido como la Ciudad de la Eterna Primavera, con un clima templado que la convierte en un destino ideal para las actividades al aire libre en Antioquia. Sumérjase en la comida callejera, los mercados y el arte público en un recorrido turístico ademas de visitar la plaza de Botero."></DestinationToggle>
                        <DestinationToggle src="https://shorturl.at/ruA36" Place="Santa Marta" Description="En Santa Marta, es posible disfrutar de la biodiversidad en todo su esplendor. El Acuario y el Museo del Mar son visitas que debes hacer si aprecias el mundo marino y su riqueza. Si quieres saber mas y llegar a obtener esas experiencias, usa el enlace a continuacion"></DestinationToggle>   
                        </div>
                    </div>

                    {/* Vuelos nacionales */}
                    <div className="w-100 my-5 d-flex flex-column gap-5 align-items-center">   
                        <h1 className="d-inline">Vuelos Internacionales</h1>
                        <div className="w-auto h-100 d-flex gap-3 flex-wrap justify-content-center align-items-center">
                        <DestinationToggle src="https://vectorflags.s3.amazonaws.com/flags/de-square-01.png" Place="Alemania" Description="¡Descubre Alemania! donde historia, modernidad y tradición se encuentran. Desde los bulliciosos mercados de Berlín hasta los paisajes de cuento de Baviera, cada lugar te cautivará. Sumérgete en su rica cultura, saborea su deliciosa gastronomía y déjate llevar por la magia de este país único en Europa."></DestinationToggle>
                        <DestinationToggle src="https://vectorflags.s3.amazonaws.com/flags/ar-square-01.png" Place="Argentina" Description="Explora la diversidad de paisajes y culturas en Sudamérica. Desde la majestuosidad de la Patagonia hasta la exuberante selva tropical en el norte, Argentina te invita a descubrir sus maravillas naturales. Disfruta de su rica gastronomía, la vida cosmopolita de Buenos Aires y la pasión por el fútbol. ¡Un destino que emociona y cautiva a cada paso!"></DestinationToggle>
                        <DestinationToggle src="https://cdn-icons-png.freepik.com/512/552/552055.png" Place="Chile" Description="Descubre la diversidad natural de Chile, desde el desierto más árido del mundo hasta los picos nevados de la cordillera de los Andes. Explora los misteriosos moai de Isla de Pascua, saborea los exquisitos vinos del valle de Colchagua y maravíllate con los glaciares de la Patagonia. ¡Una aventura inolvidable te espera en este país de contrastes!"></DestinationToggle>   
                        <DestinationToggle src="https://vectorflags.s3.amazonaws.com/flags/es-square-01.png" Place="España" Description="Sumérgete en la rica historia y el encanto de España, donde la cultura se entrelaza con la modernidad. Recorre las estrechas calles de ciudades medievales, disfruta de la exquisita gastronomía y relájate en las soleadas playas de la costa. ¡Déjate seducir por el ritmo apasionado de la vida española!"></DestinationToggle>
                        <DestinationToggle src="https://m.media-amazon.com/images/I/61gU+RagxWL._AC_UF894,1000_QL80_.jpg" Place="Mexico" Description="¡Bienvenido al país de los colores, sabores y tradiciones! Sumérgete en la rica cultura mexicana explorando antiguas ruinas mayas, disfrutando de la cocina picante y vibrante, y relajándote en las paradisíacas playas del Caribe. ¡Déjate envolver por la calidez y la hospitalidad de México!"></DestinationToggle>
                        <DestinationToggle src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_the_United_Kingdom_%281-1%29.svg/1200px-Flag_of_the_United_Kingdom_%281-1%29.svg.png" Place="Reino Unido" Description="Descubre un destino diverso y fascinante que combina historia, cultura y belleza natural. Desde los icónicos monumentos de Londres hasta los encantadores pueblos de la campiña inglesa, cada rincón ofrece una experiencia única. Sumérgete en su encanto y déjate cautivar por su autenticidad."></DestinationToggle>
                        </div>
                    </div>

                </div>

                <div className="bg-white opacity-75 position-relative sticky-bottom w-100">
                    <FooterComponent className=""/>
                </div>
            </div>
        </>
    )
}

export default Destinos;