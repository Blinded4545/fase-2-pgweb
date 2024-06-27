
import React from "react";
import { useReducer } from "react";
import loginContext from "./LoginContext";
import reducer from "./Reducers/Reducer";
import usrReducer from "./Reducers/usrReducer"
import reservReducer from "./Reducers/reservReducer";
import { AvionReducer, HoraReducer, AeropuertoReducer, FechaReducer, ClaseReducer, selectedSeatReducer, srcInputReducer } from "./Reducers/optionReducers";
import { init, initAeropuerto, initAvion, initClase, initFecha, initHora, initReserv, initSelectedSeat, initSrcInput, initUsr } from "./inits";


const Provider = ({children})=>{

    //Todos los datos necesarios para hacer los inicios de sesion, manejo de reservaciones y cambio de foto de perfil
    const [state, dispatchState] = useReducer(reducer, {}, init)
    const [usrState, dispatchUsrState] = useReducer(usrReducer, {}, initUsr)
    const [reservState, dispatchReservState] = useReducer(reservReducer, {}, initReserv)
    const [srcInput, dispatchSrcInput] = useReducer(srcInputReducer, {}, initSrcInput)
    const [Avion, dispatchAvion] = useReducer(AvionReducer, {}, initAvion)
    const [Hora, dispatchHora] = useReducer(HoraReducer, {}, initHora)
    const [Aeropuerto, dispatchAeropuerto] = useReducer(AeropuertoReducer, {}, initAeropuerto)
    const [Fecha, dispatchFecha] = useReducer(FechaReducer, {}, initFecha)
    const [Clase, dispatchClase] = useReducer(ClaseReducer, {}, initClase)
    const [selectedSeat, dispatchSelectedSeat] = useReducer(selectedSeatReducer, {}, initSelectedSeat)


    //Con esto se inicia sesion
    const LogIn = (usr)=>{
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
        localStorage.setItem("reservation", place)
        localStorage.setItem("Avion", Avion)
        localStorage.setItem("Hora", Hora)
        localStorage.setItem("Aeropuerto", Aeropuerto)
        localStorage.setItem("Fecha", Fecha)
        localStorage.setItem("Clase", Clase)
        localStorage.setItem("selectedSeat", selectedSeat)
        dispatchReservState({type: "makeReserve"})
        dispatchAvion(Avion, {type: "makeReserve"})
        dispatchHora(Hora, {type: "makeReserve"})
        dispatchAeropuerto(Aeropuerto, {type: "makeReserve"})
        dispatchFecha(Fecha, {type: "makeReserve"})
        dispatchClase(Clase, {type: "makeReserve"})
        dispatchSelectedSeat(selectedSeat, {type: "makeReserve"})
    }

    //Con esto se eliminan todos los datos relacionados con la reservacion de vuelo
    const undoReservation = ()=>{
        localStorage.removeItem("reservation")
        localStorage.removeItem("Avion")
        localStorage.removeItem("Hora")
        localStorage.removeItem("Aeropuerto")
        localStorage.removeItem("Fecha")
        localStorage.removeItem("Clase")
        localStorage.removeItem("selectedSeat")
        dispatchReservState({type: "undo"})
        dispatchAvion({type: "undoReserve"})
        dispatchHora({type: "undoReserve"})
        dispatchAeropuerto({type: "undoReserve"})
        dispatchClase({type: "undoReserve"})
        dispatchSelectedSeat({type: "undoReserve"})
    }

    //Este es unicamente para la funcionalidad de foto de perfil
    const updatePhoto = async (src)=>{
        dispatchSrcInput({type: "update"})
        console.log(src)
    }

    return (
        <loginContext.Provider value={{...state, ...usrState, ...reservState, ...Avion, ...Hora, ...Aeropuerto, ...Fecha, ...Clase, ...selectedSeat, ...srcInput, LogIn, LogOut, MakeReservation, undoReservation, updatePhoto}}>
            {children}
        </loginContext.Provider>
    )
}

export default Provider;