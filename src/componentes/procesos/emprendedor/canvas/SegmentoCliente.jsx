import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { ProcesoFindById } from "../../../../services/ProcesoService";
import { useParams } from "react-router-dom";

export const SegmentoCliente = ()=>{
  /* private String demograficas;
    private String geografia;
    private String psicograficas;
    private String comportamiento;*/
    const [proceso,setProceso]= useState({})
    const [seleccion,setSeleccion]=useState({})
    const {idProceso}=useParams()
    const { getProcesos,procesos,procesoSave} = useContext(UserContext);
    const cambiar = ({target})=>{
     const {name,value}=target;
     setProceso({
         ...proceso,
         estadoDelProceso:"socioClave",
         procesoEmprendedor: {
           ...proceso.procesoEmprendedor,
  
           canvas: {
             ...proceso.procesoEmprendedor.canvas,
            segmentoCliente: {
               ...proceso.procesoEmprendedor.canvas.socioClave
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
  
   procesoSave(proceso,'socioClave')
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
    <h2>Segmento Cliente</h2>
    <form action="">
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Demograficas</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.segmentoCliente?.demograficas} name="demograficas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Geograficas</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.segmentoCliente?.geografia} name="geografia" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Psicograficas</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.segmentoCliente?.psicograficas} name="psicograficas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comportamiento</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.segmentoCliente?.comportamiento} name="comportamiento" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
              
            
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
}