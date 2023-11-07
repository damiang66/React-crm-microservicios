import { useContext, useEffect } from "react";
import { ListaProceso } from "../../componentes/procesos/ListaProceso"
import { UserContext } from "../../contexts/UserContext";
import { ModalBuscarCliente } from "../../componentes/procesos/ModalBuscarCliente";
import { ClienteList } from "../../componentes/cliente/ClienteList";
import { ClienteModal } from "../../componentes/cliente/ClienteModal";

export const ClienteSavePage = ()=>{
    
    const {abrirModalCliente,cerrarModalCliente,visibleModalCliente}= useContext(UserContext);
    
    
    
    return (<>
    
     {!visibleModalCliente||<ClienteModal cerrarModalCliente={cerrarModalCliente}/>}
    <button onClick={abrirModalCliente} className="btn btn-primary">Agregar</button>
    <ClienteList/>
     
    </>)
    
}