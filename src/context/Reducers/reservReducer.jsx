
const reservReducer = (reservState={}, action)=>{
    switch(action){
        case "MakeReservation":
            return {reservState: reservState}
        case "undo":
            return {reservState: ""}
        default:
            return reservState
    }
}

export default reservReducer;