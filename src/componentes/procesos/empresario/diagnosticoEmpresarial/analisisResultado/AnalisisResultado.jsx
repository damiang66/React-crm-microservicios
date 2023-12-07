import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../../../../contexts/UserContext"
import { ProcesoFindById } from "../../../../../services/ProcesoService"

export const AnalisisResultado = () => {

    const [proceso,setProceso]= useState({})
    const {idProceso}=useParams()
    const { procesoSave} = useContext(UserContext);


    const onInputChangeAnalisisResultado = ({target})=>{
        const {name,value}=target;
        setProceso({
            ...proceso,
            estadoDelProceso:"analisisEconomica",
            procesoEmpresario: {
              ...proceso.procesoEmpresario,
    
              diagnosticoEmpresarial: {
                ...proceso.procesoEmpresario.diagnosticoEmpresarial,
                analisisResultados: {
                  ...proceso.procesoEmpresario.diagnosticoEmpresarial.analisisResultados
                  ,
                  
                  [name]: value
                }
              }
            }
          });
        }


        const guardar = (event)=>{
            event.preventDefault();
           console.log(proceso);
        
          procesoSave(proceso,'analisisEconomico')
           //Swal.fire('Exito', 'La actividad clave se cargo con exito', 'success')
        
           }

           useEffect(()=>{
          buscarProcesoPorId(idProceso)
            
         
           },[])

           const buscarProcesoPorId = async(idProceso)=>{
            const respuesta = await ProcesoFindById(idProceso)
            setProceso(respuesta.data)
           }

    return (
        <div className="row">
            <div className="col-10">
                <div className="row">
                    <div className="col">
                        <div className="content">
                            <div className="col" id="conta">
                                <h2 className="btn btn-disabled">Anális de Resultados</h2>

                                <div className="col">
                                    <div>
                                        <form action="">
                                            <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                                                <tbody>
                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>1. GESTIÓN ESTRATÉGICA COMERCIAL Y DE MARKETING</strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionEstrategica}
                                                                name="gestionEstrategica" id="1" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>2. GESTIÓN DE LA PRODUCTIVIDAD Y DEL TALENTO HUMANO
                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionProductividad}
                                                                name="gestionProductividad" id="2" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>3. GESTIÓN DE LA PRODUCTIVIDAD OPERACIONAL

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionOperacional}
                                                                name="gestionOperacional" id="3" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>4. GESTIÓN DE CALIDAD

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionCalidad}
                                                                name="gestionCalidad" id="4" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>5. GESTIÓN DE LA INNOVACIÓN

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionInnovacion}
                                                                name="gestionInnovacion" id="5" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>6. GESTIÓN FINANCIERA Y CONTABLE

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionFinanciera}
                                                                name="gestionFinanciera" id="6" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>7. GESTIÓN LOGÍSTICA

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionLogistica}
                                                                name="gestionLogistica" id="7" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>8. GESTIÓN DE TRANSFORMACIÓN DIGÍTAL

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionDigital}
                                                                name="gestionDigital" id="8" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>9. SOSTENIBILIDAD AMBIENTAL

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionAmbiental}
                                                                name="9" id="9" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th style={{ fontSize: '18px'}}>
                                                            <strong>10. GESTIÓN PROPIEDAD INTELECTUAL E INDUSTRIAL

                                                            </strong>
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <textarea
                                                                onChange={onInputChangeAnalisisResultado} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisResultados?.gestionIntelectual}
                                                                name="10" id="10" className="form-control" rows="4"></textarea>
                                                        </td>
                                                    </tr>
                                                </tbody >
                                            </table >
                                            <button onClick={guardar} className="btn btn-primary">Guardar</button>
                                        </form >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}