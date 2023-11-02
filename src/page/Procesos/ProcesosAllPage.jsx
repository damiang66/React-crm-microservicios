import { useContext, useEffect } from "react";
import { ListaProceso } from "../../componentes/procesos/ListaProceso"
import { UserContext } from "../../contexts/UserContext";
import { ModalBuscarCliente } from "../../componentes/procesos/ModalBuscarCliente";

export const ProcesosAllPage = ()=>{
    
    const {getProcesos,visibleBuscarCliente,abrirModal,cerrarModal}= useContext(UserContext);
    
    useEffect(()=>{
       getProcesos()
       
    },[])
    return (<>
     <h2>Lista de Proceso</h2>
     {!visibleBuscarCliente||<ModalBuscarCliente cerrarModal={cerrarModal}/>}
    <button onClick={abrirModal} className="btn btn-primary">Agregar</button>
    <ListaProceso  />
    </>)
}