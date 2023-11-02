import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';

export const BucarCliente = () => {
    const {getClientes,clientes} = useContext(UserContext)
    const[nombre,setNombre]=useState("")
    const OnChangeFiltro = ({target})=>{
        const {name,value}=target;
       setNombre(value)
       

    }
    useEffect(() => {
      getClientes()
    }, [])
    let filtrar
    if(nombre){
         filtrar = clientes.filter((cliente) => {
            return cliente.nombre.includes(nombre); // Puedes ajustar la lógica de filtro según tus necesidades
          });
    
    }else{
        filtrar=clientes
    }
   
  return (
    <div>
         <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Buscar Cliente</label>
      <input onChange={OnChangeFiltro} value={nombre} type="text" name="nombre" className="form-control" placeholder="Buscar cliente"/>
    </div>
    
<table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo</th>
      <th scope="col">Agregar</th>
    </tr>
  </thead>
  <tbody>
    {filtrar?.map(c=>
     <tr key={c.id}>
       <td >{c.nombre}</td>  
     <td >{c.tipo}</td>
    
    
     <td>
        <button  className='btn btn-primary'>Agregar</button>
     </td>
   </tr>
        )}
   
   
  </tbody>
</table>

    </div>
  )
  }