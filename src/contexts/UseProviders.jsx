import { UseCliente } from "../hooks/UseCLiente";
import { UseProceso } from "../hooks/UseProceso";
import { UseUsuario } from "../hooks/UseUsuario"
import { UserContext } from "./UserContext";


<<<<<<< HEAD
export const UseProviders = ({ children }) => {
    const { usuarios, getUsuarios, cargarUsuario } = UseUsuario();
    const {//VARIABLES
        clientes,
        visibleModalClient,
        //FUNCIONES
        getClientes
        , emprendedorSave,
        handlerOpenModal,
        handlerCloseModal
    } = UseCliente()
    const { procesos, getProcesos, visibleBuscarCliente, abrirModal, cerrarModal } = UseProceso()

    return (<UserContext.Provider value={
        {
            //usuarios
            usuarios, getUsuarios, cargarUsuario,

            
            // clientes
            //VARIABLES
            clientes,
            visibleModalClient,
            //FUNCIONES
            getClientes
            , emprendedorSave,
            handlerOpenModal,
            handlerCloseModal,


            //procesos
            procesos, getProcesos, visibleBuscarCliente, abrirModal, cerrarModal
        }
    }>
        {children}
=======
export const UseProviders= ({children})=>{
    const {usuarios,getUsuarios,cargarUsuario}= UseUsuario();
    const {clientes,getClientes,emprendedorSave,empresarioSave,abrirModalCliente,cerrarModalCliente,visibleModalCliente}= UseCliente()
    const {procesos,getProcesos,visibleBuscarCliente,abrirModal,cerrarModal,procesoSave}=UseProceso()
    
return(<UserContext.Provider value={
    {
        //usuarios
        usuarios,getUsuarios,cargarUsuario,
        // clientes
        clientes,getClientes,emprendedorSave,empresarioSave,abrirModalCliente,cerrarModalCliente,visibleModalCliente,
        //procesos
        procesos,getProcesos,visibleBuscarCliente,abrirModal,cerrarModal,procesoSave
}
}>
    {children}
>>>>>>> aa199346c5f6587ef8bf35926ef3d06a65beef9d
    </UserContext.Provider>)
}