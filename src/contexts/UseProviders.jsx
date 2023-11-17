import { UseCliente } from "../hooks/UseCLiente";
import { UseProceso } from "../hooks/UseProceso";
import { UseUsuario } from "../hooks/UseUsuario"
import { UserContext } from "./UserContext";


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
    </UserContext.Provider>)
}