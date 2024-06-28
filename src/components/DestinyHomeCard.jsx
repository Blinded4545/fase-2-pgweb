import React from 'react';
import Card from 'react-bootstrap/Card';

const DestinyHomeCard = ({src})=>{


    return(
        <>
            {/* Esto es solo para crear las cards usadas en el carrusel del inicio */}
            <Card className="w-100 h-auto m-auto d-block text-wrap">
                <Card.Img className='w-100' variant="top" src={src} style={{height: "27rem"}}/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='fs-1'>Algunos de nuestros destinos</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default DestinyHomeCard;