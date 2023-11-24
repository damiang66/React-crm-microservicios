import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";

export const GestionAmbiental = () => {

  const [proceso, setProceso] = useState(Array.from({ length: 9 }, () => null))
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
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionAmbiental = proceso;
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[8] = listaTotales;
    nuevoProcesoGuardado.estadoDelProceso = 'gestionIntelectual'
    procesoSave(nuevoProcesoGuardado, 'gestionIntelectual')


  }


  const sumarTotales = (numeros, totales) => {
    console.log(numeros);
    const suma = numeros.reduce((total, val) => total + Number(val), 0);
    totales = suma;
    return totales;
  }


  const onInputChangeGestionAmbiental = ({ target }) => {
    const { name, value } = target;
    const index = parseInt(name.split('_')[1], 10);

    setProceso(proceso => {
      const updatedGestionAmbiental = [...proceso];
      updatedGestionAmbiental[index] = value;

      const newListaTotales = sumarTotales(updatedGestionAmbiental);
      setListaTotales(newListaTotales);

      return updatedGestionAmbiental;
    });
  }


  return (
    <div>
      <div className="col">
        <form action="">
          <table className="table table-bordered" style={{ border: 'solid 1px' }}>
            <thead>
              <tr>
                <th style={{ width: '3%' }} colSpan="3">9. GESTIÓN DE SOSTENIBILIDAD AMBIENTAL</th>
                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '3%' }}>1</td>
                <td style={{ width: '20%' }}><strong>Normatividad</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa conoce y aplica las normas ambientales en el desarrollo de su
                    actividad?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[0]} className="form-select form-select-sm" name="gestionAmbiental_0">
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
                <td style={{ width: '20%' }}><strong>Cumplimiento</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa establece los procedimientos y procesos para cumplir las normas
                    ambientales?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[1]} className="form-select form-select-sm" name="gestionAmbiental_1">
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
                <td style={{ width: '20%' }}><strong>Producción</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa trata de minimizar el consumo de energía, agua y materias primas
                    contaminantes mediante la mejora de sus procesos productivos, la sustitución de insumos y el uso de
                    otras tecnologías?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[2]} className="form-select form-select-sm" name="gestionAmbiental_2">
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
                <td style={{ width: '20%' }}><strong>Mentenimiento</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa realiza mantenimientos preventivos a sus automotores, maquinaria y
                    equipos para evitar el deterioro del ambiente?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[3]} className="form-select form-select-sm" name="gestionAmbiental_3">
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
                <td style={{ width: '20%' }}><strong>Prácticas</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa desarrolla prácticas de reciclaje en forma permanente y todos los
                    empleados están comprometidos con este propósito?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[4]} className="form-select form-select-sm" name="gestionAmbiental_4">
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
                <td style={{ width: '20%' }}><strong>Costos</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa tiene o ha proyectado disminuir los costos generados por
                    desperdicio de materia prima en alguna etapa del proceso productivo?.
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[5]} className="form-select form-select-sm" name="gestionAmbiental_5">
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
                <td style={{ width: '20%' }}><strong>Diseño</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿En el diseño de productos y empaques, la empresa procura minimizar el uso de
                    materiales e incluye criterios ecológicos al seleccionarlas.
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[6]} className="form-select form-select-sm" name="gestionAmbiental_6">
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
                <td style={{ width: '20%' }}><strong>Vida Útil</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿En la empresa se fomenta el aprovechamiento de los productos al final de su
                    vida útil (por ejemplo, mediante reutilización, procesamiento o reciclaje)?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[7]} className="form-select form-select-sm" name="gestionAmbiental_7">
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
                <td style={{ width: '20%' }}><strong>Producción Limpia</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La Empresa aplica conceptos de producción limpia?
                  </label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select onChange={onInputChangeGestionAmbiental} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionAmbiental[8]} className="form-select form-select-sm" name="ggestionAmbiental_8">
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
                  Puntaje Total :
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