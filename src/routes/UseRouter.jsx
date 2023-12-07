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
import { GestionOperacional } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionOperacional"
import { GestionCalidad } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionCalidad"
import { GestionInnovacion } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionInnovacion"
import { GestionFinanciera } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionFinanciera"
import { GestionLogistica } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionLogistica"
import { GestionDigital } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionDigital"
import { GestionAmbiental } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionAmbiental"
import { GestionIntelectual } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/GestionIntelectual"
import { Canales } from "../componentes/procesos/emprendedor/canvas/Canales"
import { EstructuraCosto } from "../componentes/procesos/emprendedor/canvas/EstructuraCosto"
import { PlanDeAccion } from "../componentes/procesos/empresario/planDeAccion/PlanDeAccion"
import { AnalisisResultado } from "../componentes/procesos/empresario/diagnosticoEmpresarial/analisisResultado/AnalisisResultado"
import { FlujoDeIngreso } from "../componentes/procesos/emprendedor/canvas/FlujoDeIngreso"
import { PropuestaValor } from "../componentes/procesos/emprendedor/canvas/PropuestaValor"
import { RecursoClave } from "../componentes/procesos/emprendedor/canvas/RecursoClave"
import { RelacionCliente } from "../componentes/procesos/emprendedor/canvas/RelacionCliente"
import { AnalisisEconomico } from "../componentes/procesos/empresario/diagnosticoEmpresarial/analisisEconomico/AnalisisEconomico"
import { Totales } from "../componentes/procesos/empresario/diagnosticoEmpresarial/diagnostico/Totales"

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
      <Route path="actividadesClaves/:idProceso" element={<ActividadesClaves />} />
      <Route path="canales/:idProceso" element={<Canales />} />
      <Route path="estructuraCosto/:idProceso" element={ <EstructuraCosto/>} />
      <Route path="flujoDeIngreso/:idProceso" element={ <FlujoDeIngreso />} />
      <Route path="propuestaValor/:idProceso" element={ <PropuestaValor />} />
      <Route path="recursoClave/:idProceso" element={ <RecursoClave />} />
      <Route path="relacionCliente/:idProceso" element={ <RelacionCliente />} />

     //empresario
     //diagnosticoEmpresarial
      //diagnostico
      <Route path="conceptosGenerales" element={<Conceptosgenerales />} />
      <Route path="conceptosGenerales/:idCliente" element={<Conceptosgenerales />} />
      <Route path="gestionEstrategica/:idProceso" element={<GestionEstrategica />} />
      <Route path="gestionProductividad/:idProceso" element={<GestionProductividad />} />
      <Route path="gestionOperacional/:idProceso" element={<GestionOperacional />} />
      <Route path="gestionCalidad/:idProceso" element={<GestionCalidad />} />
      <Route path="gestionInnovacion/:idProceso" element={<GestionInnovacion />} />
      <Route path="gestionFinanciera/:idProceso" element={<GestionFinanciera />} />
      <Route path="gestionLogistica/:idProceso" element={<GestionLogistica />} />
      <Route path="gestionDigital/:idProceso" element={<GestionDigital />} />
      <Route path="gestionAmbiental/:idProceso" element={<GestionAmbiental />} />
      <Route path="gestionIntelectual/:idProceso" element={<GestionIntelectual />} />
      <Route path="gestionTotales/:idProceso" element={<Totales />} />
      //analisisResultados
      <Route path="analisisResultado/:idProceso" element={<AnalisisResultado />} />
      //analisisEconomico
      <Route path="analisisEconomico/:idProceso" element={<AnalisisEconomico />} />
      //planDeAccion
      <Route path="planDeAccion/:idProceso" element={<PlanDeAccion />} />


    </Routes>
  </>)
}