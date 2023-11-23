
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../../../contexts/UserContext';
import Swal from "sweetalert2";

let procesoGuardado = {
    cliente: {

    },
    procesoEmpresario: {
        diagnosticoEmpresarial: {
            diagnostico:{
                conceptosGenerales:[
                    
                ]
            }
        }
    }
}



export const Conceptosgenerales = () => {

    const navegar = useNavigate()

    const { getClientes, clientes, procesoSave } = useContext(UserContext);


    const { idCliente } = useParams()

    useEffect(() => {
        getClientes()

    }, [idCliente])


    const [proceso, setProceso] = useState([])
    const guardar = (event) => {
        console.log('guardar');
        event.preventDefault();

        const clienteSeleccionado = clientes.find(cliente => cliente.id === parseInt(idCliente));
        const nuevoProcesoGuardado = { ...procesoGuardado };
        nuevoProcesoGuardado.cliente = clienteSeleccionado
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.conceptosGenerales = proceso
        console.log(proceso);
        console.log(nuevoProcesoGuardado);
        procesoSave(nuevoProcesoGuardado, 'gestionEstrategica')
        
        
          
    }


    const onInputChangeConceptosGenerales = ({ target }) => {
         const { name, value } = target;
    const [property, index] = name.split('_'); 

    setProceso(proceso => {
        const updatedConceptosGenerales = [...proceso];
        const concepto = updatedConceptosGenerales[index] || {};

       
        concepto[property] = value;

        updatedConceptosGenerales[index] = concepto;
        return updatedConceptosGenerales;
    });
       
    };


    return (<>

        <div className="col-10">
            <h2 className="btn btn-disabled">Diagnóstico Empresarial</h2>

            <div className="row">
                <div>
                    <form>
                        <table className="table table-bordered" style={{border: 'solid 1px'}}>
                            <thead>
                                <tr>
                                    <th style={{ width: '3%' }}>N°</th>
                                    <th style={{ width: '70%' }}>CONCEPTOS GENERALES DE LA EMPRESA</th>
                                    <th style={{ width: '3%' }}>CUMPLIMIENTO</th>
                                    <th style={{ width: '20%' }}>OBSERVACIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td style={{ width: '3%' }}>1</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿Cumple con los documentos y registros necesarios legalmente (comerciales, tributarios, uso del suelo, registro Invima, concepto sanitario, concepto bomberos, licencia ambiental)?
                                        </label>
                                    </td>
                                    <td name="diagnosticoEnum" style={{ width: '3%' }} className="diagnosticoEnum0">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_0" aria-label="Default select example" id="d0" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td name="observaciones" style={{ width: '20%' }}>
                                       <textarea className="form-control" id="oobservaciones_0" rows="1" name="observaciones_0" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>2</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿Cumple con todos los requisitos legales vigentes relacionados con el pago de la seguridad laboral del personal (seguridad social y pensiones administración de riesgos profesionales, fondos de cesantías)?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="diagnosticoEnum1">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_1" id="d1" aria-label="Default select example" onChange={onInputChangeConceptosGenerales}>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="observaciones_1" rows="1" name="observaciones_1" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>3</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Lleva libros de contabilidad, actas, de reformas, y de información legal? ¿se encuentran al día y debidamente registrados y archivados?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_2" id="d2" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_2" rows="1" name="observaciones_2" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>4</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Tiene definidas las responsabilidades y funciones de cada puesto de trabajo o cargos que desempeñan cada uno de los integrantes de la empresa?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_3" id="d3" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_3" rows="1" name="observaciones_3" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>5</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa cuenta con un reglamento interno de trabajo?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_4" id="d4" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_4" rows="1" name="observaciones_4" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>6</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Cuentan con manual de procesos?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_5" id="d5" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_5" rows="1" name="observaciones_5" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>7</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Se tienen establecidas claramente la misión, visión, valores corporativos y política de calidad de la empresa?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_6" id="d6" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_6" rows="1" name="observaciones_6" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>8</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Se tienen indicadores: financieros, comerciales, producción, calidad?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_7" id="d7" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_7" rows="1" name="observaciones_7" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>9</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Tiene claramente definido el producto y el cliente hacia el cual está dirigido?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_8" id="d8" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_8" rows="1" name="observaciones_8" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>10</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Ha analizado la competencia y el entorno en general (productos sustitutos, competidores potenciales, proveedores, clientes)?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_9" id="d9" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_9" rows="1" name="observaciones_9" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>11</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa cuenta con una imagen corporativa?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_10" id="d10" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_10" rows="1" name="observaciones_10" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>12</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa dispone de un portafolio de productos/servicios suficientemente?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_11" id="d11" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_11" rows="1" name="observaciones_11" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>13</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa cuenta con metas (comerciales - financieras), medibles y verificables en un plazo de tiempo definido, con asignación del responsable de su cumplimiento?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_12" id="d12" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_12" rows="1" name="observaciones_12" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>14</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa tiene definidas estrategias para comercializar sus servicios?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_13" id="d13" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_13" rows="1" name="observaciones_13" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>15</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa cuenta con instalaciones y está ubicada geográficamente permitiendo el fácil acceso a clientes y proveedores?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_14" id="d14" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_14" rows="1" name="observaciones_14" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>16</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Cuenta con herramientas y maquinaria necesaria para la fabricación de sus productos o prestación de servicios?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_15" id="d15" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                    <textarea className="form-control" id="observaciones_15" rows="1" name="observaciones_15" placeholder="" onChange={onInputChangeConceptosGenerales}></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>17</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Se cuenta con áreas organizadas para las fabricación de los productos o servicios, almacenamiento de materias primas, productos en proceso y productos terminados?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_16" id="d16" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o16" rows="1" name="observaciones_16" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>18</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Cuenta con la disponibilidad de mano de obra calificada para la fabricación de productos o prestación de servicios?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_17" id="d17" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o17" rows="1" name="observaciones_17" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>19</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿La empresa conoce y aplica las normas ambientales en el desarrollo de su actividad?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_18" id="d18" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o18" rows="1" name="observaciones_18" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>20</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La disponibilidad de materia prima está garantizada a mediano y largo plazo?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_19" id="d19" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o19" rows="1" name="observaciones_19" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>21</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿Posee un sistema de contabilidad y costos que ofrece información confiable y oportuna para la toma de decisiones?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_20" id="d20" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o20" rows="1" name="observaciones_20" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>22</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿La empresa realiza presupuestos?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_21" id="d21" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o21" rows="1" name="observaciones_21" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>23</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlhtmlFor="pregunta1">
                                            ¿Posee Cuenta de Ahorro o Cuenta Corriente?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="diagnosticoEnum_22" id="d22" aria-label="Default select example" onChange={onInputChangeConceptosGenerales} >
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o22" rows="1" name="observaciones_22" placeholder="" onChange={onInputChangeConceptosGenerales} ></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <button onClick={guardar} className='btn btn-primary'>Guardar</button>
                    </form>
                </div>
            </div>

        </div>


    </>)
}