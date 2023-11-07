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
