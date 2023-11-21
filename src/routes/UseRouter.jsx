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
import { ActividadesClaves } from "../componentes/procesos/emprendedor/canvas/ActividadesClaves"
import { GestionProductividad } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionProductividad"
import { GestionOperacional } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestinOperacional"

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
        // canvas
     <Route path="actividadesClaves/:id" element={<ActividadesClaves />} />
     //empresario
     //diagnostico
      <Route path="conceptosGenerales" element={<Conceptosgenerales />} />
      <Route path="conceptosGenerales/:idCliente" element={<Conceptosgenerales />} />
      <Route path="gestionEstrategica/:idProceso" element={<GestionEstrategica />} />
      <Route path="gestionProductividad/:idProceso" element={<GestionProductividad />} />
      <Route path="gestionOperacional/:idProceso" element={<GestionOperacional />} />


    </Routes>
  </>)
}