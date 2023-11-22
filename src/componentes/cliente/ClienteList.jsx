import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const ClienteList = ()=>{
    const { clientes, getClientes } = useContext(UserContext);
    const navegate = useNavigate();
    useEffect(()=>{
        getClientes()
       
    },[])
    const abrir = ()=>{
        navegate('/eleccion/clientes')
    }
    return (<>
    
    <h2>Lista de Clientes</h2>
    
        <table className="table">
           
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Dni</th>
                    <th scope="col">Municicpio</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            
            <tbody>
            {clientes?.map((u) => (
                
                <tr key={u.id}> 
                    <td  scope="row">{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.dni}</td>
                    <td>{u.municipio?.nombre}</td>
                    <td>{u.tipo}</td>
                    <td>
                    <Link className="btn btn-success btn-sm" to={'/'}>Editar </Link>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </>)
}