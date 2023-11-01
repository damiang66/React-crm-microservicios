import { useReducer } from "react";
import { ClienteReducer } from "../reducer/CLienteReducer";
import { ClienteFIndAll, EmprendedorSave } from "../services/ClienteService";
import Swal from "sweetalert2";

export const UseCliente = ()=>{
    const [clientes,dispatch]= useReducer(ClienteReducer,[]);
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
    return {
clientes,getClientes,emprendedorSave
    }

}