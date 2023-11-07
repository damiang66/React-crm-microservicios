import { useReducer, useState } from "react";
import { ClienteReducer } from "../reducer/CLienteReducer";
import { ClienteFIndAll, EmprendedorSave, EmpresarioSave } from "../services/ClienteService";
import Swal from "sweetalert2";

export const UseCliente = ()=>{
    const [clientes,dispatch]= useReducer(ClienteReducer,[]);
    const [visibleModalCliente, setVisibleModalCliente] = useState(false)
    const getClientes =async()=>{
        try {
            const response = await ClienteFIndAll();
           
            dispatch({
                type:'listaCliente',
                payload:response.data
        
        })
            
            
        } catch (error) {
            return error;
        }
    
    }
    const emprendedorSave= async(emprendedor)=>{
        try {
           const respuesta = await EmprendedorSave(emprendedor);
          dispatch({
            type:'addCliente',
            payload:respuesta.data
          })
          Swal.fire('Exito', 'El emprendedor fue creado con exito', 'success');
        } catch (error) {
            console.log(error);
        }

    }
    const empresarioSave= async(empresario)=>{
        console.log(empresario);
        try {
           const respuesta = await EmpresarioSave(empresario);
          dispatch({
            type:'addCliente',
            payload:respuesta.data
          })
          console.log(respuesta.data);
          Swal.fire('Exito', 'El empresario fue creado con exito', 'success');
        } catch (error) {
            console.log(error);
        }

    }

    const abrirModalCliente= ()=>{
        setVisibleModalCliente(true);
    }
    const cerrarModalCliente= ()=>{
        setVisibleModalCliente(false);
    }
    return {
clientes,getClientes,emprendedorSave,empresarioSave, abrirModalCliente, cerrarModalCliente, visibleModalCliente
    }

}