
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

export const reserveDetailsReducer = (Reserve={}, action)=>{
    switch(action){
        case "makeReserve":
            console.log(Reserve);
            return {createReservation: Reserve}
        case "undoReserve":
            return {createReservation: ""}
        default:
            return Reserve
    }
}
