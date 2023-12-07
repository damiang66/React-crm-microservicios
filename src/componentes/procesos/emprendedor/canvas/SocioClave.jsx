import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import { ProcesoFindById } from "../../../../services/ProcesoService";

export const SocioClave = ()=>{
    /*  private String proveedores;
    private String entidadesPublicas;
    private String entidadesPrivadas;
    private String academias;
    private String otros; */
    const [proceso,setProceso]= useState({})
    const [seleccion,setSeleccion]=useState({})
    const {idProceso}=useParams()
    const { getProcesos,procesos,procesoSave} = useContext(UserContext);
    const cambiar = ({target})=>{
     const {name,value}=target;
     setProceso({
         ...proceso,
         estadoDelProceso:"finCanvas",
         procesoEmprendedor: {
           ...proceso.procesoEmprendedor,
  
           canvas: {
             ...proceso.procesoEmprendedor.canvas,
             socioClave: {
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
  
   procesoSave(proceso,'finCanvas')
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
    <h2>Socio Clave</h2>
    <form action="">
            <div className="mb-3">

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Proveedores</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.socioClave?.demograficas} name="demograficas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Entidades Publicas</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.socioClave?.entidadesPublicas} name="entidadesPublicas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Entidades Privadas</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.socioClave?.entidadesPrivadas} name="entidadesPrivadas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Academicas</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.socioClave?.academicas} name="academicas" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Otros</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.socioClave?.otros} name="otros" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>  
            
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
}