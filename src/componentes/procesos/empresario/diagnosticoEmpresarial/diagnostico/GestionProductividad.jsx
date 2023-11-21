import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";



let procesoGuardado = {
    procesoEmpresario: {
        diagnosticoEmpresarial: {
            diagnostico: {
                conceptosGenerales: [],
                gestionEstrategica: [],
                gestionProductividad: [],
            }
        }
    }
}



export const GestionProductividad = () => {



    const [proceso, setProceso] = useState([])
    const { getProcesos, procesos, procesoSave } = useContext(UserContext);
    const { idProceso } = useParams()

    useEffect(() => {
        getProcesos()
        console.log(procesos);
        console.log(idProceso);
    }, [idProceso])



    const guardar = (event) => {
        console.log('guardar');
        event.preventDefault();

        const procesoSeleccionado = procesos.find(p => p.id === idProceso);
        const nuevoProcesoGuardado = { ...procesoSeleccionado };
        console.log(procesoSeleccionado);
        console.log(proceso);
        console.log(nuevoProcesoGuardado);
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionProductividad = proceso
        console.log(nuevoProcesoGuardado);
        procesoSave(nuevoProcesoGuardado, 'gestionOperacional')




    }


    const onInputChangeGestionProductividad = ({ target }) => {
        const { value } = target;

        setProceso(proceso => [...proceso, value]);
    }


    return (


        <div className="col">
            <form action="">
                <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '3%' }} colSpan="3">
                                2. GESTIÓN DE LA PRODUCTIVIDAD Y DEL TALENTO HUMANO
                            </th>
                            <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '3%' }}>1</td>
                            <td style={{ width: '20%' }}>
                                <strong>Plan Estratégico</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa cuenta con un plan estratégico (Metas corporativas, Visión, Misión, Estrategia y Objetivos)?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[0]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[0]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>2</td>
                            <td style={{ width: '20%' }}>
                                <strong>Estructura Organizacional</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa cuenta con una estructura organizacional (Organigrama, Manual de funciones y responsabilidades)?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[1]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[1]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>3</td>
                            <td style={{ width: '20%' }}>
                                <strong>Competencias</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa evalúa las competencias y habilidades periódicamente de sus trabajadores?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[2]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[2]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>4</td>
                            <td style={{ width: '20%' }}>
                                <strong>Cumplimiento de Normas</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿En la empresa se cumplen las normas Tributarias, Contables, Laborales y Comerciales?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[3]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[3]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>5</td>
                            <td style={{ width: '20%' }}>
                                <strong>Planeación</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa realiza grupos de trabajo para planear las estrategias del mes (comerciales, marketing)?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[4]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[4]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>6</td>
                            <td style={{ width: '20%' }}>
                                <strong>Manejo de Indicadores</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿En la empresa se manejan indicadores de Gestión y Productividad?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[5]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[5]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>7</td>
                            <td style={{ width: '20%' }}>
                                <strong>Proceso de Selección</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa cuenta con procesos de selección de nuevos empleados (pruebas psicológicas, psicotécnicas y de conocimiento)?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[6]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[6]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>8</td>
                            <td style={{ width: '20%' }}>
                                <strong>Procesos de Inducción y Capacitación</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa realiza procesos de inducción, reinducción y capacitación a los nuevos y antiguos empleados?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[7]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[7]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>9</td>
                            <td style={{ width: '20%' }}>
                                <strong>Seguridad y Salud en el Trabajo</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa cuenta con Seguridad y Salud en el Trabajo (equipo de trabajo, manuales, procedimientos)?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[8]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[8]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>10</td>
                            <td style={{ width: '20%' }}>
                                <strong>Incentivos</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa maneja incentivos y recompensas por productividad y ventas y cumplimientos de metas?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[9]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[9]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>11</td>
                            <td style={{ width: '20%' }}>
                                <strong>Comunicación</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿Cuentan con canales de comunicación ágiles, asertivos y oportunos los diferentes niveles de personal de la compañía (directivos, técnicos, administrativos, otros)?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[10]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[10]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>12</td>
                            <td style={{ width: '20%' }}>
                                <strong>Desempeño</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿Realizan evaluación de desempeño a todos los colaboradores de la empresa?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[11]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[11]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '3%' }}>13</td>
                            <td style={{ width: '20%' }}>
                                <strong>Organizacional</strong>
                            </td>
                            <td style={{ width: '70%' }}>
                                <label htmlFor="pregunta1">
                                    ¿La empresa hace medición del clima organizacional?
                                </label>
                            </td>
                            <td style={{ width: '3%' }} className="mantener">
                                <select className="form-select form-select-sm" name="gestionProductividad[12]" onChange={onInputChangeGestionProductividad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionProductividad[12]}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}>
                                Puntaje Total
                            </td>
                            <td style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={guardar} className='btn btn-primary'>Guardar</button>
            </form>

        </div>


    )


}