import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionCalidad = () => {


    const [proceso, setProceso] = useState(Array.from({ length: 10 }, () => null))
    const { getProcesos, procesos, procesoSave } = useContext(UserContext);
    const { idProceso } = useParams()
    const [listaTotales, setListaTotales] = useState(0)


    useEffect(() => {
        getProcesos()
    }, [idProceso])


    const guardar = (event) => {
        event.preventDefault();

        const procesoSeleccionado = procesos.find(p => p.id === idProceso);
        const nuevoProcesoGuardado = { ...procesoSeleccionado };
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionCalidad = proceso;
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[3] = listaTotales;
        nuevoProcesoGuardado.estadoDelProceso = 'gestionInnovacion'
        procesoSave(nuevoProcesoGuardado, 'gestionInnovacion')


    }


    const sumarTotales = (numeros, totales) => {
        console.log(numeros);
        const suma = numeros.reduce((total, val) => total + Number(val), 0);
        totales = suma;
        return totales;
    }


    const onInputChangeGestionCalidad = ({ target }) => {
        const { name, value } = target;
        const index = parseInt(name.split('_')[1], 10);

        setProceso(proceso => {
            const updatedGestionCalidad = [...proceso];
            updatedGestionCalidad[index] = value;

            const newListaTotales = sumarTotales(updatedGestionCalidad);
            setListaTotales(newListaTotales);

            return updatedGestionCalidad;
        });
    }


    return (
        <div>
            <div className="col">
                <form action="">
                    <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }} colSpan="3">4.GESTIÓN DE CALIDAD</th>
                                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                            </tr>



                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '3%' }}>1</td>
                                <td style={{ width: '20%' }}><strong>Implementación</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un sistema de calidad definido?


                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[0]} className="form-select form-select-sm" name="gestionCalidad_0">
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
                                <td style={{ width: '20%' }}><strong>Automatización</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa tiene automatizados los procesos?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[1]} className="form-select form-select-sm" name="gestionCalidad_1">

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
                                <td style={{ width: '20%' }}><strong>Implementación</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con implementación de BPM (gestión de
                                        procesos de negocios) o similares?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[2]} className="form-select form-select-sm" name="gestionCalidad_2">
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
                                <td style={{ width: '20%' }}><strong>Documental</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa tiene documentados los procesos?


                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[3]} className="form-select form-select-sm" name="gestionCalidad_3">

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
                                <td style={{ width: '20%' }}><strong>Mapeo</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa tiene mapeo de los procesos?



                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[4]} className="form-select form-select-sm" name="gestionCalidad_4">
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
                                <td style={{ width: '20%' }}><strong>Optimización</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con optimización de procesos?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[5]} className="form-select form-select-sm" name="gestionCalidad_5">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr >
                            <tr>
                                <td style={{ width: '3%' }}>7</td>
                                <td style={{ width: '20%' }}><strong>Mejora</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un esquema para ejecutar acciones de
                                        mejoramiento (correctivas y preventivas, pruebas metrológicas e inspecciones)
                                        necesarias para garantizar la calidad del producto o servicio?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[6]} className="form-select form-select-sm" name="gestionCalidad_6">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr >
                            <tr>
                                <td style={{ width: '3%' }}>8</td>
                                <td style={{ width: '20%' }}><strong>Mediación</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa hace medición de la productividad?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[7]} className="form-select form-select-sm" name="gestionCalidad_7">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr >
                            <tr>
                                <td style={{ width: '3%' }}>9</td>
                                <td style={{ width: '20%' }}><strong>Satisfacción Cliente</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa mide con frecuencia la satisfacción de sus clientes para diseñar
                                        estrategias de mantenimiento y fidelización?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[8]} className="form-select form-select-sm" name="gestionCalidad_8">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr >
                            <tr>
                                <td style={{ width: '3%' }}>10</td>
                                <td style={{ width: '20%' }}><strong>CRM</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con herramientas para hacerle seguimiento a sus clientes?
                                        (gestión de relaciones con el cliente)
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionCalidad} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionCalidad[9]} className="form-select form-select-sm" name="gestionCalidad_9">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr >
                            <tr>

                                <td colSpan="3" style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}>
                                    Puntaje Total
                                </td>
                                <td style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}>{listaTotales}</td>
                            </tr>
                        </tbody >
                    </table >
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </form >
            </div >
        </div >
    )
}