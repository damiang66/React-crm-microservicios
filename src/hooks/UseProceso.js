import { useReducer, useState } from "react";
import { ProcesoSave, procesoUpdate, procesosFindAll } from "../services/ProcesoService";
import { ProcesoReducer } from "../reducer/ProcesoReducer";

export const UseProceso = ()=>{
    const[procesos,dispatch]= useReducer(ProcesoReducer,[]);
    const[visibleBuscarCliente,setVisibleBuscarCliente]=useState(false);
    const abrirModal = ()=>{
        setVisibleBuscarCliente(true);
    }
    const cerrarModal = ()=>{
        setVisibleBuscarCliente(false)
    }
    const getProcesos = async()=>{
        try {
            const respuesta = await procesosFindAll();
            dispatch({
                type:"listaProceso",
                payload:respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const procesoSave = async(proceso)=>{
   
        console.log(proceso);
        try {
            
             const  response = await ProcesoSave(proceso);
            
            
        } catch (error) {
            console.log(error);
        }
    }
    return{
getProcesos,procesos,visibleBuscarCliente,abrirModal,cerrarModal,procesoSave
    }
}