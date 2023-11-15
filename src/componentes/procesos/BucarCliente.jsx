import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { comprobarCliente } from '../../services/ProcesoService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const BucarCliente = () => {
  const { getClientes, clientes } = useContext(UserContext);
  const [nombre, setNombre] = useState("");
  const navegar = useNavigate()
  

  const OnChangeFiltro = ({ target }) => {
    const { name, value } = target;
    setNombre(value)
  }
  const agregarProceso = async (idCliente) => {
    let clienteSeleccionado;
    try {
      const respuesta = await comprobarCliente(idCliente)
      if (respuesta.data) {
        Swal.fire('Error', 'El cliente ya contiene un proceso asignado', 'warning')
      } else {
        clienteSeleccionado = clientes.filter(c=>
          c.id===idCliente
        )
       clienteSeleccionado= clienteSeleccionado[0]
       if(clienteSeleccionado.tipo== 'emprendedor'){
        navegar(`/autoevaluacion`)
       }else{
        navegar((`/diagnostico`))
       }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getClientes()
  }, [])
  let filtrar
  if (nombre) {
    filtrar = clientes.filter((cliente) => {
      return cliente.nombre.includes(nombre); // Puedes ajustar la lógica de filtro según tus necesidades
    });

  } else {
    filtrar = clientes
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlhtmlFor="disabledTextInput" className="form-label">Buscar Cliente</label>
        <input onChange={OnChangeFiltro} value={nombre} type="text" name="nombre" className="form-control" placeholder="Buscar cliente" />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        <tbody>
          {filtrar?.map(c =>
            <tr key={c.id}>
              <td >{c.nombre}</td>
              <td >{c.tipo}</td>


              <td>
                <button onClick={() => agregarProceso(c.id)} className='btn btn-primary'>Agregar</button>
              </td>
            </tr>
          )}


        </tbody>
      </table>

    </div>
  )
}

