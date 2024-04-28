
import React from "react";
import { useState } from "react";
import { OverlayTrigger, Tooltip, Modal, Button, ListGroup } from "react-bootstrap";
import { mdiTwitter, mdiYoutube, mdiInstagram, mdiFacebook, mdiAccountGroup } from "@mdi/js";
import Icon from "@mdi/react";

const tooltip = (txt)=>{
    return (
        <Tooltip>
            <strong>{txt}</strong>
        </Tooltip>
    )
}

const FooterComponent = ()=>{


    // Todo esto es para manejar los modales de redes sociales y grupo
    const [showFacebook, setShowFacebook] = useState(false)
    const [showTwitter, setShowTwitter] = useState(false)
    const [showYoutube, setShowYoutube] = useState(false)
    const [showInstagram, setShowInstagram] = useState(false)
    const [showGroup, setShowGroup] = useState(false)

    const handleCloseModal = ()=>{
        setShowInstagram(false)
        setShowFacebook(false)
        setShowYoutube(false)
        setShowTwitter(false)
        setShowGroup(false)
    }

    return (
        <>

            {/* Con esto se crea todo la barra de footer */}
            <div className="w-100 h-auto d-flex justify-content-center">
                <div>
                    {/* MODAL SETTING UP */}

                    {/* Facebook Modal */}
                    <Modal centered show={showFacebook} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Facebook Links <Icon path={mdiFacebook} size={1.5}/></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item><a href="https://x.com/AnglicaMaraSa08" target="_blank" rel="noreferrer"><h4>Angelica Sanabria</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.facebook.com/share/xsfUQSbwjuWE3sQY/?mibextid=qi2Omg" target="_blank" rel="noreferrer"><h4>Cristian Choperena</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.facebook.com/camilo.herrera.75098364" target="_blank" rel="noreferrer"><h4>Camilo Herrera</h4></a></ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Twitter Modal */}
                    <Modal centered show={showTwitter} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Twitter Links <Icon path={mdiTwitter} size={1.5}/></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item><a href="https://x.com/AnglicaMaraSa08" target="_blank" rel="noreferrer"><h4>Angelica Sanabria</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://x.com/crisdejchav" target="_blank" rel="noreferrer"><h4>Cristian Choperena</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://twitter.com/NoOneIs53222017" target="_blank" rel="noreferrer"><h4>Camilo Herrera</h4></a></ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Youtube Modal */}
                    <Modal centered show={showYoutube} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Youtube Links <Icon path={mdiYoutube} size={1.5}/></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item><a href="https://youtube.com/@angelicamariasanabriaflore2169" target="_blank" rel="noreferrer"><h4>Angelica Sanabria</h4></a></ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
                    {/* Instagram Modal */}
                    <Modal centered show={showInstagram} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Instagram Links <Icon path={mdiInstagram} size={1.5}/></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                            <ListGroup>
                                <ListGroup.Item><a href="https://www.instagram.com/sanabria_florez" target="_blank" rel="noreferrer"><h4>Angelica Sanabria</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.instagram.com/crisjolno" target="_blank" rel="noreferrer"><h4>Cristian Choperena</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.instagram.com/camiloh82" target="_blank" rel="noreferrer"><h4>Camilo Herrera</h4></a></ListGroup.Item>
                                <ListGroup.Item><a href="https://www.instagram.com/yeisonmayorga03" target="_blank" rel="noreferrer"><h4>Yeison Mayorga</h4></a></ListGroup.Item>
                            </ListGroup>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Group Modal */}
                
                    <Modal centered show={showGroup} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Grupo <Icon path={mdiAccountGroup} size={1.5}/></Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex gap-4 justify-content-start align-items-center">
                            <ListGroup>
                                <ListGroup.Item className="w-100"><h3>Angelica Sanabria - 2205564</h3></ListGroup.Item>
                                <ListGroup.Item className="w-100"><h3>Cristian Choperena - 2182190</h3></ListGroup.Item>
                                <ListGroup.Item className="w-100"><h3>Camilo Herrera - 2231530</h3></ListGroup.Item>
                                <ListGroup.Item className="w-100"><h3>Yeison Mayorga - 2210044</h3></ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    {/* SOCIAL BUTTONS */}
                    {/* Estos son los botones de redes sociales y grupo */}
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Twitter")}
                    >
                        <button className="bg-transparent border-0 py-1" onClick={()=>{setShowTwitter(true)}}>
                            <Icon path={mdiTwitter} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Youtube")}
                    >
                        <button className="bg-transparent border-0 py-1" onClick={()=>{setShowYoutube(true)}}>
                            <Icon path={mdiYoutube} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Instagram")}
                    >
                        <button className="bg-transparent border-0 py-1" onClick={()=>{setShowInstagram(true)}}>
                            <Icon path={mdiInstagram} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Facebook")}
                    >
                        <button className="bg-transparent border-0 py-1" onClick={()=>{setShowFacebook(true)}}>
                            <Icon path={mdiFacebook} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>
                </div>
                <div>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Integrantes del grupo")}
                    >
                        <button className="bg-transparent border-0 py-1" onClick={()=>{setShowGroup(true)}}>
                            <Icon path={mdiAccountGroup} size={1.5}/>
                        </button>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    )    

}

export default FooterComponent;