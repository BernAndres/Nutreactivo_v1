import React from 'react';
import '../App.css';

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg py-0 navbarsty position-fixed w-100 ">

        {/* Logo */}
        <a className="navbar-brand px-0 px-sm-5 py-2 my-0 ms-3 ms-md-5 bg-primary" href="/">
          <span className='h4 text-white'>Nutreactivo</span>
        </a>

        {/* Botón menú */}
        <a className="btn btn-primary navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon"></span>
        </a>

        {/* Fuera de vista  */}
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          {/* logo y botón cerrar */}
          <div className="offcanvas-header">
            {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {/* menú */}
          <div className="offcanvas-body">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5 h5">
                <li className="dropdown nav-item px-3 px-xl-5 py-1 text-center">
                  <a className="dropdown-toggle navtextsty" type="button" data-bs-toggle="dropdown" href="/">
                    Asesorías
                  </a>
                  <ul className="dropdown-menu">
                    <li className='navtextsty px-3'><a className="dropdown-item" href="/Asesorias">Asesorías</a></li>
                    <li className='navtextsty px-3'><a className="dropdown-item" href="/Asesoria-nutricional">Asesoría nutricional</a></li>
                    <li className='navtextsty px-3'><a className="dropdown-item" href="/Asesoria-nutricional-deportistas">Asesoría nutricional deportiva</a></li>
                    <li className='navtextsty px-3'><a className="dropdown-item" href="/Asesoria-nutricional-online">Asesoría nutricional online</a></li>
                  </ul>
                </li>
                <li className="nav-item px-3 px-xl-5 py-1 text-primary text-center">
                  <a className="navtextsty" href="/Nutricionistas">Nutricionistas</a>
                </li>
                {/* <li className="nav-item px-3 px-xl-5 py-1 text-center">
                  <a className="navtextsty" href="/Sobre-nosotros">Sobre nosotros</a>
                </li> */}
                <li className="nav-item px-3 px-xl-5 py-1 text-center">
                  <a className="navtextsty" href="/Agendar">Agendar</a>
                </li>
              </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navbar;