import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed w-100 navbarsty2 mt-4">

      <div className="container-fluid px-0">

        {/* LOGO */}

        <Link className="navbar-brand px-0 px-sm-5 py-2 mt-lg-3 ms-3 ms-md-5" to="/">
          <span className='h2 fw-bold navlogosty textsty1'>NUTREACTIVO</span>
        </Link>

        {/* BOTÓN MENÚ */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon white"></span> */}
          <FontAwesomeIcon icon={faBars} color='white' size='xl' />
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse mt-lg-3" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5 menusty2">
            {/* 1 - Asesorias */}
            <li className="nav-item dropdown my-1 my-lg-0 px-5 px-xl-4 py-5 py-lg-1 text-center rounded navtextsty2">
              <span className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </span>
              <ul className="dropdown-menu mx-0 my-0 px-0 py-0">
                <li><Link className="dropdown-item" to="/Servicios">Servicios y valores</Link></li>
                <li><NavLink className="dropdown-item" to="/Asesoria-nutricional-presencial">Consulta nutricional presencial</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Asesoria-nutricional-online">Consulta nutricional online</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Convenios">Convenios</NavLink></li>
              </ul>
            </li>
            {/* 2 - Nutricionistas */}
            <li className="nav-item my-1 my-lg-0 px-5 px-xl-4 py-5 py-lg-1 text-center rounded">
              <NavLink className="navtextsty2" to="/Nutricionistas">
                Nutricionistas
              </NavLink>
            </li>
            <li className="nav-item my-1 my-lg-0 px-5 px-xl-4 py-5 py-lg-1 text-center rounded">
              <NavLink className=" navtextsty2" to="/Antropometria">
                Antropometría
              </NavLink>
            </li>
            <li className="nav-item my-1 my-lg-0 px-5 px-xl-4 py-5 py-lg-1 text-center rounded">
              <NavLink className=" navtextsty2" to="/Articulos">
                Articulos
              </NavLink>
            </li>
            {/* 3 - Agendar */}
            <li className="nav-item ms-lg-5 my-1 my-lg-0 px-5 px-xl-5 py-5 py-lg-1 text-center navbtn1sty rounded-5">
              <NavLink className="fw-semibold navtextstybtn" to='/Agendar'>
                AGENDA AQUÍ
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;