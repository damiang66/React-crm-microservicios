import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProcesoFindById } from "../../services/ProcesoService"

export const ProcesoDeCliente = ()=>{
    const {idProceso}=useParams()
    const [canvas,setCanvas]= useState(false)
    const [cliente,setCliente]= useState({})
   let proceso = {}
    useEffect(()=>{
     buscarProcesoPorId(idProceso)
    },[])
    const buscarProcesoPorId= async(idProceso)=>{
        const respuesta = await ProcesoFindById(idProceso)
      proceso = respuesta.data
        setCliente(proceso.cliente)
        console.log(proceso);
       if(proceso?.procesoEmprendedor?.canvas){
            console.log('entro al if de canvas');
            setCanvas(true)
        }
        

    }
    return(<>
    <h2>Proceso por Cliente</h2>
    <div className="alert alert-info" role="alert">
 Nombre:{ `-> ${cliente?.nombre}`}
</div>
<div className="alert alert-info" role="alert">
 Apellido:{ `-> ${cliente?.apellido}`}
</div>
{canvas?(
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      canvas
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  </div>
):''}
    
    </>)
}