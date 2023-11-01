import { useState } from "react"
import { EmpresarioForm } from "./EmpresarioForm"
import { EmprendedorForm } from "./EmprendedorForm"

export const CLienteEleccion = ()=>{
    const[eleccion,setEleccion]=useState("")
    const[condicion,setCondicion]=useState(false)
    const empresario = ()=>{
        setCondicion(true)
        setEleccion('empresario')
    }
    const emprendedor = ()=>{
        setCondicion(true)
        setEleccion('emprendedor')
    }
    return (<>
    <h2>Elija que tipo de cliente desea crear</h2>
    <div>
        <button onClick={emprendedor} className="btn btn-danger btn-sm m-4">Emprendedor</button>
        <button onClick={empresario} className="btn btn-danger btn-sm m-4">Empresario</button>
    </div>
    {condicion?(
        eleccion=='empresario'?<EmpresarioForm/>:<EmprendedorForm/>
    ):''}
    
    </>)
}