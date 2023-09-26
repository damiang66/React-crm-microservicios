import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../componentes/NavBar"
import { UsuarioListar } from "../componentes/Usuario/UsuarioListar"
import { Main } from "../componentes/Main"
import { UsuarioForm } from "../componentes/Usuario/UsuarioForm"

export const UseRouter = ()=>{
    return (<>
    <NavBar></NavBar>
    <Routes>
    <Route path="main" element={<Main/>}/>
    <Route path="usuarios" element={<UsuarioListar/>}/ >
    <Route path="usuarios/form" element={<UsuarioForm/>}/ >
    <Route path="usuarios/form/:id" element={<UsuarioForm/>}/ >

  <Route path="/*" element={<Navigate to={"/main"}/>}/ >
    </Routes>
    </>)
}