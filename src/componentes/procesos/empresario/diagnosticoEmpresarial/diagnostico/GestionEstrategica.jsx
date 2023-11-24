import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams } from "react-router-dom";



let procesoGuardado = {
  procesoEmpresario: {
    diagnosticoEmpresarial: {
      diagnostico: {
        conceptosGenerales: [],
        gestionEstrategica: [],
      }
    }
  }
}



export const GestionEstrategica = () => {


  const [proceso, setProceso] = useState(Array.from({ length: 18 }, () => null))
  const { getProcesos, procesos, procesoSave } = useContext(UserContext);
  const { idProceso } = useParams()
  const [listaTotales, setListaTotales] = useState(0)

  useEffect(() => {
    getProcesos()
    console.log(procesos);
    console.log(idProceso);
  }, [idProceso])



  const guardar = (event) => {
    event.preventDefault();
    const procesoSeleccionado = procesos.find(p => p.id === idProceso);
    const nuevoProcesoGuardado = { ...procesoSeleccionado };
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.gestionEstrategica = proceso;
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales = [];
    nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.diagnostico.totales[0] = listaTotales;
    nuevoProcesoGuardado.estadoDelProceso = 'gestionProductividad';
    procesoSave(nuevoProcesoGuardado, 'gestionProductividad');

  }


  const sumarTotales = (numeros, totales) => {
    console.log(numeros);
    const suma = numeros.reduce((total, val) => total + Number(val), 0);
    totales = suma;
    return totales;
  }



  const onInputChangeGestionEstrategica = ({ target }) => {
    const { name, value } = target;
    const index = parseInt(name.split('_')[1], 10);


    setProceso(proceso => {
      const updatedGestionEstrategica = [...proceso];
      updatedGestionEstrategica[index] = value;

      const newListaTotales = sumarTotales(updatedGestionEstrategica);
      setListaTotales(newListaTotales);

      return updatedGestionEstrategica;

    });
  }


  return (

    <div className="col-8">
      <div>
        <form action="">
          <table className="table table-bordered" style={{ border: 'solid 1px' }}>
            <thead>
              <tr>
                <th colSpan="3" style={{ width: '3%' }}>
                  1. GESTIÓN ESTRATÉGICA COMERCIAL Y DE MARKETING
                </th>
                <th style={{ width: '20%' }}>CALIFICACIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '3%' }}>1</td>
                <td style={{ width: '20%' }}><strong>Mercado Objetivo</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa tiene identificado el mercado objetivo?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_0"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[0]}
                  >
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
                <td style={{ width: '20%' }}><strong>Estrategia Comercial</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con metas comerciales medibles y verificables en un plazo de tiempo definido, con asignación del responsable de su cumplimiento?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_1"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[1]}
                  >
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
                <td style={{ width: '20%' }}><strong>Mezcla de Mercadeo</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa asigna recursos para el mercadeo de sus servicios? (promociones, material publicitario, otros).</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_2"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[2]}
                  >
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
                <td style={{ width: '20%' }}><strong>Mecanismos</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa evalúa periódicamente sus mecanismos de promoción y publicidad para medir su efectividad y/o continuidad?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_3"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[3]}
                  >
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
                <td style={{ width: '20%' }}><strong>Tendencias</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa investiga tendencias del sector y de su producto o servicio a nivel local, nacional e internacional?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_4"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[4]}
                  >
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
                <td style={{ width: '20%' }}><strong>Material de Mercadeo</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa dispone de catálogos, portafolio o flyers con las especificaciones técnicas de sus productos o servicios?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_5"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[5]}
                  >
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
                <td style={{ width: '20%' }}><strong>Tiempos de Entrega</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cumple con los requisitos de tiempo de entrega a sus clientes?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_6"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[6]}
                  >
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
                <td style={{ width: '20%' }}><strong>Prototipos</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa elabora pruebas piloto de cada producto antes de ser lanzado al mercado?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_7"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[7]}
                  >
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
                <td style={{ width: '20%' }}><strong>Generación de Ideas</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa promueve la creación de nuevos productos y servicios para su negocio entre sus colaboradores?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_8"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[8]}
                  >
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
                <td style={{ width: '20%' }}><strong>Competencias</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa investiga periódicamente a la competencia? (Precios, productos, servicio)</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_9"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[9]}
                  >
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
                <td style={{ width: '20%' }}><strong>Precio</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿Los precios de la empresa están determinados con base en el conocimiento de sus costos, de la demanda y de la competencia?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_10"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[10]}
                  >
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
                <td style={{ width: '20%' }}><strong>Estrategias por Canal</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa establece estrategias por cada canal de distribución?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_11"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[11]}
                  >
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
                <td style={{ width: '20%' }}><strong>Marca</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa tiene registrada su marca (marcas) e implementa estrategias para su posicionamiento?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_12"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[12]}
                  >
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
                <td style={{ width: '20%' }}><strong>Imagen Corporativa</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con imagen corporativa? (Manual de Imagen Corporativa)</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_13"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[13]}
                  >
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
                <td style={{ width: '20%' }}><strong>Fidelización</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con un plan de fidelización para los clientes?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_14"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[14]}
                  >
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
                <td style={{ width: '20%' }}><strong>Merchandising</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa cuenta con material de merchandising?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_15"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[15]}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ width: '3%' }}>17</td>
                <td style={{ width: '20%' }}><strong>Otros Productos</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa ofrece a sus clientes productos complementarios a su producto estrella?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_16"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[16]}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ width: '3%' }}>18</td>
                <td style={{ width: '20%' }}><strong>Internacionalización</strong></td>
                <td style={{ width: '70%' }}>
                  <label htmlFor="pregunta1">¿La empresa exporta o importa bienes o servicios?</label>
                </td>
                <td style={{ width: '3%' }} className="mantener">
                  <select
                    className="form-select form-select-sm"
                    name="gestionEstrategica_17"
                    aria-label="Default select example"
                    onChange={onInputChangeGestionEstrategica}
                    value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.diagnostico?.gestionEstrategica[17]}
                  >
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
          <button onClick={guardar} className='btn btn-primary'>Guardar</button>
        </form>



      </div >

    </div >
  )
}