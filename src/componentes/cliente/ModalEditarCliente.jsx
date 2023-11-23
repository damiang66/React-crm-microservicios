import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Link } from 'react-router-dom';

export const ModalEditarCliente = () => {
    const { closeModalEditar, clienteSelectedEdit, procesos, getProcesos } = useContext(UserContext);
const [proceso, setproceso] = useState({})
    useEffect(() => {
        getProcesos()
        const procesoCliente = procesos.find(proceso => proceso.idCliente === parseInt(clienteSelectedEdit.id));
         setproceso(procesoCliente)
    }, [clienteSelectedEdit])


    return (
        <div className='abrir-modal animacion fadeIn'>
            <div className='modal ' style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog modal-sm">
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' style={{ fontSize: "15px" }} >
                                Editar cliente {clienteSelectedEdit.apellido},{clienteSelectedEdit.nombre}
                            </h5>
                        </div>
                        <div className='modal-body'>
                            <ul>
                                <li><Link className='' to={`/`}>Ver</Link></li>
                                <li><Link className='' to={`/`}>Convertir a </Link></li>
                                <li><Link className='' to={`/`}>Seguir proceso</Link></li>
                                <li><Link className='' to={`/`}>Editar cliente</Link></li>
                                <li><Link className='' to={`/`}>{proceso?.id}</Link></li>
                            </ul>
                            <button className='btn btn-light btn-sm' onClick={closeModalEditar}>Cerrar </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
