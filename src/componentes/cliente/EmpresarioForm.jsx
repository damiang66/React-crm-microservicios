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
        
        empresarioSave(empresario);
    }

    return (<>
    <h2>Formulario Empresario</h2>

    <form onSubmit={guardarEmpresario} >
            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={onInputChange} value={empresario?.nombre} type="text" name="nombre" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={onInputChange} value={empresario?.apellido} name="apellido" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Cedula</label>
                <input onChange={onInputChange} value={empresario?.dni} name="dni" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mt-2">
                <select name="genero" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Genero</option>
                    <option value="MALE">MASCULINO</option>
                    <option value="FEMALE">FEMENINO</option>
                    <option value="LGBTQ">LGBTQ +</option>
                </select>
            </div>
            <div className="form-group mt-2">
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
            <div className="form-group mt-2">

                <select name="etnia" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione Etnia</option>
                    <option value="ROM">ROM</option>
                    <option value="INDIGENA">INDIGENA</option>
                    <option value="NINGUNA">NINGUNA</option>
                    <option value="OTRO">OTRO</option>
                </select>
            </div>
            <div className="form-group mt-2">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Victima</label>
                <select name="victima" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="form-group mt-2">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Desplazamiento</label>
                <select name="desplazamiento" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="form-group mt-2">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Discapacidad</label>
                <select name="discapacidad" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>


            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Telefono</label>
                <input onChange={onInputChange} value={empresario?.telefono} name="telefono" type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={onInputChange} value={empresario?.email} name="email" type="email" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Fecha de Nacimiento</label>
                <input onChange={onInputChange} value={empresario?.fechaNacimiento} name="fechaNacimiento" type="date" className="form-control" />
            </div>
            <div className="form-group mt-2">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">Municipio</label>
            <select  onChange={onInputChange} value={empresario?.municipio?.id}  name="municipio" className="form-select" aria-label="Default select example">
            <option value="">Seleccionar municipios</option>
            {municipio.map(m=>(
               
                   
                    <option key={m.id} value={m.id}>{m.nombre}</option>
                  
                  
               ))}
               </select>
               </div>
               <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Direccion</label>
                <input onChange={onInputChange} value={empresario?.direccion} name="direccion" type="text" className="form-control" />
            </div>

            <div className="form-group mt-2">
                <select name="exampleInputPassword1" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Forma de contratacion 1</option>
                    <option value="DIRECT">DIRECTA</option>
                    <option value="INNUENDO">INDIRECTA</option>
                    <option value="FIXED">FIJA</option>
                </select>
            </div>
            <div className="form-group mt-2">
                <select name="exampleInputPassword1" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Forma de contratacion 2</option>
                    <option value="DIRECT">DIRECTA</option>
                    <option value="INNUENDO">INDIRECTA</option>
                    <option value="FIXED">FIJA</option>
                </select>
            </div>
            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputPassword1" className="form-label">Nombre de empresa</label>
                <input onChange={onInputChange} value={empresario?.nombreEmpresa} name="nombreEmpresa" type="text" className="form-control" />
            </div>
            <div className="form-group mt-2">
                <select name="tipoEmpresa" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Tipo de empresa</option>
                    <option value="MICRO">MICRO</option>
                    <option value="PEQUENA">PEQUEÑA</option>
                    <option value="MEDIANA">MEDIANA</option>
                    <option value="GRANDE">GRANDE</option>
                </select>
            </div>
            <div className="form-group mt-2">
                <select name="regimenTributario" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Tipo de Régimen Tributario</option>
                    <option value="PERSONA_JURIDICA">PERSONA JURIDICA</option>
                    <option value="PERSONA_NATURAL">PERSONA NATURAL</option>
                    <option value="REGIMEN_ESPECIAL">REGIMEN ESPECIAL</option>
                </select>
            </div>
            <div className="form-group mt-2">
            <label htmlhtmlFor="exampleInputEmail1" className="form-label">¿Tiene registro Mercantil?</label>
                <select name="registroMercantil" onChange={onInputChange} className="form-select" aria-label="Default select example">
                    <option selected>Seleccione SI/NO</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                  
                </select>
            </div>
            <div className="form-group mt-2">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">Numero de registro mercantil</label>
                <input onChange={onInputChange} value={empresario?.numeroRegistroMercantil} name="numeroRegistroMercantil" type="text" className="form-control" />
            </div>
            <h2>FALTA CIU</h2>

            {id ? <button type="submit" className="btn btn-primary">Editar</button> : <button type="submit" className="btn btn-primary">Cargar</button>}


            <Link to={'/clientes'} className="btn btn-success m-2">Volver</Link>
        </form>
    </>)
}