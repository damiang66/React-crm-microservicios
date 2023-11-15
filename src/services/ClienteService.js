import axios from "axios";

const url = 'http://localhost:8090/api/clientes';
export const ClienteFIndAll = async ()=>{
    try {
        const respuesta = await axios.get(url)
        
        return respuesta;
    } catch (error) {
        return error;
    }
}
export const municipiosFindAll = async()=>{
    try {
       const respuesta = await axios.get(`${url}/municipio`)
       return respuesta;     

    } catch (error) {
        return error;
        
    }
}
export const EmprendedorSave= async(emprendedor)=>{
    try {
        const respuesta = await axios.post(`${url}/emprendedor`,emprendedor)
        return respuesta;

    } catch (error) {
        return error;
    }
}
export const EmpresarioSave= async(empresario)=>{
    try {
        const respuesta = await axios.post(`${url}/empresario`,empresario)
        return respuesta;

    } catch (error) {
        return error;
    }
}
