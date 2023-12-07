import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { ProcesoFindById } from "../../../../services/ProcesoService";

export const FlujoDeIngreso = ()=>{
    /*
        private String capitalPropio;
    private String capitalPrestamo;
    private String canalesPago;
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
         estadoDelProceso:"propuestaValor",
         procesoEmprendedor: {
           ...proceso.procesoEmprendedor,
  
           canvas: {
             ...proceso.procesoEmprendedor.canvas,
             flujoDeIngreso: {
               ...proceso.procesoEmprendedor.canvas.flujoDeIngreso
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
  
   procesoSave(proceso,'propuestaValor')
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
      <h2>Flujo de Ingreso</h2>
      </div>
          <form action="">
              <div className="mb-3">
  
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Capital Propio</label>
                  <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.FlujoDeIngreso?.capitalPropio} name="capitalPropio" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Capital Prestamo</label>
                  <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.FlujoDeIngreso?.capitalPrestamo} name="capitalPrestamo" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Canales de Pago</label>
                  <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.FlujoDeIngreso?.canalesPago} name="canalesPago" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Otros</label>
                  <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.FlujoDeIngreso?.otros} name="otros" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
                
              
              <button onClick={guardar} className="btn btn-primary">Guardar</button>
          </form>
      </>)
      
  }