import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../../../contexts/UserContext"

export const ActividadesClaves = () => {
    /* como esta en Java
    private String actividadPricipal;
    private String comunicacionMarketing;
    private String postVenta;
    private String otros;

    */
   const [proceso,setProceso]= useState({})
   const [seleccion,setSeleccion]=useState({})
   const {id}=useParams()
   const { getProcesos,procesos} = useContext(UserContext);
   const cambiar = ({target})=>{
    const {name,value}=target;
    setProceso({
        ...proceso,
        [name]:value
    })
   }
   const guardar = (event)=>{
    event.preventDefault();
    setSeleccion(procesos.filter(p=>{
        p.id===id
    }))
   console.log(seleccion);
   seleccion
   }
   useEffect(()=>{
    getProcesos()
    
 
   },[])
    return (<>
    <div className="container">
    <h2>Actividades Claves</h2>
    </div>
        <form action="">
            <div className="mb-3">
                <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">Actividad Principal</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.actividadPrincipal} name="actividadPrincipal" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">Comunicacion Marketing</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.comunicacionMarketing} name="comunicacionMarketing" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">Post Venta</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.postVenta} name="postVenta" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">Otros</label>
                <textarea onChange={cambiar} value={proceso?.procesoEmprendedor?.canvas?.actividadClave?.otros} name="otros" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
    </>)
}