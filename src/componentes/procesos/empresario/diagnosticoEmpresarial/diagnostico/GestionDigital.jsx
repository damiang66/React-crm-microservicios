import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionDigital = () => {

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
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionDigital = proceso;
        procesoSave(nuevoProcesoGuardado, 'gestionAmbiental')


    }


    const onInputChangeGestionDigital = ({ target }) => {
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
                                <th style={{ width: '3%' }} colSpan="3">8. GESTIÓN DE TRANSFORMACIÓN DIGÍTAL</th>
                                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '3%' }}>1</td>
                                <td style={{ width: '20%' }}><strong>Digitalización</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con herramientas digitales y tecnológicas para mejorar la
                                        producción o prestación del servicio?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionDigital} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionDigital[0]} className="form-select form-select-sm" name="gestionDigital[0]">
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
                                <td style={{ width: '20%' }}><strong>Transformación</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha considerado redefinir su nuevo modelo de negocio?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionDigital} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionDigital[1]} className="form-select form-select-sm" name="gestionDigital[1]">
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
                                <td style={{ width: '20%' }}><strong>Digitalización</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa tiene acceso al marketing digital (redes sociales, página web,
                                        tiendas virtuales)?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionDigital} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionDigital[2]} className="form-select form-select-sm" name="gestionDigital[2]">
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
                                <td style={{ width: '20%' }}><strong>Almacenamiento de Datos</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa hace uso o tiene acceso a la tecnología de big data, nube?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionDigital} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionDigital[3]} className="form-select form-select-sm" name="gestionDigital[3]">
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
                                <td style={{ width: '20%' }}><strong>Protección de Datos</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un sistema de protección de datos?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionDigital} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionDigital[4]} className="form-select form-select-sm" name="gestionDigital[4]">
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
                                <td style={{ width: '20%' }}><strong>Mejora Productos</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha buscado expertos para la transformación tecnológica de sus
                                        productos y/o servicios?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                <select onChange={onInputChangeGestionDigital} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionDigital[5]} className="form-select form-select-sm" name="gestionDigital[5]">
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
                                    Puntaje Total :
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