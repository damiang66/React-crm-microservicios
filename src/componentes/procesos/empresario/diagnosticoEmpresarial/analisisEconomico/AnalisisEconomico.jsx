import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../../contexts/UserContext";
import { ProcesoFindById } from "../../../../../services/ProcesoService";

export const AnalisisEconomico = () => {

    const [proceso,setProceso]= useState({})
    const [ventasMes,setVentasMes]= useState({})
    const [aumentoVentas,setAumentoVentas]= useState({})
    const [empleosFormales,setEmpleosFormales]= useState({})
    const [empleosInformales,setEmpleosInformales]= useState({})
    const [empleosNuevos,setEmpleosNuevos]= useState({})
    const [empresaExportando,setEmpresaExportando]= useState({})
    const [ventasExportacion,setVentasExportacion]= useState({})
    const [diversificacionProductos,setDiversificacionProductos]= useState({})
    const [aperturaNuevosMercados,setAperturaNuevosMercados]= useState({})
    const [accesoOtrasFuentes,setAccesoOtrasFuentes]= useState({})

    const {idProceso}=useParams()
    const { procesoSave, procesos, getProcesos} = useContext(UserContext);

    /*  NO SE COMO GUARDAR ESTA GARCHA 
    
     private Indicador ventasMes;

    private Indicador aumentoVentas;

    private Indicador empleosFormales;

    private Indicador empleosInformales;

    private Indicador empleosNuevos;

    private Indicador empresaExportando;

    private Indicador ventasExportacion;

    private Indicador diversificacionProductos;

    private Indicador aperturaNuevosMercados;

    private Indicador accesoOtrasFuentes;
    */


        const guardar = (event)=>{
            event.preventDefault();
            console.log(ventasMes);
            const procesoSeleccionado = procesos.find(p => p.id === idProceso);
            const nuevoProcesoGuardado = { ...procesoSeleccionado };
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.ventasMes=ventasMes
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.aumentoVentas=aumentoVentas
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.empleosFormales=empleosFormales
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.empleosInformales=empleosInformales
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.empleosNuevos=empleosNuevos
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.empresaExportando=empresaExportando
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.ventasExportacion=ventasExportacion
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.diversificacionProductos=diversificacionProductos
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.aperturaNuevosMercados=aperturaNuevosMercados
            nuevoProcesoGuardado.procesoEmpresario.diagnosticoEmpresarial.analisisEconomico.accesoOtrasFuentes=accesoOtrasFuentes


            console.log(procesoSeleccionado);
            console.log(proceso);
            console.log(nuevoProcesoGuardado);
        
          procesoSave(nuevoProcesoGuardado,'planDeAccion')
           //Swal.fire('Exito', 'La actividad clave se cargo con exito', 'success')
        
           }

           useEffect(() => {
            getProcesos()
            console.log(procesos);
            console.log(idProceso);
        }, [idProceso])

           


    return (

        <div className="row">
            <div className="col-10">
                <h2 className="btn btn-disabled">Anális de Economico</h2>
                <div className="col-11">
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: VENTAS DEL MES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasMes({ ...ventasMes, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasMes?.mes1}
                                        name="mes1" id="a1" className="form-control"></textarea></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setVentasMes({ ...ventasMes, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasMes?.observaciones}
                                        name="observaciones" id="a6" className="form-control" rows="15"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasMes({ ...ventasMes, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasMes?.mes2}
                                        name="mes2" id="a2"
                                        className="form-control"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasMes({ ...ventasMes, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasMes?.mes3}
                                        name="mes3" id="a3"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasMes({ ...ventasMes, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasMes?.mes4}
                                        name="mes4" id="a4"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasMes({ ...ventasMes, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasMes?.mes5}
                                        name="mes5" id="a5"
                                        className="form-control"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: AUMENTO DE VENTAS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setAumentoVentas({ ...aumentoVentas, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aumentoVentas?.mes1}
                                        name="mes1" id="b1"
                                        className="form-control"></textarea></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setAumentoVentas({ ...aumentoVentas, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aumentoVentas?.observaciones}
                                        name="observaciones" id="b6"
                                        className="form-control" rows="15"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setAumentoVentas({ ...aumentoVentas, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aumentoVentas?.mes2}
                                        name="mes2" id="b2"
                                        className="form-control"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setAumentoVentas({ ...aumentoVentas, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aumentoVentas?.mes3}
                                        name="mes3" id="b3"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setAumentoVentas({ ...aumentoVentas, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aumentoVentas?.mes4}
                                        name="mes4" id="b4"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setAumentoVentas({ ...aumentoVentas, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aumentoVentas?.mes5}
                                        name="mes5" id="b5"
                                        className="form-control"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: EMPLEOS FORMALES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosFormales({ ...empleosFormales, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosFormales?.mes1}
                                        name="mes1" id="c1"
                                        className="form-control"></textarea></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setEmpleosFormales({ ...empleosFormales, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosFormales?.observaciones}
                                        name="observaciones" id="c6"
                                        className="form-control" rows="15"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosFormales({ ...empleosFormales, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosFormales?.mes2}
                                        name="mes2" id="c3"
                                        className="form-control"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosFormales({ ...empleosFormales, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosFormales?.mes3}
                                        name="mes3" id="c4"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosFormales({ ...empleosFormales, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosFormales?.mes4}
                                        name="mes4" id="c5"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosFormales({ ...empleosFormales, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosFormales?.mes5}
                                        name="mes5" id="c5"
                                        className="form-control"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: EMPLEOS INFORMALES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosInformales({ ...empleosInformales, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosInformales?.mes1}
                                        name="mes1" id="d1"
                                        className="form-control"></textarea></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setEmpleosInformales({ ...empleosInformales, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosInformales?.observaciones}
                                        name="observaciones" id="d6"
                                        className="form-control" rows="15"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosInformales({ ...empleosInformales, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosInformales?.mes2}
                                        name="mes2" id="d2"
                                        className="form-control"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosInformales({ ...empleosInformales, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosInformales?.mes3}
                                        name="mes3" id="d3"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosInformales({ ...empleosInformales, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosInformales?.mes4}
                                        name="mes4" id="d4"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosInformales({ ...empleosInformales, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosInformales?.mes5}
                                        name="mes5" id="d5"
                                        className="form-control"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: EMPLEOS NUEVOS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosNuevos({ ...empleosNuevos, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosNuevos?.mes1}
                                        name="mes1" id="e1"
                                        className="form-control"></textarea></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setEmpleosNuevos({ ...empleosNuevos, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosNuevos?.observaciones}
                                        name="observaciones" id="e6"
                                        className="form-control" rows="15"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosNuevos({ ...empleosNuevos, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosNuevos?.mes2}
                                        name="mes2" id="e2"
                                        className="form-control"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosNuevos({ ...empleosNuevos, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosNuevos?.mes3}
                                        name="mes3" id="e3"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosNuevos({ ...empleosNuevos, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosNuevos?.mes4}
                                        name="mes4" id="e4"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setEmpleosNuevos({ ...empleosNuevos, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empleosNuevos?.mes5}
                                        name="mes5" id="e5"
                                        className="form-control"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: EMPRESA EXPORTANDO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setEmpresaExportando({ ...empresaExportando, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empresaExportando?.mes1}
                                        name="mes1"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setEmpresaExportando({ ...empresaExportando, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empresaExportando?.observaciones}
                                        name="observaciones" id="f6"
                                        className="form-control" rows="10"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setEmpresaExportando({ ...empresaExportando, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empresaExportando?.mes2}
                                        name="mes2"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setEmpresaExportando({ ...empresaExportando, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empresaExportando?.mes3}
                                        name="mes3"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setEmpresaExportando({ ...empresaExportando, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empresaExportando?.mes4}
                                        name="mes4"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setEmpresaExportando({ ...empresaExportando, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.empresaExportando?.mes5}
                                        name="mes5"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: VENTAS POR EXPORTACIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasExportacion({ ...ventasExportacion, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasExportacion?.mes1}
                                        name="mes1" id="g1"
                                        className="form-control"></textarea></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setVentasExportacion({ ...ventasExportacion, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasExportacion?.observaciones}
                                        name="observaciones" id="g6"
                                        className="form-control" rows="15"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasExportacion({ ...ventasExportacion, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasExportacion?.mes2}
                                        name="mes2" id="g2"
                                        className="form-control"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasExportacion({ ...ventasExportacion, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasExportacion?.mes3}
                                        name="mes3" id="g3"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasExportacion({ ...ventasExportacion, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasExportacion?.mes4}
                                        name="mes4" id="g4"
                                        className="form-control"></textarea></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><textarea onChange={(e) => setVentasExportacion({ ...ventasExportacion, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.ventasExportacion?.mes5}
                                        name="mes5" id="g5"
                                        className="form-control"></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: DIVERSIFICACIÓN DE PRODUCTOS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setDiversificacionProductos({ ...diversificacionProductos, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.diversificacionProductos?.mes1}
                                        name="mes1"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setDiversificacionProductos({ ...diversificacionProductos, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.diversificacionProductos?.observaciones}
                                        name="observaciones" id="h6"
                                        className="form-control" rows="10"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setDiversificacionProductos({ ...diversificacionProductos, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.diversificacionProductos?.mes2}
                                        name="mes2"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setDiversificacionProductos({ ...diversificacionProductos, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.diversificacionProductos?.mes3}
                                        name="mes3"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setDiversificacionProductos({ ...diversificacionProductos, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.diversificacionProductos?.mes4}
                                        name="mes4"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setDiversificacionProductos({ ...diversificacionProductos, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.diversificacionProductos?.mes5}
                                        name="mes5"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: APERTURA DE NUEVOS MERCADOS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAperturaNuevosMercados({ ...aperturaNuevosMercados, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aperturaNuevosMercados?.mes1}
                                        name="mes1"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setAperturaNuevosMercados({ ...aperturaNuevosMercados, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aperturaNuevosMercados?.observaciones}
                                        name="observaciones" id="i6"
                                        className="form-control" rows="10"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAperturaNuevosMercados({ ...aperturaNuevosMercados, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aperturaNuevosMercados?.mes2}
                                        name="mes2"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}> <select className="form-select form-select-sm" onChange={(e) => setAperturaNuevosMercados({ ...aperturaNuevosMercados, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aperturaNuevosMercados?.mes3}
                                        name="mes3"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}> <select className="form-select form-select-sm" onChange={(e) => setAperturaNuevosMercados({ ...aperturaNuevosMercados, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aperturaNuevosMercados?.mes4}
                                        name="mes4"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}> <select className="form-select form-select-sm" onChange={(e) => setAperturaNuevosMercados({ ...aperturaNuevosMercados, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.aperturaNuevosMercados?.mes5}
                                        name="mes5"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                            <thead>
                                <tr>
                                    <th colSpan="3">INDICADOR: ACCESO A OTRAS FUENTES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 1</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAccesoOtrasFuentes({ ...accesoOtrasFuentes, mes1: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.accesoOtrasFuentes?.mes1}
                                        name="mes1"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                    <td rowSpan="5" className="mio"><div className="placeholder-text">Observaciones:</div><textarea onChange={(e) => setAccesoOtrasFuentes({ ...accesoOtrasFuentes, observaciones: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.accesoOtrasFuentes?.observaciones}
                                        name="observaciones" id="j6"
                                        className="form-control" rows="10"></textarea></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 2</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAccesoOtrasFuentes({ ...accesoOtrasFuentes, mes2: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.accesoOtrasFuentes?.mes2}
                                        name="mes2"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>

                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 3</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAccesoOtrasFuentes({ ...accesoOtrasFuentes, mes3: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.accesoOtrasFuentes?.mes3}
                                        name="mes3"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 4</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAccesoOtrasFuentes({ ...accesoOtrasFuentes, mes4: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.accesoOtrasFuentes?.mes4}
                                        name="mes4"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td style={{ width: '5%' }}>Mes 5</td>
                                    <td style={{ width: '60%' }}><select className="form-select form-select-sm" onChange={(e) => setAccesoOtrasFuentes({ ...accesoOtrasFuentes, mes5: e.target.value })} value={proceso?.procesoEmpresario?.diagnosticoEmpresarial?.analisisEconomico?.accesoOtrasFuentes?.mes5}
                                        name="mes5"
                                        aria-label="Default select example">
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select></td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={guardar} className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}