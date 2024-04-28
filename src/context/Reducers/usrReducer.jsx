
//Este es el reducer para manejar el almacenamiento del nombre de usuario

const usrReducer = (usrState={}, action)=>{
    switch(action){
        case "login":
            return {usrState: usrState}
        case "logout":
            return {usrState: ""}
        default:
            return usrState
    }
}

export default usrReducer;