
import React from "react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import DestinationToggle from "../components/DestinationToggle";

const Destinos = ()=>{
    return (
        <>
            <div className="h-100 w-100">
                <NavBar/>

                <div id="destinationHandler" className="h-100 w-100 d-flex justify-content-center align-items-center flex-wrap overflow-scroll" style={{"backgroundColor": "#EDEDED"}}> {/* Here will be all the Destinations */}

                    {/* Vuelos nacionales */}
                    <div className="w-100 mt-5 h-auto d-flex flex-column gap-5 align-items-center">   
                        <h1 className="d-inline">Vuelos Nacionales</h1>
                        <div className="d-flex w-auto gap-3 flex-wrap justify-content-center">
                            {/* Con esto se crean todos los acordiones de destinos */}
                            <DestinationToggle src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/a2/58/15/plaza-san-nicolas.jpg" Place="Barranquilla" Description="Explora la belleza costera de Barranquilla, Colombia. Desde sus playas doradas hasta su bullicioso carnaval, esta ciudad te sorprenderá con su encanto tropical y su rica historia. ¡Déjate cautivar por la esencia caribeña de Barranquilla!"></DestinationToggle>
                            <DestinationToggle src="https://desarrolloeconomico.gov.co/wp-content/uploads/2023/05/167_Colpatria8_RicardoBaez_small.jpg" Place="Bogotá" Description="Descubre la vibrante Bogotá, desde su arquitectura colonial hasta su escena cultural en constante evolución. La capital te espera con experiencias únicas, paisajes urbanos cautivadores y una gastronomía diversa que deleitará tus sentidos."></DestinationToggle>
                            <DestinationToggle src="https://colombiapais.com/principales-destinos/destinos-principales/cali-corcovado.jpg" Place="Cali" Description="Explora la energía contagiosa de Cali. Conocida como la capital de la salsa, esta ciudad te invita a bailar al ritmo de la música, a disfrutar de su deliciosa gastronomía y a maravillarte con sus paisajes montañosos. ¡Cali te espera con los brazos abiertos!"></DestinationToggle>
                            <DestinationToggle src="https://images.ctfassets.net/cfexf643femz/7ffmw1z22uDIYLvOwPWKvc/d7cdd973106b745b58904dd19a36d687/razones-invertir-cartagena-colombia.jpg" Place="Cartagena" Description="Cartagena tiene más de 5 complejos de islas a su alrededor que a su vez proporcionan más de 20 playas para visitar y disfrutar. La arena blanca, las palmeras, la brisa del mar y en algunos casos los arrecifes de coral, te darán la bienvenida a estos paraísos de descanso."></DestinationToggle>
                            <DestinationToggle src="https://visasencolombia.com/wp-content/uploads/2022/02/ciudad-de-medellin.jpg" Place="Medellín" Description="Medellín ha emergido como la Ciudad de la Eterna Primavera, con un clima templado que la convierte en un destino ideal para las actividades al aire libre en Antioquia. Sumérjase en la comida callejera, los mercados y el arte público en un recorrido turístico ademas de visitar la plaza de Botero."></DestinationToggle>
                            <DestinationToggle src="https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2023/08/03184048/pexels-diego-gonzalez-13359867-1.jpg" Place="Santa Marta" Description="En Santa Marta, es posible disfrutar de la biodiversidad en todo su esplendor. El Acuario y el Museo del Mar son visitas que debes hacer si aprecias el mundo marino y su riqueza. Si quieres saber más y llegar a obtener esas experiencias, usa el enlace a continuación"></DestinationToggle>   
                        </div>
                    </div>

                    {/* Vuelos internacionales */}
                    <div className="w-100 h-auto mb-5 d-flex flex-column gap-5 align-items-center">   
                        <h1 className="d-inline mt-5">Vuelos Internacionales</h1>
                        <div className="w-auto d-flex gap-3 flex-wrap justify-content-center">
                            {/* Con esto se crean todos los acordiones de destinos */}
                            <DestinationToggle src="https://vectorflags.s3.amazonaws.com/flags/de-square-01.png" Place="Alemania" Description="¡Descubre Alemania! donde historia, modernidad y tradición se encuentran. Desde los bulliciosos mercados de Berlín hasta los paisajes de cuento de Baviera, cada lugar te cautivará. Sumérgete en su rica cultura, saborea su deliciosa gastronomía y déjate llevar por la magia de este país único en Europa."></DestinationToggle>
                            <DestinationToggle src="https://vectorflags.s3.amazonaws.com/flags/ar-square-01.png" Place="Argentina" Description="Explora la diversidad de paisajes y culturas en Sudamérica. Desde la majestuosidad de la Patagonia hasta la exuberante selva tropical en el norte, Argentina te invita a descubrir sus maravillas naturales. Disfruta de su rica gastronomía, la vida cosmopolita de Buenos Aires y la pasión por el fútbol. ¡Un destino que emociona y cautiva a cada paso!"></DestinationToggle>
                            <DestinationToggle src="https://cdn-icons-png.freepik.com/512/552/552055.png" Place="Chile" Description="Descubre la diversidad natural de Chile, desde el desierto más árido del mundo hasta los picos nevados de la cordillera de los Andes. Explora los misteriosos moai de Isla de Pascua, saborea los exquisitos vinos del valle de Colchagua y maravíllate con los glaciares de la Patagonia. ¡Una aventura inolvidable espera en este país de contrastes!"></DestinationToggle>
                            <DestinationToggle src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/200px-Flag_of_the_People%27s_Republic_of_China.svg.png" Place="China" Description="¡Bienvenido a China, tierra de maravillas y tradición! Explora la Gran Muralla, saborea la auténtica cocina, y pasea por los antiguos templos de Xi'an. Relájate en los jardines de Suzhou y admira la modernidad de Shanghái. ¡Déjate sorprender por la riqueza cultural de China!"></DestinationToggle>
                            <DestinationToggle src="https://vectorflags.s3.amazonaws.com/flags/es-square-01.png" Place="España" Description="Sumérgete en la rica historia y el encanto de España, donde la cultura se entrelaza con la modernidad. Recorre las estrechas calles de ciudades medievales, disfruta de la exquisita gastronomía y relájate en las soleadas playas de la costa. ¡Déjate seducir por el ritmo apasionado de la vida española!"></DestinationToggle>
                            <DestinationToggle src="https://m.media-amazon.com/images/I/61gU+RagxWL._AC_UF894,1000_QL80_.jpg" Place="México" Description="¡Bienvenido al país de los colores, sabores y tradiciones! Sumérgete en la rica cultura mexicana explorando antiguas ruinas mayas, disfrutando de la cocina picante y vibrante, y relajándote en las paradisíacas playas del Caribe. ¡Déjate envolver por la calidez y la hospitalidad de México!"></DestinationToggle>
                        </div>
                    </div>

                </div>

                <div className="bg-white position-relative sticky-bottom w-100 h-auto">
                    <FooterComponent className=""/>
                </div>
            </div>
        </>
    )
}

export default Destinos;