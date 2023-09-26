import axios from "axios";

const url = 'http://localhost:8090/api/usuarios';
export const findAllUsuarios = async()=>{
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        return error;
        
    }

}
export const UsuarioSave = async(usuario)=>{
    try {
       const respuesta = await axios.post(url,usuario) 
       return respuesta;
    } catch (error) {
        return error;
    }

}
export const UsuarioUpdate = async(usuario)=>{
    try {
        const respuesta = await axios.put(`${url}/${usuario.id}`,usuario); 
        return respuesta;
    } catch (error) {
        return error;
    }
}