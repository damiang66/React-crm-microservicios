
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../../contexts/UserContext';
let procesoGuardado = {
    cliente: {

    },
    procesoEmprendedor: {
        autoEvaluacion: {
            evaluacion: []
        }
    }
}
export const Autoevaluacion = () => {
    const { getClientes, clientes, procesoSave } = useContext(UserContext);
    


    const { idCliente } = useParams()

    useEffect(() => {
        getClientes()

    }, [idCliente])



    const [proceso, setProceso] = useState([])
    const guardar = (event) => {
        console.log('guardar');
        event.preventDefault();

        const clienteSeleccionado = clientes.find(cliente => cliente.id === parseInt(idCliente));
        const nuevoProcesoGuardado = { ...procesoGuardado };
        nuevoProcesoGuardado.cliente = clienteSeleccionado
        nuevoProcesoGuardado.procesoEmprendedor.autoEvaluacion.evaluacion = proceso
        console.log(proceso);
        console.log(nuevoProcesoGuardado);
        procesoSave(nuevoProcesoGuardado)
        
    }


    const onInputChangeAutoEvaluacion = ({ target }) => {
        const { value } = target;

        setProceso(proceso => [...proceso, value]);
       
    };

    return ( 
        <div>
            <div className="row">

                <div className="col-10">
                    <h2 className="btn btn-disabled">Autoevaluación</h2>
                    <div>
                        <form>
                            <table className="table table-bordered" style={{ border: 'solid 1px' }}>
                                <thead>
                                    <tr>
                                        <th scope="col-3">Para cada afirmación, indique la opción que mejor lo identifique. Para una
                                            mejor evaluación, deberia contestar todas las preguntas</th>
                                        <th scope="col-1">SÍ</th>
                                        <th scope="col-1">NO</th>
                                        <th scope="col-1">QUIZÁS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[0]} name="evaluacion[0]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta1">Soy persistente, perseverante.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                id="pregunta1a" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                id="pregunta1b" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                id="pregunta1c" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[1]} name="evaluacion[1]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta2">Tengo capital o activos para invertir y estoy dispuesto a perder gran
                                                parte de mis ahorros.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                id="pregunta2a" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                id="pregunta2b" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                id="pregunta2c" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[2]} name="evaluacion[2]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta3">Estoy preparado, si fuese necesario, a bajar mis estandares de vida
                                                hasta que mi negocio sea rentable.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta3" id="pregunta3a" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta3" id="pregunta3b" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta3" id="pregunta3c" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[3]} name="evaluacion[3]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta4">Tengo ideas nuevas y diferentes.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta4" id="pregunta4" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta4" id="pregunta4" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta4" id="pregunta4" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[4]} name="evaluacion[4]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta5">Me adapto a los cambios.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta5" id="pregunta5" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta5" id="pregunta5" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta5" id="pregunta5" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[5]} name="evaluacion[5]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta6">Percibo problemas como desafíos y oportunidades.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta6" id="pregunta6" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta6" id="pregunta6" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta6" id="pregunta6" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[6]} name="evaluacion[6]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta7">Me recupero rápido de contratiempos personales.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta7" id="pregunta7" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta7" id="pregunta7" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta7" id="pregunta7" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[7]} name="evaluacion[7]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta8">Soy positivo/a y seguro/a de mí mismo/a.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta8" id="pregunta8" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta8" id="pregunta8" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta8" id="pregunta8" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[8]} name="evaluacion[8]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta9">Me gusta tener el control.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta9" id="pregunta9" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta9" id="pregunta9" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta9" id="pregunta9" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[9]} name="evaluacion[9]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta10">Disfruto la competencia.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta10" id="pregunta10" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta10" id="pregunta10" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta10" id="pregunta10" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[10]} name="evaluacion[10]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta11">He estado involucrado/a en un negocio parecido al que quiero
                                                empezar.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta11" id="pregunta11" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta11" id="pregunta11" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta11" id="pregunta11" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[11]} name="evaluacion[11]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta12">Tengo amigos o familiares que me pueden ayudar a empezar.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta12" id="pregunta12" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta12" id="pregunta12" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta12" id="pregunta12" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[12]} name="evaluacion[12]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta13">Mi familia y esposa/o apoyan mi decisión y están preparados a
                                                soportar el stress que tendré como consecuencia de mi empresa.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta13" id="pregunta13" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta13" id="pregunta13" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta13" id="pregunta13" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[13]} name="evaluacion[13]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta14">Tengo la resistencia física y la fortaleza emocional para manejar el
                                                estrés del trabajo, las horas extras, y el trabajo durante los fines de semana y
                                                feriados.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta14" id="pregunta14" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta14" id="pregunta14" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta14" id="pregunta14" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[14]} name="evaluacion[14]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta15">Soy organizado y me gusta planear con antelación.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta15" id="pregunta15" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta15" id="pregunta15" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta15" id="pregunta15" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[15]} name="evaluacion[15]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta16">Me llevo bien con toda clase de gente, desde banqueros hasta
                                                empleados.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta16" id="pregunta16" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta16" id="pregunta16" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta16" id="pregunta16" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[16]} name="evaluacion[16]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta17">Tengo buen juicio y seré capaz de emplear a la gente indicada para
                                                mi negocio.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta17" id="pregunta17" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta17" id="pregunta17" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta17" id="pregunta17" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[17]} name="evaluacion[17]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta18">Puedo manejar y supervisar empleados para obtener lo mejor de
                                                ellos.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta18" id="pregunta18" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta18" id="pregunta18" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta18" id="pregunta18" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[18]} name="evaluacion[18]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta19">Si descubro que no tengo las habilidades básicas o el capital
                                                necesario para iniciar mi negocio, estoy dispuesto/a retrasar mis planes hasta que lo
                                                adquiera.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta19" id="pregunta19" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta19" id="pregunta19" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta19" id="pregunta19" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[19]} name="evaluacion[19]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta20">Puedo reconocer, admitir y aprender de mis errores.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta31" id="pregunta20" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta31" id="pregunta20" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta31" id="pregunta20" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[20]} name="evaluacion[20]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta20">Puedo convivir con gente que no me agrada.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta20" id="pregunta20" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta20" id="pregunta20" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta20" id="pregunta20" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[21]} name="evaluacion[21]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta22">Soy bueno/a tomando decisiones.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta22" id="pregunta22" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta22" id="pregunta22" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta22" id="pregunta22" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[22]} name="evaluacion[22]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta23">Tengo la habilidad de observar el contexto en el que estoy y darme
                                                cuenta de lo que quiere la gente.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta23" id="pregunta23a" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta23" id="pregunta23b" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta23" id="pregunta23c" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[23]} name="evaluacion[23]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta24">Soy buen vendedor/a y puedo vender mis ideas y servicios a otras
                                                personas.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta24" id="pregunta24a" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta24" id="pregunta24b" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta24" id="pregunta24c" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[24]} name="evaluacion[24]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta25">Siempre busco formas de hacer las cosas de una mejor manera.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta25" id="pregunta25" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta25" id="pregunta25" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta25" id="pregunta25" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[25]} name="evaluacion[25]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta26">Soy una persona que nunca se da por vencida.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta26" id="pregunta26" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta26" id="pregunta26" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta26" id="pregunta26" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[26]} name="evaluacion[26]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta27">Hago que las cosas sucedan, en vez de esperar a que sucedan.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta27" id="pregunta27" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta27" id="pregunta27" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta27" id="pregunta27" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[27]} name="evaluacion[27]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta28">Busco ayuda, retroalimentación y crítica constructiva para mejorar como
                                                persona.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta28" id="pregunta28" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta28" id="pregunta28" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta28" id="pregunta28" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[28]} name="evaluacion[28]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta29">Soy bueno/a para escuchar.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta29" id="pregunta29" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta29" id="pregunta29" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta29" id="pregunta29" />
                                        </td>
                                    </tr>
                                    <tr onChange={onInputChangeAutoEvaluacion} value={proceso?.procesoEmprendedor?.autoEvaluacion?.evaluacion[29]} name="evaluacion[29]">
                                        <td scope="col-3">
                                            <label htmlhtmlFor="pregunta30">Tengo un buen o muy buen historial de crédito.</label>
                                        </td>
                                        <td scope="col-1">
                                            <input value="SI" className="form-check-input" type="radio"
                                                name="pregunta30" id="pregunta30" />
                                        </td>
                                        <td scope="col-1">
                                            <input value="NO" className="form-check-input" type="radio"
                                                name="pregunta30" id="pregunta30" />
                                        </td>
                                        <td scope="col-1" style={{ border: 'solid 1px' }}>
                                            <input value="QUIZAS" className="form-check-input" type="radio"
                                                name="pregunta30" id="pregunta30" />
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                            <button onClick={guardar} className='btn btn-primary'>Guardar</button>
                        </form>
                    </div>


                </div >
            </div >
        </div>
    )
}

