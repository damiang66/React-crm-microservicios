import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"

export const ListaProceso = ()=>{
    const {procesos}= useContext(UserContext);
    return (<>
    
        <table className="table">
           
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                  
                </tr>
            </thead>
            <tbody>
            {procesos?.map((p) => (
                <tr key={p.id}> 
                    
                    <td  scope="row">{p.cliente.nombre}</td>
                    
                    <td>{p.cliente.tipo}</td>
                    
                
                    <td>
                        {/*<Link to={`/usuarios/form/${u.id}`} className="btn btn-success">Editar</Link> */}
                       
                    </td>
                    <td>
                        <button className="btn btn-danger">Eliminar</button>
                    </td>
                    </tr>
                ))}



                
            </tbody>
        </table>
   
    </>)
}