import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const DestinyHomeCard = ({src})=>{


    return(
        <>
            <Card className="mw-75h-auto m-auto d-block text-wrap">
                <Card.Img className='w-100' variant="top" src={src} style={{height: "27rem"}}/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='fs-1'>Algunos de nuestros destinos</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

DestinyHomeCard.propTypes={
    src: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string
}

export default DestinyHomeCard;