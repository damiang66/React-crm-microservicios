import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { municipiosFindAll } from "../../services/ClienteService"
import { UserContext } from "../../contexts/UserContext"

export const EmprendedorForm = () => {
    const {emprendedorSave}=useContext(UserContext);
    const { id } = useParams();
    //const [municipioSeleccionado,setMunicipioSeleccionado] =useState({})
    const navegate = useNavigate();
    const [emprendedor, setEmprendedor] = useState({})
    const [municipio, setMunicipio] = useState([])
    
    useEffect(() => {
        traerMunicipio();

    }, [])

    const traerMunicipio = async () => {
        const respuesta = await municipiosFindAll();
        console.log(respuesta);
        setMunicipio(respuesta.data)

    }

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log(name);
        console.log(value);
        if (name === "municipio") {
         const municipioSeleccionado = municipio.find(m => m.id === parseInt(value));
            setEmprendedor({
              ...emprendedor,
              [name]: municipioSeleccionado
            });
        }else{
        setEmprendedor({
            ... emprendedor,
            [name]:value,
         } )
        }
    }
   
    const guardarEmprendedor = (event)=>{
        event.preventDefault();
        
      emprendedorSave(emprendedor);
    }
    return (<>
        <h2>Formulario Emprendedor</h2>

        <form onSubmit={guardarEmprendedor} >
            <div className="mb-3">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={onInputChange} value={emprendedor?.nombre} type="text" name="nombre" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={onInputChange} value={emprendedor?.apellido} name="apellido" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Cedula</label>
                <input onChange={onInputChange} value={emprendedor?.dni} name="dni" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <select name="genero" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Genero</option>
                    <option value="MALE">MASCULINO</option>
                    <option value="FEMALE">FEMENINO</option>
                    <option value="LGBTQ">LGBTQ +</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="nivelEstudio" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Nivel de Estudio</option>
                    <option value="PRIMARIO">PRIMARIO</option>
                    <option value="TECNICO">TECNICO</option>
                    <option value="PROFESIONAL">PROFESIONAL</option>
                    <option value="TECNOLOGO">TECNOLOGO</option>
                    <option value="BACHILLER">BACHILLER</option>
                    <option value="PREGRADO">PREGRADO</option>
                    <option value="POSTGRADO">POSTGRADO</option>
                </select>
            </div>
            <div className="mb-3">

                <select name="etnia" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Etnia</option>
                    <option value="ROM">ROM</option>
                    <option value="INDIGENA">INDIGENA</option>
                    <option value="NINGUNA">NINGUNA</option>
                    <option value="OTRO">OTRO</option>
                </select>
            </div>
            <div className="mb-3">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Victima</label>
                <select name="victima" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="mb-3">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Desplazamiento</label>
                <select name="desplazamiento" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="mb-3">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Discapacidad</label>
                <select name="discapacidad" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>


            <div className="mb-3">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Telefono</label>
                <input onChange={onInputChange} value={emprendedor?.telefono} name="telefono" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={onInputChange} value={emprendedor?.email} name="email" type="email" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Fecha de Nacimiento</label>
                <input onChange={onInputChange} value={emprendedor?.fechaNacimiento} name="fechaNacimiento" type="date" className="form-control" />
            </div>
            <div className="mb-3">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Municipio</label>
            <select  onChange={onInputChange} value={emprendedor?.municipio?.id}  name="municipio" className="form-select" aria-label="Default select example">
            <option value="">Seleccionar municipios</option>
            {municipio.map(m=>(
               
                   
                    <option key={m.id} value={m.id}>{m.nombre}</option>
                  
                  
               ))}
               </select>
               </div>
               <div className="mb-3">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Direccion</label>
                <input onChange={onInputChange} value={emprendedor?.direccion} name="direccion" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Idea de negocio</label>
                <input onChange={onInputChange} value={emprendedor?.ideaNegocio} name="ideaNegocio" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Producto</label>
                <input onChange={onInputChange} value={emprendedor?.producto} name="producto" type="text" className="form-control" />
            </div>


            {id ? <button type="submit" className="btn btn-primary">Editar</button> : <button type="submit" className="btn btn-primary">Cargar</button>}


            <Link to={'/clientes'} className="btn btn-success m-2">Volver</Link>
        </form>
    </>)
}