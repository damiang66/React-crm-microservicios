import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionOperacional = () => {

  const [proceso, setProceso] = useState(Array.from({ length: 11 }, () => null))
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
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionOperacional = proceso;
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[2] = listaTotales;
    nuevoProcesoGuardado.estadoDelProceso='gestionCalidad'
    procesoSave(nuevoProcesoGuardado, 'gestionCalidad')


  }

  const sumarTotales = (numeros, totales) => {
    console.log(numeros);
    const suma = numeros.reduce((total, val) => total + Number(val), 0);
    totales = suma;
    return totales;
  }


  const onInputChangeGestionOperacional = ({ target }) => {
    const { name, value } = target;
    const index = parseInt(name.split('_')[1], 10);


    setProceso(proceso => {
      const updatedGestionOperacional = [...proceso];
      updatedGestionOperacional[index] = value;

      const newListaTotales = sumarTotales(updatedGestionOperacional);
      setListaTotales(newListaTotales);

      return updatedGestionOperacional;

    });
  }


  return (
    <div>
      <div className="col">
        <form action="">
          <table className="table table-bordered" style={{ border: 'solid 1px' }}>
            <thead>
              <tr>
                <th style={{ width: '3%' }} colSpan="3">3.GESTIÓN DE PRODUCTIVIDAD OPERACIONAL</th>
                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td style={{ width: '3%' }}>1</td>
                <td style={{ width: '20%' }}><strong>Procesos</strong></td>
                <td style={{ width: '70%' }}>

                  <label htmlFor="pregunta1">¿La empresa cuenta con un manuales de procesos (existen fichas
                    técnicas de todas las materias primas, productos terminados, maquinaria y equipo)?



                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[0]} className="form-select form-select-sm" name="gestionOperacional_0">
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
                <td style={{ width: '20%' }}><strong>Producción</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan de producción (objetivos,
                    estrategias, flujogramas o protocolos de procesos para los bienes y servicios
                    que
                    produce)?


                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select  onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[1]} className="form-select form-select-sm" name="gestionOperacional_1">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[2]} className="form-select form-select-sm" name="gestionOperacional_2">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[3]} className="form-select form-select-sm" name="gestionOperacional_3">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[4]} className="form-select form-select-sm" name="gestionOperacional_4">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[5]} className="form-select form-select-sm" name="gestionOperacional_5">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[6]} className="form-select form-select-sm" name="gestionOperacional_6">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[7]} className="form-select form-select-sm" name="gestionOperacional_7">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[8]} className="form-select form-select-sm" name="gestionOperacional_8">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[9]} className="form-select form-select-sm" name="gestionOperacional_9">

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
                <td style={{ width: '20%' }}><strong>Plan Estratégico</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan estratégico (Metas
                    corporativas,
                    Visión, Misión, Estrategia y Objetivos)?

                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">

                  <select onChange={onInputChangeGestionOperacional} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionOperacional[10]} className="form-select form-select-sm" name="gestionOperacional_10">

                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="3" style={{textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}>
                Puntaje Total
                </td>
                <td style={{textAlign: 'center', backgroundColor: 'rgb(240, 240, 118)' }}>{listaTotales}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={guardar} className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </div>

  )
}