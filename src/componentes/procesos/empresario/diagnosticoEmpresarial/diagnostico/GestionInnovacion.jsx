import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionInnovacion = () => {

    const [proceso, setProceso] = useState(Array.from({ length: 4 }, () => null))
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
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionInnovacion = proceso;
        nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[4] = listaTotales;
        nuevoProcesoGuardado.estadoDelProceso='gestionFinanciera'
        procesoSave(nuevoProcesoGuardado, 'gestionFinanciera')


    }


    const sumarTotales = (numeros, totales) => {
        console.log(numeros);
        const suma = numeros.reduce((total, val) => total + Number(val), 0);
        totales = suma;
        return totales;
    }



    const onInputChangeGestionInnovacion = ({ target }) => {
        const { name, value } = target;
        const index = parseInt(name.split('_')[1], 10);

        setProceso(proceso => {
            const updatedGestionInnovacion = [...proceso];
            updatedGestionInnovacion[index] = value;

            const newListaTotales = sumarTotales(updatedGestionInnovacion);
            setListaTotales(newListaTotales);

            return updatedGestionInnovacion;
        });
    }


    return (
        <div>
            <div className="col">
                <form action="">
                    <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }} colSpan="3">5.GESTIÓN DE INNOVACIÓN</th>
                                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '3%' }}>1</td>
                                <td style={{ width: '20%' }}><strong>Desarrollo</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha implementado prácticas/metodologías para la mejora del producto?


                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionInnovacion} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionInnovacion[0]} className="form-select form-select-sm" name="gestionInnovacion_0">
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
                                <td style={{ width: '20%' }}><strong>Sofisticación</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha implementado pruebas piloto, de laboratorio para mejorar el
                                        producto (diseño, nuevos materiales, nuevos servicios)?

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionInnovacion} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionInnovacion[1]} className="form-select form-select-sm" name="gestionInnovacion_1">
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
                                <td style={{ width: '20%' }}><strong>Desarrollo</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">¿La empresa ha hecho gestión para estandarizar su producto o servicio?
                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionInnovacion} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionInnovacion[2]} className="form-select form-select-sm" name="gestionInnovacion_2">
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
                                <td style={{ width: '20%' }}><strong>Innovación</strong></td>
                                <td style={{ width: '70%' }}>
                                    <label htmlFor="pregunta1">En la empresa se investiga y se obtiene información sobre nuevas tecnologías,
                                        respecto a procesos, mercados, procesos administrativos, nuevas tendencias del producto o servicio?.

                                    </label>
                                </td>
                                <td style={{ width: '3%' }} className="mantener">
                                    <select onChange={onInputChangeGestionInnovacion} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionInnovacion[3]} className="form-select form-select-sm" name="gestionInnovacion_3">
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