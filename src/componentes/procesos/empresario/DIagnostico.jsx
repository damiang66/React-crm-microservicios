export const Diagnostico = () => {
    return (<>

        <div className="col-10">
            <h2 className="btn btn-disabled">Diagnóstico Empresarial</h2>

            <div className="row">
                <div>
                    <form>
                        <table className="table table-bordered" style={{border: 'solid 1px'}}>
                            <thead>
                                <tr>
                                    <th style={{ width: '3%' }}>N°</th>
                                    <th style={{ width: '70%' }}>CONCEPTOS GENERALES DE LA EMPRESA</th>
                                    <th style={{ width: '3%' }}>CUMPLIMIENTO</th>
                                    <th style={{ width: '20%' }}>OBSERVACIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '3%' }}>1</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿Cumple con los documentos y registros necesarios legalmente (comerciales, tributarios, uso del suelo, registro Invima, concepto sanitario, concepto bomberos, licencia ambiental)?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d0" aria-label="Default select example" id="d0">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o0" rows="1" name="observaciones1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>2</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿Cumple con todos los requisitos legales vigentes relacionados con el pago de la seguridad laboral del personal (seguridad social y pensiones administración de riesgos profesionales, fondos de cesantías)?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d1" id="d1" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o1" rows="1" name="o1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>3</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Lleva libros de contabilidad, actas, de reformas, y de información legal? ¿se encuentran al día y debidamente registrados y archivados?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d2" id="d2" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o2" rows="1" name="o2" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>4</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Tiene definidas las responsabilidades y funciones de cada puesto de trabajo o cargos que desempeñan cada uno de los integrantes de la empresa?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d3" id="d3" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o3" id="o3" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>5</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa cuenta con un reglamento interno de trabajo?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d4" id="d4" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o4" id="o4" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>6</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Cuentan con manual de procesos?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d5" id="d5" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o5" id="o5" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>7</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Se tienen establecidas claramente la misión, visión, valores corporativos y política de calidad de la empresa?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d6" id="d6" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o6" id="o6" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>8</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Se tienen indicadores: financieros, comerciales, producción, calidad?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d7" id="d7" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o7" id="o7" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>9</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Tiene claramente definido el producto y el cliente hacia el cual está dirigido?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d8" id="d8" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o8" id="o8" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>10</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Ha analizado la competencia y el entorno en general (productos sustitutos, competidores potenciales, proveedores, clientes)?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d9" id="d9" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o9" id="o9" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>11</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa cuenta con una imagen corporativa?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d10" id="d10" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o10" id="o10" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>12</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa dispone de un portafolio de productos/servicios suficientemente?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d11" id="d11" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o11" id="o11" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>13</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa cuenta con metas (comerciales - financieras), medibles y verificables en un plazo de tiempo definido, con asignación del responsable de su cumplimiento?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d12" id="d12" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" name="o12" id="o12" rows="1" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>14</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa tiene definidas estrategias para comercializar sus servicios?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d13" id="d13" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o13" rows="1" name="13" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>15</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa cuenta con instalaciones y está ubicada geográficamente permitiendo el fácil acceso a clientes y proveedores?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d14" id="d14" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o14" rows="1" name="o14" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>16</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Cuenta con herramientas y maquinaria necesaria para la fabricación de sus productos o prestación de servicios?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d15" id="d15" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o15" rows="1" name="o15" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>17</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Se cuenta con áreas organizadas para las fabricación de los productos o servicios, almacenamiento de materias primas, productos en proceso y productos terminados?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d16" id="d16" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o16" rows="1" name="o16" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>18</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Cuenta con la disponibilidad de mano de obra calificada para la fabricación de productos o prestación de servicios?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d17" id="d17" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o17" rows="1" name="o17" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>19</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿La empresa conoce y aplica las normas ambientales en el desarrollo de su actividad?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d18" id="d18" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o18" rows="1" name="o18" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>20</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La disponibilidad de materia prima está garantizada a mediano y largo plazo?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d19" id="d19" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o19" rows="1" name="o19" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>21</td>
                                    <td style={{ width: '70%' }}>
                                        <label>
                                            ¿Posee un sistema de contabilidad y costos que ofrece información confiable y oportuna para la toma de decisiones?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d20" id="d20" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o20" rows="1" name="o20" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>22</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿La empresa realiza presupuestos?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d21" id="d21" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o21" rows="1" name="o21" placeholder=""></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '3%' }}>23</td>
                                    <td style={{ width: '70%' }}>
                                        <label htmlFor="pregunta1">
                                            ¿Posee Cuenta de Ahorro o Cuenta Corriente?
                                        </label>
                                    </td>
                                    <td style={{ width: '3%' }} className="mantener">
                                        <select className="form-select form-select-sm" name="d22" id="d22" aria-label="Default select example">
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        <textarea className="form-control" id="o22" rows="1" name="o22" placeholder=""></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </form>
                </div>
            </div>

        </div>


    </>)
}