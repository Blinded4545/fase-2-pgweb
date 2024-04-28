
//Aqui se encuentran los reducers que son muy similares y no valen la pena de dejarlos en archivos individuales

export const srcInputReducer = (srcInput={}, action)=>{
    switch(action){
        case "update":
            return {srcInput: srcInput}
        case "undo":
            return {srcInput: ""}
        default:
            console.log(srcInput);
            return srcInput
    }
}

export const AvionReducer = (Avion={}, action)=>{
    switch(action){
        case "makeReserve":
            return {Avion: Avion}
        case "undoReserve":
            return {Avion: ""}
        default:
            return Avion
    }
}

export const HoraReducer = (Hora={}, action)=>{
    switch(action){
        case "makeReserve":
            return {Hora: Hora}
        case "undoReserve":
            return {Hora: ""}
        default:
            return Hora
    }
}

export const AeropuertoReducer = (Aeropuerto={}, action)=>{
    switch(action){
        case "makeReserve":
            return {Aeropuerto: Aeropuerto}
        case "undoReserve":
            return {Aeropuerto: ""}
        default:
            return Aeropuerto
    }
}

export const ClaseReducer = (Clase={}, action)=>{
    switch(action){
        case "makeReserve":
            return {Clase: Clase}
        case "undoReserve":
            return {Clase: ""}
        default:
            return Clase
    }
}

export const FechaReducer = (Fecha={}, action)=>{
    switch(action){
        case "makeReserve":
            return {Fecha: Fecha}
        case "undoReserve":
            return {Fecha: ""}
        default:
            return Fecha
    }
}

export const selectedSeatReducer = (selectedSeat={}, action)=>{
    switch(action){
        case "makeReserve":
            return {selectedSeat: selectedSeat}
        case "undoReserve":
            return {selectedSeat: ""}
        default:
            return selectedSeat
    }
}
