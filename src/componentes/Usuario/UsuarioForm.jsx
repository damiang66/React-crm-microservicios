import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext";
const usuarioInicial ={

}
export const UsuarioForm = () => {
    const {id} = useParams()
    const navegate = useNavigate();
    const [usuario,setUsuario]= useState({})
    const {cargarUsuario,usuarios}= useContext(UserContext)
    useEffect(()=>{
        if(id){
            /*
            state.filter(cargo=>cargo.id !== action.payload)
            */
           const traerUsuario = usuarios.filter(u=>u.id==id) 
           console.log(traerUsuario);
           setUsuario(traerUsuario[0])
        }
    },[])
    const cargarUsuario1 = (event)=>{
        event.preventDefault();
   cargarUsuario(usuario)
   setUsuario(usuarioInicial)
   navegate('/usuarios')
    }
    const onInputChange = ({target})=>{
        const {name,value}= target;
       
        setUsuario({
            ...usuario,
            [name]:value
        })
    }
    let titulo = 'Formulario De Usuario'
    return (<>
        <h2>{titulo}</h2>
        <form onSubmit={cargarUsuario1}>
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={onInputChange} value={usuario?.nombre} type="text" name="nombre" className="form-control"  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={onInputChange} value={usuario?.apellido} name="apellido" type="text" className="form-control"  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">Cedula</label>
                <input onChange={onInputChange} value={usuario?.cedula} name="cedula" type="text" className="form-control"  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">Profesion</label>
                <input onChange={onInputChange} value={usuario?.profesion} name="profesion" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">Telefono</label>
                <input onChange={onInputChange} value={usuario?.telefono} name="telefono" type="text" className="form-control"  aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={onInputChange} value={usuario?.email} name="email" type="email" className="form-control"  aria-describedby="emailHelp" />
            </div>
            
            <div className="mb-3">
                <label htmlhtmlhtmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={onInputChange} value={usuario?.password} name="password" type="password" className="form-control" />
            </div>
            {id?<button type="submit" className="btn btn-primary">Editar</button>:<button type="submit" className="btn btn-primary">Cargar</button>}
            
            
            <Link  to={'/usuarios'} className="btn btn-success m-2">Volver</Link>
        </form>
    </>)
}