import { useReducer, useState } from "react";
import { UsuarioSave, UsuarioUpdate, findAllUsuarios } from "../services/UsuarioService"
import { UsuarioReducer } from "../reducer/UsuarioReducer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const UseUsuario = ()=>{

const navigate = useNavigate();
const [usuarios,dispatch]= useReducer(UsuarioReducer,[]);
const getUsuarios =async()=>{
    try {
        const response = await findAllUsuarios();
        console.log(response);
        dispatch({
            type:'listarUsuarios',
            payload:response.data
    
    })
        
        
    } catch (error) {
        return error;
    }

}
const cargarUsuario =async (usuario)=>{
    let response
    try {
        if(usuario.id){
          response = await UsuarioUpdate(usuario)  
        }else{
            response = await UsuarioSave(usuario);
        }
         
        dispatch({
            type:(usuario.id===0)?'addUsuario':'updateUsuario',
            payload: response.data
                })
    } catch (error) {
        
    }
}
const formularioNuevoUsuario=()=>{
    navigate("/usuarios/form");
}


return {
getUsuarios,usuarios,formularioNuevoUsuario,cargarUsuario 
}
}