import React from 'react';
import '../App.css';
import Icon1 from '../imgs/img_icon1.png'
import Icon2 from '../imgs/img_icon2.png'
import Icon3 from '../imgs/img_icon3.png'
import { NavLink } from "react-router-dom";

function IniServicios() {
    return (
        <div className='container-fluid'>
            <div className='row d-flex flex-column flex-md-row justify-content-center align-items-center'>

                {/* titulo */}
                <div className=' col-10 col-lg-3 d-flex justify-content-start align-items-center  mb-3 mb-lg-0'>
                    <h3 className='fw-bold display-3 text-start textsty1'>
                        Servicios
                    </h3>
                </div>

                {/* opciones */}
                <div className=' col-10 col-lg-6 '>

                    <NavLink to='/Asesoria-nutricional-presencial' style={{ textDecoration: 'none', color: 'black' }}
                        className='col-12 d-flex flex-column flex-md-row align-items-center justify-content-evenly mb-5 pb-3 pt-3 boxServSty'>
                        <div className='col-10 col-md-5 d-flex flex-column align-items-lg-center flex-md-row'>
                            <img src={Icon1} className=' mb-2 mb-md-0 me-3' style={{ width: '60px', height: '60px' }}></img>
                            <h4 className='col-12 col-md-9 h4 mb-2 mb-md-0 fw-semibold textsty1'>Consulta nutricional presencial</h4>
                        </div>
                        <div className='col-10 col-md-6 boxServTextSty'>
                            <p className='textsty1 col-12 mb-0'>
                                Atención presencial con nutricionista, incluye plan nutricional y evaluación física completa.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/Asesoria-nutricional-online' style={{ textDecoration: 'none', color: 'black' }}
                        className='col-12 d-flex flex-column flex-md-row align-items-center justify-content-evenly mb-5 pb-3 pt-3 boxServSty'>
                        <div className='col-10 col-md-5 d-flex flex-column flex-md-row align-items-lg-center'>
                            <img src={Icon2} className='mb-2 mb-md-0 me-3' style={{ width: '60px', height: '60px' }}></img>
                            <h4 className='col-12 col-md-9 h4 mb-2 mb-md-0 fw-semibold textsty1'>Consulta nutricional online</h4>
                        </div>
                        <div className='col-10 col-md-6 boxServTextSty'>
                            <p className='textsty1 col-12 mb-0'>
                                Atención online con nutricionista, incluye plan nutricional. Sin evaluación física.
                            </p>
                        </div>
                    </NavLink>

                    <NavLink to='/Convenios' style={{ textDecoration: 'none', color: 'black' }}
                        className='col-12 d-flex flex-column flex-md-row align-items-center justify-content-evenly pb-3 pt-3 boxServSty'>
                        <div className='col-10 col-md-5 d-flex flex-column flex-md-row align-items-lg-center'>
                            <img src={Icon3} className='mb-2 mb-md-0 me-3' style={{ width: '60px', height: '60px' }}></img>
                            <h4 className='col-12 col-md-9 h4 mb-2 mb-md-0 fw-semibold textsty1'>Convenios</h4>
                        </div>
                        <div className='col-10 col-md-6 boxServTextSty'>
                            <p className='textsty1 col-12 mb-0'>
                                Modalidades de convenios para centros deportivos y de salud que busquen
                                incorporar servicios de nutricionista.
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default IniServicios;