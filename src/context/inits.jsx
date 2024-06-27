
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

export const initSrcInput= ()=>{
    const srcA = Cookies.get("profilePhoto")
    if(srcA == null){
        return {srcInput: "https://placehold.co/400"}
    }
    return {srcInput: srcA}
}

export const initReserveDetails= ()=>{
    const details = Cookies.get("ReserveDetails")
    if(details == null){
        return {ReservDetails: ""}
    }
    return {ReserveDetails: details}
}

