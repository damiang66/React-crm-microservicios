import { BucarCliente } from "./BucarCliente"

export const ModalBuscarCliente = ({cerrarModal})=>{

    return (<>
   <div className='abrir-modal animacion fadeIn'>
      <div className='modal' style={ { display:"block"}} tabIndex="-1">
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>
               Publicar Anuncio
              </h5>
            </div>
            <div className='modal-body'>
              <BucarCliente/>
           <button onClick={cerrarModal} className="btn btn-danger">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>)
}