
import Cookies from 'js-cookie';

//Aqui se encuentran todos los inits

export const init=()=>{
    const login = Cookies.get("Username")
    if(login==null){
        return {state: false}
    }
    return {state: login}
}

export const initUsr = ()=>{
    const usr = Cookies.get("Username")
    if(usr==null){
        return {usrState: ""}
    }
    return {usrState: usr}
}

export const initReserv = ()=>{
    const reserv = localStorage.getItem("reserv");
    if(reserv == null){
        return {reservState: ""}
    }
    return {reservState: reserv}
}


export const initAvion = ()=>{
    const Av = localStorage.getItem("Avion")
    if(Av == null){
        return {Avion: ""}
    }
    return {Avion: Av}
}

export const initHora = ()=>{
    const hr = localStorage.getItem("Hora")
    if(hr == null){
        return {Hora: ""}
    }
    return {Hora: hr}
}

export const initAeropuerto = ()=>{
    const Ae = localStorage.getItem("Aeropuerto")
    if(Ae == null){
        return {Aeropuerto: ""}
    }
    return {Aeropuerto: Ae}
}

export const initFecha = ()=>{
    const Fe = localStorage.getItem("Fecha")
    if(Fe == null){
        return {Fecha: ""}
    }
    return {Fecha: Fe}
}

export const initClase = ()=>{
    const Cl = localStorage.getItem("Clase")
    if(Cl == null){
        return {Clase: ""}
    }
    return {Clase: Cl}
}

export const initSelectedSeat= ()=>{
    const sl = localStorage.getItem("selectedSeat")
    if(sl == null){
        return {selectedSeat: ""}
    }
    return {selectedSeat: sl}
}

export const initSrcInput= ()=>{
    const srcA = Cookies.get("profilePhoto")
    if(srcA == null){
        return {srcInput: "https://placehold.co/400"}
    }
    return {srcInput: srcA}
}
