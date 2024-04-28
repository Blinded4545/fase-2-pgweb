
import React from "react";
import { useReducer } from "react";
import loginContext from "./LoginContext";
import reducer from "./Reducers/Reducer";
import usrReducer from "./Reducers/usrReducer"
import reservReducer from "./Reducers/reservReducer";
import { AvionReducer, HoraReducer, AeropuertoReducer, FechaReducer, ClaseReducer, selectedSeatReducer, srcInputReducer } from "./Reducers/optionReducers";

const init=()=>{
    const login = localStorage.getItem("session")
    if(login==null){
        return {state: false}
    }
    return {state: login}
}

const initUsr = ()=>{
    const usr = localStorage.getItem("user")
    if(usr==null){
        return {usrState: ""}
    }
    return {usrState: usr}
}

const initReserv = ()=>{
    const reserv = localStorage.getItem("reservation");
    if(reserv == null){
        return {reservState: ""}
    }
    return {reservState: reserv}
}


const initAvion = ()=>{
    const Av = localStorage.getItem("Avion")
    if(Av == null){
        return {Avion: ""}
    }
    return {Avion: Av}
}
const initHora = ()=>{
    const hr = localStorage.getItem("Hora")
    if(hr == null){
        return {Hora: ""}
    }
    return {Hora: hr}
}
const initAeropuerto = ()=>{
    const Ae = localStorage.getItem("Aeropuerto")
    if(Ae == null){
        return {Aeropuerto: ""}
    }
    return {Aeropuerto: Ae}
}
const initFecha = ()=>{
    const Fe = localStorage.getItem("Fecha")
    if(Fe == null){
        return {Fecha: ""}
    }
    return {Fecha: Fe}
}
const initClase = ()=>{
    const Cl = localStorage.getItem("Clase")
    if(Cl == null){
        return {Clase: ""}
    }
    return {Clase: Cl}
}
const initSelectedSeat= ()=>{
    const sl = localStorage.getItem("selectedSeat")
    if(sl == null){
        return {selectedSeat: ""}
    }
    return {selectedSeat: sl}
}

const initSrcInput= ()=>{
    const srcA = localStorage.getItem("src")
    if(srcA == null){
        return {srcInput: "https://placehold.co/400"}
    }
    return {srcInput: srcA}
}

const Provider = ({children})=>{
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

    const LogIn = (usr)=>{
        localStorage.setItem("session", true)
        localStorage.setItem("user", usr)
        dispatchUsrState({type: "login"})
        dispatchState({type: "login"})
    }
    const LogOut = ()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("session")
        localStorage.removeItem("reservation")
        localStorage.removeItem("src")
        dispatchSrcInput({type: "undo"})
        dispatchUsrState({type: "logout"})
        dispatchState({type: "logout"})
        undoReservation()
    }

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

    const updatePhoto = (src)=>{
        localStorage.setItem("src", src)
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