
//Este es el reducer para el inicio de sesion

const reducer = (state={}, action)=>{
    switch(action){
        case "login":
            return {state: true}
        case "logout":
            return {state:false}
        default:
            return state
    }
}

export default reducer;