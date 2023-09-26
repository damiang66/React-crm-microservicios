import { NavLink } from "react-router-dom"

export const NavBar = ()=>{
    return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" >Posta CMR</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={"/main"}>inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/usuarios"}>usuarios</NavLink>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">clientes</a>
        </li>
      </ul>
      <form className="d-flex">
       
      </form>
    </div>
  </div>
</nav>
    
    </>)
}