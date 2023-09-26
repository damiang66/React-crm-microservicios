import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

import { UseUsuario } from "../../hooks/UseUsuario";
import { Link } from "react-router-dom";



export const UsuarioListar = () => {
    const { usuarios, getUsuarios } = useContext(UserContext);
    const {formularioNuevoUsuario}= UseUsuario()
    const abrir=()=>{
        formularioNuevoUsuario()
    }
 
  
    useEffect(()=>{
        getUsuarios()
    },[])
   
    return (<>
    <h2>Lista de Usuarios</h2>
    <button onClick={abrir} className="btn btn-primary">Agregar</button>
        <table className="table">
            { console.log(usuarios)}
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">dni</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
            {usuarios?.map((u) => (
                <tr key={u.id}> 
                    
                    <td  scope="row">{u.id}</td>
                    
                    <td>{u.nombre}</td>
                    
                    <td>{u.apellido}</td>
                    
                    <td>{u.cedula}</td>
                    <td>
                        <Link to={`/usuarios/form/${u.id}`} className="btn btn-success">Editar</Link>
                    </td>
                    <td>
                        <button className="btn btn-danger">Eliminar</button>
                    </td>
                    </tr>
                ))}



                
            </tbody>
        </table>
    </>);
};

