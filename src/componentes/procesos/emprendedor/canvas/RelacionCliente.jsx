import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { ProcesoFindById } from "../../../../services/ProcesoService";
import { useParams } from "react-router-dom";

export const RelacionCliente = ()=>{
    
      /*
     private String captacion;
    private String fidelizacion;

    private String estimulacion;
    */
    const [proceso,setProceso]= useState({})
    const [seleccion,setSeleccion]=useState({})
    const {idProceso}=useParams()
    const { getProcesos,procesos,procesoSave} = useContext(UserContext);
    const cambiar = ({target})=>{
     const {name,value}=target;
     setProceso({
         ...proceso,
         estadoDelProceso:"segmentoCliente",
         procesoEmprendedor: {
           ...proceso.procesoEmprendedor,
  
           canvas: {
             ...proceso.procesoEmprendedor.canvas,
             relacionCliente: {
               ...proceso.procesoEmprendedor.canvas.relacionCliente
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
  
   procesoSave(proceso,'segmentoCliente')
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
    <h2>Relacion Cliente</h2>
    <form action="">
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Captacion</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.relacionCliente?.captacion} name="captacion" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Fidelizacion</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.relacionCliente?.fidelizacion} name="fidelizacion" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Estimulacion</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.relacionCliente?.estimulacion} name="estimulacion" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
           
              
            
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
    
}