import React from 'react';
import '../App.css';
import Icon1 from '../imgs/img_icon1.png'
import Icon2 from '../imgs/img_icon2.png'
import Icon3 from '../imgs/img_icon3.png'
import Icon4 from '../imgs/img_icon8.png'
import { NavLink } from "react-router-dom";

function IniServicios() {
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
                <NavLink to='/Asesoria-nutricional-presencial' style={{ textDecoration: 'none', color: '' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column mb-5 px-5 py-4 boxServSty h-100'>
                    <img src={Icon1} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                    <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional presencial</h4>
                    <p className='psty2 col-12'>
                        Atención presencial con nutricionista, incluye plan nutricional y evaluación física completa.
                    </p>
                </NavLink>
                <NavLink to='/Asesoria-nutricional-presencial' style={{ textDecoration: 'none', color: '' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column mb-5 px-5 py-4 boxServSty h-100'>
                    <img src={Icon4} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                    <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional presencial &nbsp;
                        <span className='bg-secondary rounded px-2'>+ control</span></h4>
                    <p className='psty2 col-12'>
                        Atención presencial con nutricionista, incluye plan nutricional, evaluación física completa + control.
                    </p>
                </NavLink>
            </div>

            {/* opciones */}
            <div className='row col-10 m-auto d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
                <NavLink to='/Asesoria-nutricional-online' style={{ textDecoration: 'none', color: '' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column mb-5 px-5 py-4 boxServSty h-100'>
                    <img src={Icon2} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                    <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Consulta nutricional online</h4>
                    <p className='psty2 col-12'>
                        Atención online con nutricionista, incluye plan nutricional. Sin evaluación física presencial.
                    </p>
                </NavLink>
                <NavLink to='/Convenios' style={{ textDecoration: 'none', color: '' }}
                    className='col-12 col-md-5 col-lg-4 d-flex flex-column mb-5 px-5 py-4 boxServSty h-100'>
                    <img src={Icon3} className='mb-2' style={{ width: '60px', height: '60px' }}></img>
                    <h4 className='col-12 h4 mb-2 fw-semibold textsty1'>Convenios</h4>
                    <p className='psty2 col-12'>
                        Modalidades de convenios para centros deportivos y de
                        salud que busquen incorporar servicios de nutricionista.
                    </p>
                    <h4>&nbsp;</h4>
                </NavLink>
            </div>
        </div>


    )
}

export default IniServicios;