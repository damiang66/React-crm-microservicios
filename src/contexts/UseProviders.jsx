import { UseUsuario } from "../hooks/UseUsuario"
import { UserContext } from "./UserContext";


export const UseProviders= ({children})=>{
    const {usuarios,getUsuarios,cargarUsuario}= UseUsuario();
    
return(<UserContext.Provider value={
    {usuarios,getUsuarios,cargarUsuario}
}>
    {children}
    </UserContext.Provider>)
}