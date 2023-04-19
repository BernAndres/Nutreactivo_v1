import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import { NavLink } from "react-router-dom";
import Img1 from '../imgs/img_suples1.jpg';
import Img2 from '../imgs/img_suples3.png';
import Img3 from '../imgs/img_alimentos_deportivos2.jpg';
import '../App.css';

function Articulos() {
    return (
        <>
            <Bar />
            <Navbar />
            <div className='espacio1' />

            <div className='container-fluid'>

                {/* Titulo sección */}
                <div className='row'>
                    <div className='col-10 m-auto d-flex flex-column align-items-start mb-5'>
                        <h3 className='h2 fw-bold display-4 text-start textsty1'>Articulos</h3>
                    </div>
                </div>

                {/* Cuerpo */}
                <div className='row'>
                    <div className='col-10 m-auto'>

                        {/* Primera fila */}
                        <div className='row display-flex justify-content-start'>

                            {/* Articulo 1 */}
                            <NavLink className='col-12 col-md-5 col-lg-3 px-2 artsty'
                                to='/Articulos/Suplementos-deportivos-con-mayor-efectividad-en-la-actualidad'>
                                <img src={Img1} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                                <h5 className='textsty1'>Suplementos deportivos con mayor efectividad en la actualidad</h5>
                                <p className=' psty2'>
                                    Mucho se habla del uso de suplementos para mejorar el rendimiento y los resultados en el
                                    deporte, sin embargo...
                                </p>
                                <p className='psty'>Ver más</p>
                            </NavLink>
                            <div className='col-1'></div>
                            <NavLink className='col-12 col-md-5 col-lg-3 px-2 artsty'
                                to='/Articulos/Sustancias-prohibidas-en-los-deportes-y-el-riesgo-de-contaminacion-en-los-suplementos'>
                                <img src={Img2} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                                <h5 className='textsty1'>Sustancias prohibidas en los deportes y el riesgo de contaminación
                                    en los suplementos.</h5>
                                <p className=' psty2'>
                                    En el mundo de los suplementos deportivos existen ciertos riesgos y prohibiciones que debemos
                                    considerar para...
                                </p>
                                <p className='psty'>Ver más</p>
                            </NavLink>
                            <div className='col-1'></div>
                            <NavLink className='col-12 col-md-5 col-lg-3 px-2 artsty'
                                to='/Articulos/Alimentos-deportivos'>
                                <img src={Img3} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                                <h5 className='textsty1'>Alimentos deportivos</h5>
                                <p className=' psty2'>
                                    Los alimentos deportivos son una alternativa facilitadora para todos los deportistas...
                                </p>
                                <p className='psty'>Ver más</p>
                            </NavLink>
                        </div>

                    </div>
                </div>

            </div>

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default Articulos;