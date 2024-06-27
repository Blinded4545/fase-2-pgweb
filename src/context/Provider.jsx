
import React from "react";
import { useReducer } from "react";
import loginContext from "./LoginContext";
import reducer from "./Reducers/Reducer";
import usrReducer from "./Reducers/usrReducer"
import reservReducer from "./Reducers/reservReducer";
import { srcInputReducer, reserveDetailsReducer } from "./Reducers/optionReducers";
import { init, initReserv, initSrcInput, initUsr, initReserveDetails } from "./inits";


const Provider = ({children})=>{

    //Todos los datos necesarios para hacer los inicios de sesion, manejo de reservaciones y cambio de foto de perfil
    const [state, dispatchState] = useReducer(reducer, {}, init)
    const [usrState, dispatchUsrState] = useReducer(usrReducer, {}, initUsr)
    const [reservState, dispatchReservState] = useReducer(reservReducer, {}, initReserv)
    const [srcInput, dispatchSrcInput] = useReducer(srcInputReducer, {}, initSrcInput)
    const [reserveDetails, dispatchReserveDetails] = useReducer(reserveDetailsReducer, {}, initReserveDetails)


    //Con esto se inicia sesion
    const LogIn = ()=>{
        dispatchUsrState({type: "login"})
        dispatchState({type: "login"})
    }

    //Aqui se borran todos los datos de la sesion
    const LogOut = async ()=>{
        await fetch("http://localhost:8000/logout", {
            method: "POST",
            credentials: "include",
        }).then(res=>{
            window.location.reload()
        })
        dispatchSrcInput({type: "undo"})
        dispatchUsrState({type: "logout"})
        dispatchState({type: "logout"})
        undoReservation()
    }

    //Con esto se almacenan en el localstorage todos los datos necesarios de la reservacion de vuelo
    const MakeReservation = (place, Avion, Hora, Aeropuerto, Fecha, Clase, selectedSeat)=>{
        const ReservDet = `${place}.${Avion}.${Hora}.${Aeropuerto}.${Fecha}.${Clase}.${selectedSeat}`
        
        console.log(ReservDet);

        fetch("http://localhost:8000/makeReservation", { //Enviar detalles de reservacion al backend
            method: "PUT",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({reservDetails: ReservDet, usr: state})
        }).then(res=>console.log(res)).catch(err=>console.log(err))

        dispatchReservState({type: "makeReserve"})
        dispatchReserveDetails(ReservDet, {type: "makeReserve"})
        
    }

    //Con esto se eliminan todos los datos relacionados con la reservacion de vuelo
    const undoReservation = ()=>{
        
        dispatchReservState({type: "undo"})
        dispatchReserveDetails({type: "undoReserve"})
    }

    //Este es unicamente para la funcionalidad de foto de perfil
    const updatePhoto = async (src)=>{
        dispatchSrcInput({type: "update"})
        console.log(src)
    }

    return (
        <loginContext.Provider value={{...state, ...usrState, ...reservState, ...srcInput, LogIn, LogOut, MakeReservation, undoReservation, updatePhoto, ...reserveDetails}}>
            {children}
        </loginContext.Provider>
    )
}

export default Provider;