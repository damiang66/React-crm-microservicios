import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionLogistica = () => {

    const [proceso, setProceso] = useState([])
    const { getProcesos, procesos, procesoSave } = useContext(UserContext);
    const { idProceso } = useParams()


    useEffect(() => {
        getProcesos()
    }, [idProceso])


    const guardar = (event) => {
        event.preventDefault();

        const procesoSeleccionado = procesos.find(p => p.id === idProceso);
        const nuevoProcesoGuardado = { ...procesoSeleccionado };
        console.log(procesoSeleccionado);
        console.log(proceso);
        console.log(nuevoProcesoGuardado);
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionLogistica = proceso;
        procesoSave(nuevoProcesoGuardado, 'gestionDigital')


    }


    const onInputChangeGestionLogistica = ({ target }) => {
        const { value } = target;

        setProceso(proceso => [...proceso, value]);
    }

    return (
        <div>
            <div className="col">
                <form action="">
                    <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }} colSpan="3">7. GESTIÓN LOGÍSTICA</th>
                                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '3%' }}>1</td>
                                <td style={{ width: '20%' }}><strong>Inventarios</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿Cuentan con un sistema para la administración de inventarios, materia prima y
                                        producto terminado?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionLogistica} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionLogistica[0]} className="form-select form-select-sm" name="gestionLogistica[0]">
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
                                <td style={{ width: '20%' }}><strong>Distribución</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un responsable para la gestión de compras, transporte y
                                        distribución?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionLogistica} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionLogistica[1]} className="form-select form-select-sm" name="gestionLogistica[1]">
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
                                <td style={{ width: '20%' }}><strong>Proveedores</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un proceso de evaluación y desarrollo de proveedores?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionLogistica} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionLogistica[2]} className="form-select form-select-sm" name="gestionLogistica[2]">
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
                                <td style={{ width: '20%' }}><strong>Logística</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con una infraestructura idónea para optimizar los costos de
                                        logística ?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionLogistica} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionLogistica[3]} className="form-select form-select-sm" name="gestionLogistica[3]">
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
                                <td style={{ width: '20%' }}><strong>Proceso Logístico</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un proceso logístico?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionLogistica} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionLogistica[4]} className="form-select form-select-sm" name="gestionLogistica[4]">
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
                                <td style={{ width: '20%' }}><strong>Proveedores</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿En la empresa existen criterios definidos para selección y evaluación de
                                        proveedores?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionLogistica} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionLogistica[5]} className="form-select form-select-sm" name="gestionLogistica[5]">
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
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    )
}