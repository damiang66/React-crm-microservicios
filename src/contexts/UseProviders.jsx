import { UseCliente } from "../hooks/UseCLiente";
import { UseProceso } from "../hooks/UseProceso";
import { UseUsuario } from "../hooks/UseUsuario"
import { UserContext } from "./UserContext";


export const UseProviders = ({ children }) => {
    const {
        usuarios, getUsuarios, cargarUsuario
    } = UseUsuario();
    const {
        clientes, getClientes,
        emprendedorSave, empresarioSave,
        abrirModalCliente, cerrarModalCliente,
        visibleModalCliente, openModalEditar,
        closeModalEditar, visibleModalEditar,
        clienteSelectedEdit
    } = UseCliente()
    const {
        procesos, getProcesos,
        visibleBuscarCliente, abrirModal
        , cerrarModal, procesoSave
    } = UseProceso()

    return (<UserContext.Provider value={
        {
            //usuarios
            usuarios, getUsuarios
            ,cargarUsuario,

            // clientes
            clientes, getClientes,
            emprendedorSave, empresarioSave,
            abrirModalCliente, cerrarModalCliente,
            visibleModalCliente, openModalEditar,
            closeModalEditar, visibleModalEditar,
            clienteSelectedEdit,

            //procesos
            procesos, getProcesos, visibleBuscarCliente,
            abrirModal, cerrarModal, procesoSave
        }
    }>
        {children}
    </UserContext.Provider>)
}