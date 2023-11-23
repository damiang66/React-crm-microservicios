
import { useReducer, useState } from "react";
import { ClienteReducer } from "../reducer/CLienteReducer";
import { ClienteFIndAll, EmprendedorSave, clienteFindById } from "../services/ClienteService";
import Swal from "sweetalert2";
export const UseCliente = () => {
    const [clientes, dispatch] = useReducer(ClienteReducer, []);
    const [visibleModalCliente, setVisibleModalCliente] = useState(false)
    const [visibleModalEditar, setVisibleModalEditar] = useState(false)
    const [clienteSelectedEdit, setclienteSelectedEdit] = useState({})
    const getClientes = async () => {
        try {
            const response = await ClienteFIndAll();

            dispatch({
                type: 'listaCliente',
                payload: response.data

            })


        } catch (error) {
            return error;
        }

    }
    const emprendedorSave = async (emprendedor) => {
        console.log(emprendedor);
        try {
            const respuesta = await EmprendedorSave(emprendedor);
            dispatch({
                type: 'addCliente',
                payload: respuesta.data
            })
            Swal.fire('Exito', 'El emprendedor fue creado con exito', 'success');
        } catch (error) {
            console.log(error);
        }

    }
    const empresarioSave = async (empresario) => {
        console.log(empresario);
        try {
            const respuesta = await EmpresarioSave(empresario);
            dispatch({
                type: 'addCliente',
                payload: respuesta.data
            })
            console.log(respuesta.data);
            Swal.fire('Exito', 'El empresario fue creado con exito', 'success');
        } catch (error) {
            console.log(error);
        }

    }
    //Open & Close Modales
    const abrirModalCliente = () => {
        setVisibleModalCliente(true);
    }
    const cerrarModalCliente = () => {
        setVisibleModalCliente(false);
    }

    const openModalEditar = async (id) => {
        const response = await clienteFindById(id);
        setclienteSelectedEdit(response.data)
        setVisibleModalEditar(true);
    }
    const closeModalEditar = () => {
        setVisibleModalEditar(false);
    }
    return {
        clientes, getClientes,
        emprendedorSave, empresarioSave,
        abrirModalCliente, cerrarModalCliente,
        visibleModalCliente, openModalEditar,
        closeModalEditar, visibleModalEditar,
        clienteSelectedEdit
    }

}