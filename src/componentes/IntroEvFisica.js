import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";

function IntroEvFisica() {
    return (
        <div className='container-fluid mb-5'>
            <div className=' col-10 col-lg-9 d-flex flex-column flex-md-row-reverse justify-content-between m-auto mb-5'>
                <div className='col-12 col-md-5 col-lg-4 mb-3 mb-md-0 d-flex justify-content-center'>
                    <iframe height="250px" className='col-12 redondearSty'
                        src="https://www.youtube.com/embed/w5tOpQVNeOQ">
                    </iframe>
                </div>
                <div className='col-12 col-md-6 col-lg-7 d-flex align-items-center '>
                    <p className='h5' style={{ textAlign: 'justify' }}>
                        La evaluación física tiene como finalidad obtener una serie indicadores
                        deportivos y de salud del usuario. Entre los indicadores a obtener se
                        encuentran: masa muscular, masa grasa, somatotipo, predictores para talento
                        deportivo, entre otros. <NavLink to='/Evaluacion-fisica'>Ver indicadores.</NavLink>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default IntroEvFisica;