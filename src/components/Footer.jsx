
import React from "react";
import MemberCard from "./MemberCard";
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
            <div className="w-100 d-flex justify-content-center">
                <div>
                    {/* MODAL SETTING UP */}
                    <Modal centered show={showFacebook} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
                    <Modal centered show={showTwitter} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Twitter</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
                    <Modal centered show={showYoutube} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Youtube</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
                    <Modal centered show={showInstagram} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Instagram Links</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                            <ListGroup>
                            <ListGroup.Item><a href="https://www.instagram.com/sanabria_florez" target="_blank" rel="noreferrer">Angelica Sanabria</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://www.instagram.com/crisjolno" target="_blank" rel="noreferrer">Cristian Choperena</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://www.instagram.com/camiloh82" target="_blank" rel="noreferrer">Camilo Herrera</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://www.instagram.com/yeisonmayorga03" target="_blank" rel="noreferrer">Yeison Mayorga</a></ListGroup.Item>
                            </ListGroup>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
                    <Modal centered show={showGroup} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Grupo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex gap-4 justify-content-start align-items-center">
                                <MemberCard Nombre="Cristian Choperena" Codigo="2182190" className="w-25 mw-25"></MemberCard>
                                <MemberCard Nombre="Camilo Herrera" Codigo="2231530" className="w-25 mw-25"></MemberCard>
                                <MemberCard Nombre="Yeison Mayorga" Codigo="2210044" className="w-25 mw-25"></MemberCard>
                                <MemberCard Nombre="Angelica Sanabria" Codigo="2205564" className="w-25 mw-25"></MemberCard>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    {/* SOCIAL BUTTONS */}

                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Twitter")}
                    >
                        <button className="bg-transparent border-0" onClick={()=>{setShowTwitter(true)}}>
                            <Icon path={mdiTwitter} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Youtube")}
                    >
                        <button className="bg-transparent border-0" onClick={()=>{setShowYoutube(true)}}>
                            <Icon path={mdiYoutube} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Instagram")}
                    >
                        <button className="bg-transparent border-0" onClick={()=>{setShowInstagram(true)}}>
                            <Icon path={mdiInstagram} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Twitter")}
                    >
                        <button className="bg-transparent border-0" onClick={()=>{setShowFacebook(true)}}>
                            <Icon path={mdiFacebook} size={1.5}></Icon>
                        </button>
                    </OverlayTrigger>
                </div>
                <div>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltip("Integrantes del grupo")}
                    >
                        <button className="bg-transparent border-0" onClick={()=>{setShowGroup(true)}}>
                            <Icon path={mdiAccountGroup} size={1.5}/>
                        </button>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    )    

}

export default FooterComponent;