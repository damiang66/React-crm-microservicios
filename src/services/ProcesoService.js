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
