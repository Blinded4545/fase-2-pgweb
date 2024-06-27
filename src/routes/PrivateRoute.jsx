
import React, { useContext } from "react"
import loginContext from "../context/LoginContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children})=>{

    const loginCntx = useContext(loginContext).state

    return (loginCntx)?children:<Navigate to="/noPage"></Navigate>

    //Si no esta con una sesion activa, va a devolver la noPage
}

export default PrivateRoute