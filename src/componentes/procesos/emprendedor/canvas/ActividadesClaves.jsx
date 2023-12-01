import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../../../contexts/UserContext"
import { ProcesoFindById, ProcesoSave } from "../../../../services/ProcesoService"
import Swal from "sweetalert2"

export const ActividadesClaves = () => {
    /* como esta en Java
    private String actividadPricipal; 
    private String comunicacionMarketing;
    private String postVenta;
    private String otros;

    */
   const [proceso,setProceso]= useState({})
   const [seleccion,setSeleccion]=useState({})
   const {idProceso}=useParams()
   const { getProcesos,procesos,procesoSave} = useContext(UserContext);
   const cambiar = ({target})=>{
    const {name,value}=target;
    setProceso({
        ...proceso,
        estadoDelProceso:"canales",
        procesoEmprendedor: {
          ...proceso.procesoEmprendedor,

          canvas: {
            ...proceso.procesoEmprendedor.canvas,
            actividadClave: {
              ...proceso.procesoEmprendedor.canvas.actividadClave
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

  procesoSave(proceso,'canales')
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
    <div className="container">
    <h2>Actividades Claves</h2>
    </div>
        <form action="">
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Actividad Principal</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.actividadPricipal} name="actividadPricipal" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comunicacion Marketing</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.comunicacionMarketing} name="comunicacionMarketing" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Venta</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.postVenta} name="postVenta" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Otros</label>

                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.otros} name="otros" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
}