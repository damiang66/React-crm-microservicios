import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../componentes/NavBar"
import { UsuarioListar } from "../componentes/Usuario/UsuarioListar"
import { Main } from "../componentes/Main"
import { UsuarioForm } from "../componentes/Usuario/UsuarioForm"
import { CLienteEleccion } from "../componentes/cliente/ClienteEleccion"
import { EmprendedorForm } from "../componentes/cliente/EmprendedorForm"
import { EmpresarioForm } from "../componentes/cliente/EmpresarioForm"
import { ProcesosAllPage } from "../page/Procesos/ProcesosAllPage"
import { Autoevaluacion } from "../componentes/procesos/emprendedor/autoevaluacion/Autoevaluacion"
import { ClienteSavePage } from "../page/Cliente/ClienteSavePage"
import { Conceptosgenerales } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/ConceptosGenerales"
import { GestionEstrategica } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionEstrategica"

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
      <Route path="clientes" element={<ClienteSavePage />} />
      <Route path="eleccion/clientes" element={<CLienteEleccion />} />
      <Route path="emprendedor" element={<EmprendedorForm />} />
      <Route path="empresario" element={<EmpresarioForm />} />
      //procesos
      <Route path="procesos" element={<ProcesosAllPage />} />
      // emprendedor
      <Route path="autoevaluacion" element={<Autoevaluacion />} />
      <Route path="autoevaluacion/:idCliente" element={<Autoevaluacion />} />
      //emprendedor
      <Route path="conceptosgenerales" element={<Conceptosgenerales />} />
      <Route path="conceptosgenerales/:idCliente" element={<Conceptosgenerales />} />
      <Route path="gestionEstrategica/:idCliente" element={<GestionEstrategica />} />


    </Routes>
  </>)
}