import { useState } from "react"
import { EmprendedorForm } from "./EmprendedorForm"
import { EmpresarioForm } from "./EmpresarioForm"

export const ClienteModal = ({cerrarModalCliente})=>{

    const [cliente, setCliente] = useState('emprendedor')

    const tipoCliente = (tipo) => {
        setCliente(tipo)
    }

    return (<>
   <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={ { display:"block"}} tabIndex="-1">
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
               Creando Cliente
              </h5>
              <ul className="nav nav-tabs">
                    <li className={`nav-item ${cliente === 'emprendedor' ? 'active' : ''}`}>
                        <button
                            className="nav-link"
                            onClick={() => tipoCliente('emprendedor')}
                            type='button'
                        >
                            Emprendedor
                        </button>
                    </li>
                    <li className={`nav-item ${cliente === 'empresario' ? 'active' : ''}`}>
                        <button
                            className="nav-link"
                            onClick={() => tipoCliente('empresario')}
                            type='button'
                        >
                            Empresario
                        </button>
                    </li>
                </ul>
            </div>
            <div className='modal-body'>
            {cliente==='emprendedor' && (<EmprendedorForm></EmprendedorForm>)}
            {cliente==='empresario' && (<EmpresarioForm></EmpresarioForm>)}
           <button onClick={cerrarModalCliente} className="btn btn-danger">Cerrar</button>
            </div>

          </div>
        </div>
      </div>
    </div>


    </>)

}