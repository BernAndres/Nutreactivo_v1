import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg position-fixed w-100 navbarsty">
  <div className="container-fluid">

    {/* LOGO */}
    <NavLink className="navbar-brand px-0 px-sm-5 py-2 my-0 ms-3 ms-md-5 bg-primary" to="/">
          <span className='h4 text-white'>Nutreactivo</span>
      </NavLink>
    
    {/* BOTÓN MENÚ */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    {/* MENÚ */}
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5 menusty">
          {/* 1 - Asesorias */}
          <li className="nav-item dropdown my-1 my-lg-0 px-5 px-xl-5 py-5 py-lg-1 text-center rounded">
            <span className="dropdown-toggle navtextsty" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Asesorías
            </span>
            <ul className="dropdown-menu mx-0 my-0 px-0 py-0">
              <li><NavLink className="dropdown-item" to="/Asesorias">Asesorías</NavLink></li>
              <li><NavLink className="dropdown-item" to="/Asesoria-nutricional">Asesoría nutricional</NavLink></li>
              <li><NavLink className="dropdown-item" to="/Asesoria-nutricional-deportistas">Asesoría nutricional deportiva</NavLink></li>
              <li><NavLink className="dropdown-item" to="/Asesoria-nutricional-online">Asesoría nutricional online</NavLink></li>
            </ul>
          </li>
          {/* 2 - Nutricionistas */}
          <li className="nav-item my-1 my-lg-0 px-5 px-xl-5 py-5 py-lg-1 text-center rounded">
            <NavLink className="navtextsty" to="/Nutricionistas">Nutricionistas</NavLink>
          </li>
          {/* 3 - Agendar */}
          <li className="nav-item my-1 my-lg-0 px-5 px-xl-5 py-5 py-lg-1 text-center rounded">
            <a className="navtextsty" target='_blank' rel='external' href="https://api.whatsapp.com/send?phone=56987307068&text=nutreactivo">Agendar</a>
          </li>
      </ul>
    </div>

  </div>
</nav>
    )
}

export default Navbar;