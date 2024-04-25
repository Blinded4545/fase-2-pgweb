import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const DestinyCard = ({src, location="Somewhere in the world", description="Provisional auto description just for testing purpose"})=>{


    return(
        <>
            <Card className="w-auto mw-75 h-100 m-auto d-block text-wrap">
                <Card.Img variant="top" src={src} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='fs-1 '>{location}</Card.Title>
                    <Card.Text className='fs-4 text-wrap px-2'>
                    {description}
                    </Card.Text>
                    <Button variant="primary" className='fs-3'>Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

DestinyCard.propTypes={
    src: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string
}

export default DestinyCard;