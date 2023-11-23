import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalEditarCliente } from './ModalEditarCliente';

export const ClienteList = () => {
    const { clientes, getClientes, openModalEditar, visibleModalEditar } = useContext(UserContext);
    useEffect(() => {
        getClientes()
    }, [])

    return (<>
          {!visibleModalEditar || <ModalEditarCliente></ModalEditarCliente>}
        <h2>Lista de Clientes</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Dni</th>
                    <th scope="col">Municicpio</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                {clientes?.map(u =>
                    <tr key={u.id}>

                        <td scope="row">{u.nombre}</td>
                        <td>{u.apellido}</td>
                        <td>{u.dni}</td>
                        <td>{u.municipio?.nombre}</td>
                        <td>{u.tipo}</td>
                
                            <td>
                                <button className="btn btn-sm btn-success" onClick={() => openModalEditar(u.id)}>Editar</button>
                            </td>
                        <td>
                            <button className="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>)
}