import axios from "axios";

const url = 'http://localhost:8090/api/procesos';
export const procesosFindAll= async()=>{
    try {
        const respuesta = await axios.get(`${url}`)
        return respuesta;

    } catch (error) {
      return error;  
    }

 }
 export const comprobarCliente = async(idCliente)=>{
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
 export const procesoUpdate = async(proceso)=>{
  try {
    const respuesta = await axios.put(`${url}/editar/procesoEmprendedor`,proceso)
    return respuesta;
  } catch (error) {
    console.log(error);
  }

 }
