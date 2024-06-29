
import NavBar from "../components/NavBar"
import FooterComponent from "../components/Footer"

import React, { useContext, useState } from "react"
import loginContext from "../context/LoginContext"

import { Table, Toast, ToastContainer} from "react-bootstrap"

import Icon from "@mdi/react"
import { mdiTrashCanOutline } from "@mdi/js"

const Control = ()=>{
    const logggg=useContext(loginContext)

    const [clicked, setClicked] = useState(false)
    const [dataRaw, setDataRaw] = useState([])
    const [toastDisplaySuccess, setToastDisplaySuccess] = useState(false)
    const [toastDisplayFailed, setToastDisplayFailed] = useState(false)


    const provFunc = async ()=>{
        await fetch("http://localhost:8000/getAllInfo", {
            method: "POST", 
            credentials: "same-origin",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usr: logggg.usrState})
        })
        .then((res)=>res.json())
        .then((data)=>{
            setDataRaw(data)
            setClicked(true)
        })
    }

    const deleteUser = async (usr)=>{
        await fetch("http://localhost:8000/deleteRegistry", {
            method: "DELETE",
            credentials: "same-origin",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usr: usr, requester: logggg.usrState})
        }).then(res=>{
            if(res.status===200){
                setToastDisplaySuccess(true)

                setDataRaw(dataRaw.filter(item=>item.Username !== usr))
            }else if(res.status===403){
                setToastDisplayFailed(true)
            }
        })
    }

    return (
        <>
            <div className="w-100 h-100">
                <div className="position-fixed z-1 w-100 bg-white opacity-75">
                    <NavBar/>
                </div>

                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                    
                    <div className="w-auto h-50">
                    <button className="" hidden={(clicked)?true:false} onClick={provFunc}>Click para cargar todos los usuarios</button>

                    <Table striped bordered hover className="table-hover border-secondary rounded-5 fs-6">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {    
                            (clicked)
                            ?
                            dataRaw.map(e=>(
                                <tr key={dataRaw.indexOf(e)}>
                                    <td>{dataRaw.indexOf(e)}</td>
                                    <td>{e.Username}</td>
                                    <td>{e.Email}</td>
                                    <td>
                                        <button disabled={(e.Username==="admin")?true:false} onClick={(event)=>deleteUser(e.Username)}>
                                            <Icon path={mdiTrashCanOutline} size={1}/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                            :
                            <></>
                        }
                        </tbody>
                    </Table>
                    </div>

                </div>

                <ToastContainer position="bottom-end" className="position-fixed mb-5 me-4" style={{ zIndex: 1 }}>
                    <Toast show={toastDisplaySuccess} onClose={()=>{setToastDisplaySuccess(false)}} delay={5000} autohide>
                        <Toast.Header>
                            <strong className="me-auto text-success fs-3">Success</strong>
                        </Toast.Header>
                        <Toast.Body className="fs-4">Usuario borrado exitosamente</Toast.Body>
                    </Toast>
                    <Toast show={toastDisplayFailed} onClose={()=>{setToastDisplayFailed(false)}} delay={5000} autohide>
                        <Toast.Header>
                            <strong className="me-auto text-danger fs-3">Failed</strong>
                        </Toast.Header>
                        <Toast.Body className="fs-4">Ha ocurrido un problema, recarga la lista</Toast.Body>
                    </Toast>
                </ToastContainer>
                

                <div className="bg-white shadow-lg position-sticky sticky-bottom w-100">
                    <FooterComponent className=""/>
                </div>
                
            </div>
        </>
    )
}

export default Control