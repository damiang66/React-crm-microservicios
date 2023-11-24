import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";



export const GestionIntelectual = () => {

    const [proceso, setProceso] = useState(Array.from({ length: 6 }, () => null))
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
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionIntelectual = proceso;
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[9] = listaTotales;
        nuevoProcesoGuardado.estadoDelProceso = 'gestionTotales'
        procesoSave(nuevoProcesoGuardado, 'procesos')


    }


    const sumarTotales = (numeros, totales) => {
        console.log(numeros);
        const suma = numeros.reduce((total, val) => total + Number(val), 0);
        totales = suma;
        return totales;
    }



    const onInputChangeGestionIntelectual = ({ target }) => {
        const { name, value } = target;
        const index = parseInt(name.split('_')[1], 10);

        setProceso(proceso => {
            const updatedGestionIntelectual = [...proceso];
            updatedGestionIntelectual[index] = value;

            const newListaTotales = sumarTotales(updatedGestionIntelectual);
            setListaTotales(newListaTotales);

            return updatedGestionIntelectual;
        });
    }

    return (
        <div>
            <div className="col-8">
                <form action="">
                    <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }} colSpan="3">10. GESTIÓN DE LA PROPIEDAD INTELECTUAL E INDUSTRIAL</th>
                                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '3%' }}>1</td>
                                <td style={{ width: '20%' }}><strong>Derecho de Autor</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha hecho gestión de los derechos de autor?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionIntelectual} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionIntelectual[0]} className="form-select form-select-sm" name="gestionIntelectual_0">
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
                                <td style={{ width: '20%' }}><strong>Derecho Conexos</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha hecho gestión de los derechos conexos?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionIntelectual} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionIntelectual[1]} className="form-select form-select-sm" name="gestionIntelectual_1">
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
                                <td style={{ width: '20%' }}><strong>Propiedad Intelectual</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha hecho gestión de propiedad intelectual?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionIntelectual} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionIntelectual[2]} className="form-select form-select-sm" name="gestionIntelectual_2">
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
                                <td style={{ width: '20%' }}><strong>Patente</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con una patente?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionIntelectual} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionIntelectual[3]} className="form-select form-select-sm" name="gestionIntelectual_3">
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
                                <td style={{ width: '20%' }}><strong>Diseño Industrial</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con un diseño industrial?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionIntelectual} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionIntelectual[4]} className="form-select form-select-sm" name="gestionIntelectual_4">
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
                                <td style={{ width: '20%' }}><strong>Marca</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa cuenta con una marca?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionIntelectual} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionIntelectual[5]} className="form-select form-select-sm" name="gestionIntelectual_5">
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