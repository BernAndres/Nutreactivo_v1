import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg py-0 navbarsty position-fixed w-100 ">

        {/* Logo */}
        <NavLink className="navbar-brand px-0 px-sm-5 py-2 my-0 ms-3 ms-md-5 bg-primary" to="/">
          <span className='h4 text-white'>Nutreactivo</span>
        </NavLink>

        {/* Botón menú */}
        <NavLink className="btn btn-primary navbar-toggler" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon"></span>
        </NavLink>

        {/* Fuera de vista  */}
        <div className="offcanvas offcanvas-start menusty" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          {/* logo y botón cerrar */}
          <div className="offcanvas-header">
            {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {/* menú */}
          <div className="offcanvas-body">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5 h5">
                <li className="dropdown nav-item my-1 my-lg-0 px-5 px-xl-5 py-5 py-lg-1 text-center rounded menuitemsty">
                  <NavLink className="dropdown-toggle navtextsty " type="button" data-bs-toggle="dropdown" to="/">
                    Asesorías
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className='navtextsty'>
                      <NavLink className="dropdown-item" to="/Asesorias">
                        <p className='pmenusty'>Asesorias</p>
                      </NavLink>
                    </li>
                    <li className='navtextsty'>
                      <NavLink className="dropdown-item" to="/Asesoria-nutricional">
                        <p className='pmenusty'>Asesoría nutricional</p>
                      </NavLink>
                    </li>
                    <li className='navtextsty'>
                      <NavLink className="dropdown-item" to="/Asesoria-nutricional-deportistas">
                        <p className='pmenusty'>Asesoría nutricional</p>
                      </NavLink>
                    </li>
                    <li className='navtextsty'>
                      <NavLink className="dropdown-item" to="/Asesoria-nutricional-online">
                        <p className='pmenusty'>Asesoría nutricional online</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3 my-1 my-lg-0 px-xl-5 py-5 py-lg-1 text-primary text-center rounded menuitemsty">
                  <NavLink className="navtextsty" to="/Nutricionistas">Nutricionistas</NavLink>
                </li>
                {/* <li className="nav-item px-3 px-xl-5 py-1 text-center">
                  <NavLink className="navtextsty" to="/Sobre-nosotros">Sobre nosotros</NavLink>
                </li> */}
                <li className="nav-item px-3 my-1 my-lg-0 px-xl-5 py-5 py-lg-1 text-center rounded menuitemsty">
                  <NavLink className="navtextsty" to="/Agendar">Agendar</NavLink>
                </li>
              </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navbar;