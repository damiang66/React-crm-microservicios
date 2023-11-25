import { useReducer, useState } from "react";
import { ProcesoSave, ProcesoUpdate, ProcesosFindAll } from "../services/ProcesoService";
import { ProcesoReducer } from "../reducer/ProcesoReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const UseProceso = ()=>{
    const navegar = useNavigate()
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
            const respuesta = await ProcesosFindAll();
            dispatch({
                type:"listaProceso",
                payload:respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const procesoSave = async(proceso, urlProceso)=>{
        
        console.log(proceso);
        let response
        try {
        if(proceso.id){
            console.log('con id');
            response = await ProcesoUpdate(proceso)  
          }else{
            console.log('sin id');
              response = await ProcesoSave(proceso);
          }
           
          dispatch({
              type:(proceso.id===0)?'addProceso':'updateProceso',
              payload: response.data
                  })
            
                  Swal.fire({
                    title: "Desea continuar con el siguiente formulario?",
                    showDenyButton: true,
                    showCancelButton: true,
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Continuar",
                    denyButtonText: `Volver a la lista de procesos`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        navegar((`/${urlProceso}/${response.data.id}`))
                    } else if (result.isDenied) {
                        navegar((`/procesos`))
                    }
                  }); 

        } catch (error) {
            console.log(error);
        }
    }
    return{
getProcesos,procesos,visibleBuscarCliente,abrirModal,cerrarModal,procesoSave
    }
}