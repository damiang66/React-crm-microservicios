import { useContext, useEffect, useState } from "react";
import { ProcesoFindById } from "../../../../services/ProcesoService";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";

export const PropuestaValor = ()=>{
    // private String proposicion;
    const [proceso,setProceso]= useState({})
    const [seleccion,setSeleccion]=useState({})
    const {idProceso}=useParams()
    const { getProcesos,procesos,procesoSave} = useContext(UserContext);
    const cambiar = ({target})=>{
     const {name,value}=target;
     setProceso({
         ...proceso,
         estadoDelProceso:"recursoClave",
         procesoEmprendedor: {
           ...proceso.procesoEmprendedor,
  
           canvas: {
             ...proceso.procesoEmprendedor.canvas,
             propuestaValor: {
               ...proceso.procesoEmprendedor.canvas.propuestaValor
               ,
               
               [name]: value
             }
           }
         }
       });
     }
    const guardar = (event)=>{
     event.preventDefault();
    console.log(proceso);
  
   procesoSave(proceso,'recursoClave')
    //Swal.fire('Exito', 'La actividad clave se cargo con exito', 'success')
  
    }
    useEffect(()=>{
   buscarProcesoPorId(idProceso)
     
  
    },[])
    const buscarProcesoPorId = async(idProceso)=>{
     const respuesta = await ProcesoFindById(idProceso)
     setProceso(respuesta.data)
    }
    return (<>
    <h2>Propuesta de Valor</h2>
    <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Proposicion</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.propuestaValor?.proposicion} name="proposicion" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
    </>)
}