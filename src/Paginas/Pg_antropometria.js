import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import { NavLink } from "react-router-dom";
import Img1 from '../imgs/img_cuerpo1.png';
import Img2 from '../imgs/img_salud.png';
import Img3 from '../imgs/img_voley.png';
import '../App.css';

function Antropometria() {
    return (
        <>
            <Bar />
            <Navbar />
            <div className='espacio1' />

            <div className='container-fluid'>

                {/* Titulo sección */}
                <div className='row'>
                    <div className='col-10 m-auto d-flex flex-column align-items-start mb-5'>
                        <h3 className='h2 fw-bold display-4 text-start textsty1'>Antropometría</h3>
                    </div>
                </div>


                {/* Primera fila */}
                <div className='row display-flex justify-content-between col-10 m-auto'>

                    <NavLink className='boxArticulos sombra px-5 py-3 mb-4'
                        to='/Evaluacion-fisica'>
                        <h4 className='col-6 text-white textsty1'>Evaluación física y resultados</h4>
                        <img className='col-5 ' src={Img1}></img>
                    </NavLink>

                    <NavLink className='boxArticulos sombra px-5 py-3 mb-4'
                        to='/Antropometria/Indicadores-generales-salud'>
                        <h4 className='col-6 text-white textsty1'>Cálculo de indicadores generales de salud</h4>
                        <img className='col-5 ' src={Img2}></img>
                    </NavLink>

                    <NavLink className='boxArticulos sombra px-5 py-3 mb-4'
                        to='/Antropometria/Predictores-talento-deportivo'>
                        <h4 className='col-6 text-white textsty1'>Cálculo de indicadores deportivos</h4>
                        <img className='col-5 ' src={Img3}></img>
                    </NavLink>
                </div>

                <div style={{ height: '200px' }}></div>

            </div>


            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default Antropometria;