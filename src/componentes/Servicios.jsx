import React from 'react';
import '../App.css';
import './style/servicios.css';
import Icon1 from '../imgs/img_icon1.png'
import Icon2 from '../imgs/img_icon2.png'
import Icon3 from '../imgs/img_icon3.png'
import Icon4 from '../imgs/img_icon8.png'
import { NavLink } from "react-router-dom";

function Servicios() {
    return (
        <div className='container-fluid'>
            {/* Titulo */}
            <div className='row d-flex flex-column col-10 col-md-9 mx-auto mb-5 flex-md-row justify-content-center align-items-center'>
                <div className='d-flex justify-content-start align-items-center  mb-3 mb-lg-0'>
                    <h3 className='fw-bold display-3 text-start textsty1'>
                        Servicios
                    </h3>
                </div>
            </div>

            {/* opciones */}
            <div className='row col-10 m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
                <NavLink to='/Asesoria-nutricional-presencial' style={{ textDecoration: 'none' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-between mb-5 px-3 px-lg-5 py-4 boxServSty'>
                    <div className=''>
                        <img src={Icon1} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                        <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional presencial</h4>
                        <p className='psty2 col-12'>
                            Incluye plan nutricional personalizado, evaluación física según estandares ISAK 1 junto con
                            el informe físico respectivo.
                        </p>
                    </div>
                    <div className='' style={{ position: 'relative' }}>
                        <div className='col-9 col-md-8 col-lg-6 bg-primary rounded text-white d-flex justify-content-center py-1 psty'
                            style={{ position: 'absolute', bottom: '-38px', left: '0px' }}>
                            Valor: 28.000 clp
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/Asesoria-nutricional-presencial' style={{ textDecoration: 'none' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-between mb-5 px-3 px-lg-5 py-4 boxServSty'>
                    <div>
                        <img src={Icon4} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                        <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional presencial &nbsp;
                            <span className='bg-secondary rounded px-2'>+ 1 control</span></h4>
                        <p className='psty2 col-12'>
                            Cada sesión incluye plan nutricional personalizado o reajuste de este + evaluación física según el estandar
                            ISAK 1. Sin limite de tiempo entre primera y segunda sesión.
                        </p>
                    </div>
                    <div className='' style={{ position: 'relative' }}>
                        <div className='col-9 col-md-8 col-lg-6 bg-primary rounded text-white d-flex justify-content-center py-1 psty'
                            style={{ position: 'absolute', bottom: '-38px', left: '0px' }}>
                            Valor: 50.000 clp
                        </div>
                    </div>
                </NavLink>
            </div>

            {/* opciones */}
            <div className='row col-10 m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
                <NavLink to='/Asesoria-nutricional-presencial' style={{ textDecoration: 'none', color: '' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-between mb-5 px-3 px-lg-5 py-4 boxServSty'>
                    <div>
                        <img src={Icon4} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                        <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional presencial &nbsp;
                            <span className='bg-secondary rounded px-2'>+ 2 controles</span></h4>
                        <p className='psty2 col-12'>
                            Cada sesión incluye plan nutricional personalizado o reajuste de este + evaluación física según el estandar
                            ISAK 1. Sin limite de tiempo entre primera, segunda y tercera sesión.
                        </p>
                    </div>
                    <div className='' style={{ position: 'relative' }}>
                        <div className='col-9 col-md-8 col-lg-6 bg-primary rounded text-white d-flex justify-content-center py-1 psty'
                            style={{ position: 'absolute', bottom: '-38px', left: '0px' }}>
                            Valor: 75.000 clp
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/Asesoria-nutricional-online' style={{ textDecoration: 'none', color: '' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column justify-content-between mb-5 px-3 px-lg-5 py-4 boxServSty'>
                    <div>
                        <img src={Icon2} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                        <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional <br /> online</h4>
                        <p className='psty2 col-12'>
                            Incluye plan nutricional personalizado + evaluación física básica. Las mediciones de la evaluación
                            son tomadas por el mismo paciente con asesoría del nutricionista.
                        </p>
                    </div>
                    <div className='' style={{ position: 'relative' }}>
                        <div className='col-9 col-md-8 col-lg-6 bg-primary rounded text-white d-flex justify-content-center py-1 psty'
                            style={{ position: 'absolute', bottom: '-38px', left: '0px' }}>
                            Valor: 20.000 clp
                        </div>
                    </div>
                </NavLink>
            </div>






        </div>

    )
}

export default Servicios;