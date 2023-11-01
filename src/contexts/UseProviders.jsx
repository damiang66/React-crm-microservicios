import { UseCliente } from "../hooks/UseCLiente";
import { UseUsuario } from "../hooks/UseUsuario"
import { UserContext } from "./UserContext";


export const UseProviders= ({children})=>{
    const {usuarios,getUsuarios,cargarUsuario}= UseUsuario();
    const {clientes,getClientes,emprendedorSave}= UseCliente()
    
return(<UserContext.Provider value={
    {
        //usuarios
        usuarios,getUsuarios,cargarUsuario,
        // clientes
        clientes,getClientes,emprendedorSave
}
}>
    {children}
    </UserContext.Provider>)
}