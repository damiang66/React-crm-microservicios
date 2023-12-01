import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import { ProcesoFindById } from "../../../../services/ProcesoService";

export const Canales = ()=>{
    /*
      private String informacion;
  private String evaluacion;
  private String compra;
  private String entrega;
  private String postVenta;
  
    */
  const [proceso,setProceso]= useState({})
  const [seleccion,setSeleccion]=useState({})
  const {idProceso}=useParams()
  const { getProcesos,procesos,procesoSave} = useContext(UserContext);
  const cambiar = ({target})=>{
   const {name,value}=target;
   setProceso({
       ...proceso,
       estadoDelProceso:"estructuraCosto",
       procesoEmprendedor: {
         ...proceso.procesoEmprendedor,

         canvas: {
           ...proceso.procesoEmprendedor.canvas,
           canales: {
             ...proceso.procesoEmprendedor.canvas.canales
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

 procesoSave(proceso,'estructuraCosto')
  //Swal.fire('Exito', 'La actividad clave se cargo con exito', 'success')

  }
  useEffect(()=>{
 buscarProcesoPorId(idProceso)
   

  },[])
  const buscarProcesoPorId = async(idProceso)=>{
   const respuesta = await ProcesoFindById(idProceso)
   setProceso(respuesta.data)
  }
    return(<>
       <div className="container">
    <h2>Canales</h2>
    </div>
        <form action="">
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Informacion</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.canales?.informacion} name="informacion" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Evaluacion</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.canales?.evaluacion} name="evaluacion" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Compra</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.canales?.compra} name="compra" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Venta</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.canales?.postVenta} name="postVenta" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Entrega</label>

                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.canales?.entrega} name="entrega" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
    
}