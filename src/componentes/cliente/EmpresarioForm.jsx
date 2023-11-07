import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Link, useParams } from "react-router-dom"
import { municipiosFindAll } from "../../services/ClienteService"

export const EmpresarioForm = ()=>{

    const {empresarioSave}=useContext(UserContext);
    const {id}=useParams();
    const [empresario, setEmpresario]=useState({});
    const [municipio, setMunicipio]=useState([]);

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
        if(name == "municipio"){
            const municioSeleccionado = municipio.find(m => m.id === parseInt(value));
                setEmpresario({
                    ...empresario,
                    [name]: municioSeleccionado
                });
        }else{
            setEmpresario({
                ...empresario,
                [name]:value,
            })
        }


    }

    const guardarEmpresario = (event)=>{
        event.preventDefault();
        setEmpresario({...empresario,
            usuario:1,
            tipo:'empresario'
        })
        empresarioSave(empresario);
    }

    return (<>
    <h2>Formulario Empresario</h2>

    <form onSubmit={guardarEmpresario} >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={onInputChange} value={empresario?.nombre} type="text" name="nombre" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={onInputChange} value={empresario?.apellido} name="apellido" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Cedula</label>
                <input onChange={onInputChange} value={empresario?.dni} name="dni" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <select name="genero" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Genero</option>
                    <option value="MALE">Masculino</option>
                    <option value="FEMALE">Femenino</option>
                    <option value="LGBTQ">LGBTQ +</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="nivelEstudio" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Nivel de Estudio</option>
                    <option value="PRIMARIO">Primario</option>
                    <option value="TECNICO">Tecnico</option>
                    <option value="PROFESIONAL">Profesional</option>
                </select>
            </div>
            <div className="mb-3">

                <select name="etnia" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Etnia</option>
                    <option value="ROM">ROM</option>
                    <option value="INDIGENA">Indigena</option>
                    <option value="OTRO">Otro</option>
                </select>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Victima</label>
                <select name="victima" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Desplazamiento</label>
                <select name="desplazamiento" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Discapacidad</label>
                <select name="discapacidad" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>


            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Telefono</label>
                <input onChange={onInputChange} value={empresario?.telefono} name="telefono" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={onInputChange} value={empresario?.email} name="email" type="email" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Fecha de Nacimiento</label>
                <input onChange={onInputChange} value={empresario?.fechaNacimiento} name="fechaNacimiento" type="date" className="form-control" />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Municipio</label>
            <select  onChange={onInputChange} value={empresario?.municipio?.id}  name="municipio" className="form-select" aria-label="Default select example">
            <option value="">Seleccionar municipios</option>
            {municipio.map(m=>(
               
                   
                    <option key={m.id} value={m.id}>{m.nombre}</option>
                  
                  
               ))}
               </select>
               </div>
               <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Direccion</label>
                <input onChange={onInputChange} value={empresario?.direccion} name="direccion" type="text" className="form-control" />
            </div>

            {id ? <button type="submit" className="btn btn-primary">Editar</button> : <button type="submit" className="btn btn-primary">Cargar</button>}


            <Link to={'/clientes'} className="btn btn-success m-2">Volver</Link>
        </form>
    </>)
}