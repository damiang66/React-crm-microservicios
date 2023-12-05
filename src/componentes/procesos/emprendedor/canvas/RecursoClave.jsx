import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import { ProcesoFindById } from "../../../../services/ProcesoService";

export const RecursoClave = ()=>{
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
         estadoDelProceso:"relacionCliente",
         procesoEmprendedor: {
           ...proceso.procesoEmprendedor,
  
           canvas: {
             ...proceso.procesoEmprendedor.canvas,
             recursoClave: {
               ...proceso.procesoEmprendedor.canvas.recursoClave
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
  
   procesoSave(proceso,'relacionCliente')
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
    <h2>Recurso Clave</h2>
    <form action="">
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Recurso Humano</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.recursoClave?.humano} name="humano" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Recurso Fisico</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.recursoClave?.fisico} name="fisico" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Recurso Intelectuales</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.recursoClave?.intelectuales} name="intelectuales" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Recurso Tecnologicos</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.recursoClave?.tecnologicos} name="tecnologicos" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Otros</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.recursoClave?.otros} name="otros" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
}