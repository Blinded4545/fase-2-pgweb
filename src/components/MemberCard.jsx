import React from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const MemberCard = ({Nombre="Prueba", Codigo="0000000"})=>{

    return(
        <>
            <Card className="w-auto mw-50 h-100 m-auto d-block text-wrap">
                {/* <Card.Img variant="top" src="holder.js/100x100" /> */}
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='fs-3 '>{Nombre}</Card.Title>
                    <Card.Text className='fs-5 text-wrap px-2'>
                    {Codigo}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}

MemberCard.propTypes={
    Nombre: PropTypes.string,
    Codigo: PropTypes.string
}

export default MemberCard;