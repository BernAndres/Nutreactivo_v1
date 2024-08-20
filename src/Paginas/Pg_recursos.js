import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import img1 from '../imgs/img_porciones.png';
import img2 from '../imgs/img_definicion.jpg';
import img3 from '../imgs/img_halterofilia.jpg';
import img4 from '../imgs/img_remo.png';
import { NavLink } from 'react-router-dom';

function PgRecursos() {
    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '150px' }} />
            <div className='col-11 col-lg-9 d-flex m-auto'>
                <h2 className='textsty1 display-4 fw-bold mb-5'>
                    Recursos
                </h2>
            </div>
            <div className='col-10 col-lg-9 m-auto d-flex flex-column align-items-center justify-content-center'>
                <NavLink to='/Recursos/Porciones-de-alimentos' style={{ textDecoration: 'none' }}
                    className='col-12 col-lg-9 sombra2 redondearSty pointer  d-flex justify-content-around align-items-center mb-4 py-2'>
                    <div className='col-6'>
                        <h6 className='h3 text-primary '>Porciones de alimentos</h6>
                    </div>
                    <div className='col-5 col-lg-4'>
                        <img src={img1} className='rounded w-75' />
                    </div>
                </NavLink>
                <NavLink to='/Recursos/Trabajando-perdida-de-grasa-corporal' style={{ textDecoration: 'none' }}
                    className='col-12 col-lg-9 sombra2 redondearSty pointer  d-flex justify-content-around align-items-center mb-4 py-2'>
                    <div className='col-6'>
                        <h6 className='h3 text-primary '>3 aspectos clave en la pérdida de grasa corporal</h6>
                    </div>
                    <div className='col-5 col-lg-4'>
                        <img src={img2} className='rounded w-75' />
                    </div>
                </NavLink>
                <NavLink to='/Recursos/Rendimiento-deportes-corta-duracion-y-alta-intensidad' style={{ textDecoration: 'none' }}
                    className='col-12 col-lg-9 sombra2 redondearSty pointer  d-flex justify-content-around align-items-center mb-4 py-2'>
                    <div className='col-6'>
                        <h6 className='h3 text-primary '>Rendimiento en deportes de corta duración y alta intensidad</h6>
                    </div>
                    <div className='col-5 col-lg-4'>
                        <img src={img3} className='rounded w-75' />
                    </div>
                </NavLink>
                <NavLink to='/Recursos/Rendimiento-deportes-mediana-duracion' style={{ textDecoration: 'none' }}
                    className='col-12 col-lg-9 sombra2 redondearSty pointer  d-flex justify-content-around align-items-center mb-4 py-2'>
                    <div className='col-6'>
                        <h6 className='h3 text-primary '>Rendimiento en deportes de mediana duración (+1 min)</h6>
                    </div>
                    <div className='col-5 col-lg-4'>
                        <img src={img4} className='rounded w-75' />
                    </div>
                </NavLink>
            </div>
            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default PgRecursos;