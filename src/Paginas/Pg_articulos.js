import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import { NavLink } from "react-router-dom";
import Img1 from '../imgs/img_suples1.jpg';
import Img2 from '../imgs/img_suples3.png';
import Img3 from '../imgs/img_alimentos_deportivos2.jpg';
import Img4 from '../imgs/img_betarraga2.jpg';
import Img5 from '../imgs/img_timing.jpg';
import Img6 from '../imgs/img_comida.jpg';
import Img7 from '../imgs/img_energia_cuerpo.jpg';
import '../App.css';

function Articulos() {
    return (
        <div>
            <Bar />
            <Navbar />
            <div className='container-fluid'>
                <div style={{ height: '200px' }} />

                {/* Titulo sección */}
                <div className='row'>
                    <div className='col-9 m-auto d-flex flex-column mb-5'>
                        <h3 className='h2 fw-bold display-4 text-start textsty1'>Articulos</h3>
                    </div>
                </div>

                {/* Sección con aartículos */}
                <div className='row col-9 m-auto mb-5 display-flex justify-content-start'>
                    <NavLink className='col-12 col-md-5 col-lg-4  artsty mb-3'
                        to='/Articulos/Suplementos-indicados-para-cada-deporte'>
                        <img src={Img4} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                        <h5 className='textsty1'>Suplementos indicados para cada deporte</h5>
                        <p className=' psty2'>
                            El uso de suplementos deportivos puede generar un gran auamento en el rendimiento,
                            pero debemos considerar utilizar el suplemento correcto para la disciplina indicada...
                        </p>
                        <p className='psty'>Ver más</p>
                    </NavLink>
                    <NavLink className='col-12 col-md-5 col-lg-4 artsty mb-3'
                        to='/Articulos/Timing-nutricional-como-estrategia-deportiva'>
                        <img src={Img5} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                        <h5 className='textsty1'>Timing nutricional como estrategia de nutrición deportiva
                            en los suplementos.</h5>
                        <p className=' psty2'>
                            El timing es una estrategia de la nutrición deportiva, que consiste en introducir alimentos
                            de forma estrategica, antes, durante y...
                        </p>
                        <p className='psty'>Ver más</p>
                    </NavLink>
                    <NavLink className='col-12 col-md-5 col-lg-4 artsty mb-3'
                        to='/Articulos/Proceso-de-definicion'>
                        <img src={Img6} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                        <h5 className='textsty1'>Consideraciones para el proceso de definición o pérdida de grasa corporal</h5>
                        <p className=' psty2'>
                            Ya sean atletas que se preparen para una competencia, que busquen objetivos, entre otros,
                            el realizar un régimen de definición es importante considerar tanto la cantidad de alimentos como...
                        </p>
                        <p className='psty'>Ver más</p>
                    </NavLink>
                    <NavLink className='col-12 col-md-5 col-lg-4 artsty mb-3'
                        to='/Articulos/Fuentes-de-energia-segun-deporte'>
                        <img src={Img7} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                        <h5 className='textsty1'>Fuentes de energía según deporte</h5>
                        <p className=' psty2'>
                            El cuerpo humano posee tres fuentes de energía principales, las cuales va a utilizar
                            dependiendo de la naturaleza de la actividad física. Estas fuentes de energía son...
                        </p>
                        <p className='psty'>Ver más</p>
                    </NavLink>
                    <NavLink className='col-12 col-md-5 col-lg-4 artsty mb-3'
                        to='/Articulos/Suplementos-deportivos-con-mayor-efectividad-en-la-actualidad'>
                        <img src={Img1} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                        <h5 className='textsty1'>Suplementos deportivos con mayor efectividad en la actualidad</h5>
                        <p className=' psty2'>
                            Mucho se habla del uso de suplementos para mejorar el rendimiento y los resultados en el
                            deporte, sin embargo...
                        </p>
                        <p className='psty'>Ver más</p>
                    </NavLink>
                    <NavLink className='col-12 col-md-5 col-lg-4 artsty mb-3'
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
                    <NavLink className='col-12 col-md-5 col-lg-4 artsty mb-3'
                        to='/Articulos/Alimentos-deportivos'>
                        <img src={Img3} className='w-100 mb-1 rounded' alt='Suplementos deportivos'></img>
                        <h5 className='textsty1'>Alimentos deportivos</h5>
                        <p className=' psty2'>
                            Los alimentos deportivos son una alternativa facilitadora para todos los deportistas...
                        </p>
                        <p className='psty'>Ver más</p>
                    </NavLink>
                </div>

                <div style={{ height: '100px' }} />
            </div>
            <Footer />
        </div>
    )
}

export default Articulos;