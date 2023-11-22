import axios from "axios";


const url = 'http://localhost:8090/api/procesos';
export const ProcesosFindAll= async()=>{
    try {
        const respuesta = await axios.get(`${url}`)
        return respuesta;

    } catch (error) {
      return error;  
    }

 }
 export const ComprobarCliente = async(idCliente)=>{
  try {
    const respuesta = await axios.get(`${url}/cliente/comprobar/${idCliente}`)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
 }
 export const ProcesoSave = async(proceso)=>{
  try {
    console.log(proceso);
    const respuesta = await axios.post(`${url}`,proceso)
    console.log(respuesta);
    return respuesta;
  } catch (error) {
  console.log(error);  
  }

 }
 export const ProcesoUpdate = async(proceso)=>{
  let respuesta
  try {
    if(proceso?.procesoEmprendedor?.id){
      respuesta = await axios.put(`${url}/editar/procesoEmprendedor`,proceso)
    }else{
      respuesta = await axios.put(`${url}/editar/procesoEmpresario`,proceso)
    }
    
    return respuesta;
  } catch (error) {
    console.log(error);
  }

 }
