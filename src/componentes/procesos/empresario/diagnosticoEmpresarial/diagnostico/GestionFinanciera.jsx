import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionFinanciera = () => {

    const [proceso, setProceso] = useState(Array.from({ length: 16 }, () => null))
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
        console.log(procesoSeleccionado);
        console.log(proceso);
        console.log(nuevoProcesoGuardado);
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionFinanciera = proceso;
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[5] = listaTotales;
        nuevoProcesoGuardado.estadoDelProceso = 'gestionLogistica'
        procesoSave(nuevoProcesoGuardado, 'gestionLogistica')


    }


    const sumarTotales = (numeros, totales) => {
        console.log(numeros);
        const suma = numeros.reduce((total, val) => total + Number(val), 0);
        totales = suma;
        return totales;
    }


    const onInputChangeGestionFinanciera = ({ target }) => {
        const { name, value } = target;
        const index = parseInt(name.split('_')[1], 10);

        setProceso(proceso => {
            const updatedGestionFinanciera = [...proceso];
            updatedGestionFinanciera[index] = value;

            const newListaTotales = sumarTotales(updatedGestionFinanciera);
            setListaTotales(newListaTotales);

            return updatedGestionFinanciera;
        });
    }


    return (
        <div>
            <div className="col">
                <form action="">
                    <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }} colSpan="3">6.GESTIÓN FINANCIERA Y CONTABLE</th>
                                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '3%' }}>1</td>
                                <td style={{ width: '20%' }}><strong>Normativa</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa conoce y aplica las normas contables vigentes?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[0]} className="form-select form-select-sm" name="gestionFinanciera_0">
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
                                <td style={{ width: '20%' }}><strong>Presupuestos</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa realiza presupuestos anuales de ingresos, egresos y flujo de caja.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[1]} className="form-select form-select-sm" name="gestionFinanciera_1">
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
                                <td style={{ width: '20%' }}><strong>Información Financiera</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La información financiera de la empresa es confiable, oportuna, útil y se usa
                                        para la toma de decisiones?.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[2]} className="form-select form-select-sm" name="gestionFinanciera_2">
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
                                <td style={{ width: '20%' }}><strong>Sistema Contable</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un sistema claro para establecer sus costos, dependiendo
                                        de los productos, servicios y procesos?.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[3]} className="form-select form-select-sm" name="gestionFinanciera_3">
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
                                <td style={{ width: '20%' }}><strong>Utilidades</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa conoce la productividad que le genera la inversión en activos y el
                                        impacto de estos en la generación de utilidades en el negocio.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[4]} className="form-select form-select-sm" name="gestionFinanciera_4">
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
                                    <label htmlFor="pregunta1">¿La empresa tiene una política definida para el pago a sus proveedores?.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[5]} className="form-select form-select-sm" name="gestionFinanciera_5">
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
                                <td style={{ width: '20%' }}><strong>Acreedores</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cumple con los compromisos adquiridos con sus acreedores de manera
                                        oportuna?.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[6]} className="form-select form-select-sm" name="gestionFinanciera_6">
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
                                <td style={{ width: '20%' }}><strong>Crecimiento</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa evalúa el crecimiento del negocio frente a las inversiones
                                        realizadas y conoce el retorno sobre su inversión?.
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[7]} className="form-select form-select-sm" name="gestionFinanciera_7">
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
                                <td style={{ width: '20%' }}><strong>Contabilidad</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa maneja contabilidad al día?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[8]} className="form-select form-select-sm" name="gestionFinanciera_8">
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
                                <td style={{ width: '20%' }}><strong>Punto de Equilibrio</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La Empresa conoce y aplica el concepto de punto de equilibrio?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[9]} className="form-select form-select-sm" name="gestionFinanciera_9">
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
                                <td style={{ width: '20%' }}><strong>Fuente de Financiamiento</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿Conocen otras fuentes de financiación diferentes a las entidades bancarias?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[10]} className="form-select form-select-sm" name="gestionFinanciera_10">
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
                                <td style={{ width: '20%' }}><strong>Informes Financieros</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La Empresa realiza informes periódicos del estado financiero?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[11]} className="form-select form-select-sm" name="gestionFinanciera_11">
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
                                <td style={{ width: '20%' }}><strong>Indicadores</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa conoce y aplica indicadores financieros? (Liquidez, Razón Cta.,
                                        Prueba ácida, etc.)
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[12]} className="form-select form-select-sm" name="gestionFinanciera_12">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '3%' }}>14</td>
                                <td style={{ width: '20%' }}><strong>Liquidez</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con políticas para los excesos de liquidez?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[13]} className="form-select form-select-sm" name="gestionFinanciera_13">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '3%' }}>15</td>
                                <td style={{ width: '20%' }}><strong>Conocimiento Sector</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La Empresa conoce indicadores de comportamiento del sector económico de su
                                        actividad empresarial?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[14]} className="form-select form-select-sm" name="gestionFinanciera_14">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '3%' }}>16</td>
                                <td style={{ width: '20%' }}><strong>Estratégia Financiera</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con metas financieras medibles y verificables en un plazo de
                                        tiempo definido, con asignación del responsable de su cumplimiento?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionFinanciera} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionFinanciera[15]} className="form-select form-select-sm" name="gestionFinanciera_15">
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
                                <td style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}>{listaTotales}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    )
}