import axios from "axios";


const url = 'http://localhost:8090/api/procesos';
export const ProcesoFindById= async(id)=>{
  try {
    const respuesta = await axios.get(`${url}/${id}`)
    return respuesta;
  } catch (error) {
  return error;
  }
}
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
   
    return respuesta;
  } catch (error) {
return error;
  }

 }
 export const ProcesoUpdate = async(proceso)=>{
  let respuesta
  try {
    if(proceso?.procesoEmprendedor){
      console.log('emprendedor');
      respuesta = await axios.put(`${url}/editar/procesoEmprendedor`,proceso)
    }else{
      console.log('empresario');
      respuesta = await axios.put(`${url}/editar/procesoEmpresario`,proceso)
    }
    
    return respuesta;
  } catch (error) {
    console.log(error);
  }

 }
