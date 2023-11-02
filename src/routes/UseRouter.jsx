import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../componentes/NavBar"
import { UsuarioListar } from "../componentes/Usuario/UsuarioListar"
import { Main } from "../componentes/Main"
import { UsuarioForm } from "../componentes/Usuario/UsuarioForm"
import { ClienteList } from "../componentes/cliente/ClienteList"
import { CLienteEleccion } from "../componentes/cliente/ClienteEleccion"
import { EmprendedorForm } from "../componentes/cliente/EmprendedorForm"
import { EmpresarioForm } from "../componentes/cliente/EmpresarioForm"
import { ListaProceso } from "../componentes/procesos/ListaProceso"
import { ProcesosAllPage } from "../page/Procesos/ProcesosAllPage"

export const UseRouter = () => {
  return (<>
    <NavBar></NavBar>
    <Routes>
      // main
      <Route path="/*" element={<Navigate to={"/main"} />} />
      <Route path="main" element={<Main />} />
      // usuarios
      <Route path="usuarios" element={<UsuarioListar />} />
      <Route path="usuarios/form" element={<UsuarioForm />} />
      <Route path="usuarios/form/:id" element={<UsuarioForm />} />
      // clientes
      <Route path="clientes" element={<ClienteList />} />
      <Route path="eleccion/clientes" element={<CLienteEleccion />} />
      <Route path="emprendedor" element={<EmprendedorForm />} />
      <Route path="empresario" element={<EmpresarioForm />} />
      <Route path="empresario" element={<EmpresarioForm />} />
      //procesos
      <Route path="procesos" element={<ProcesosAllPage />} />

    </Routes>
  </>)
}