import React from 'react';
import './style/iniServicios.css';
import ConsultaPresencial from '../imgs/img_consulta_presencial.png';
import ConsultaOnline from '../imgs/img_consulta_online.jpg';
import { NavLink } from "react-router-dom";

function IniServicios() {
    return (
        <div className='container-fluid'>

            {/* Titulo */}
            <div className='row d-flex flex-column col-10 col-md-9 mx-auto mb-3 mb-lg-5 flex-md-row justify-content-center align-items-center'>
                <div className='d-flex justify-content-start align-items-center  mb-3 mb-lg-0'>
                    <h3 className='fw-bold display-3 text-start textsty1'>
                        Servicios
                    </h3>
                </div>
            </div>

            {/* Cuerpo */}
            <div className='row d-flex flex-column flex-md-row col-10 col-md-9 mx-auto mb-5 justify-content-center align-items-center'>
                {/* Consulta presencial */}
                <div className='bg-primary px-0 py-0 d-flex flex-column justify-content-between boxServiciosASty'
                    style={{ height: '700px', boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.3)' }}>
                    <div className='w-100 mt-5 px-4'>
                        <h4 className='display-5 fw-bold text-white'>Consulta <br /> nutricional <br />  presencial</h4>
                    </div>
                    <div className='w-100 d-flex align-items-center'>
                        <p className='text-white psty w-75 mx-4'>
                            Asesoría nutricional especializada para deportistas y personas físicamente activas. incluye
                            plan nutricional personalizado y evaluación física en base a estandar deportivo ISAK 1.
                        </p>
                    </div>
                    <div className='w-100' style={{ position: 'relative', height: '200px' }}>
                        <img src={ConsultaPresencial} className='w-100 boxServImgASty' style={{ position: 'absolute', top: '0px', height: '200px', objectFit: 'cover' }}></img>
                        <NavLink to="/Asesoria-nutricional-presencial" className="px-3 py-2 rounded bg-primary text-white d-flex justify-content-center psty"
                            style={{ textDecoration: 'none', color: '', position: 'absolute', bottom: '30px', left: '40px', width: '40%' }}>
                            Ver más
                        </NavLink>
                    </div>
                </div>
                {/* Consulta online */}
                <div className='px-0 py-0 d-flex flex-column justify-content-between boxServiciosBSty'
                    style={{ backgroundColor: '#A174FF', height: '700px', boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.3)' }}>
                    <div className='w-100' style={{ position: 'relative', height: '200px' }}>
                        <img src={ConsultaOnline} className='w-100 boxServImgBSty' style={{ position: 'absolute', top: '0px', height: '200px', objectFit: 'cover' }}></img>
                        <NavLink to="/Asesoria-nutricional-online" className="px-3 py-2 rounded bg-primary text-white d-flex justify-content-center psty"
                            style={{ textDecoration: 'none', color: '', position: 'absolute', bottom: '30px', left: '40px', width: '40%' }}>
                            Ver más
                        </NavLink>
                    </div>
                    <div className='w-100 d-flex align-items-center mt-5 mb-0'>
                        <p className='text-white psty w-75 mx-4 mb-0'>
                            Asesoría nutricional especializada para deportistas y personas físicamente activas. Incluye
                            plan nutricional personalizado y evaluación física básica.
                        </p>
                    </div>
                    <div className='w-100 mb-5 mt-0 px-4'>
                        <h4 className='display-5 fw-bold'
                            style={{ color: '#28007D' }}>Consulta <br /> nutricional <br />  online</h4>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default IniServicios;