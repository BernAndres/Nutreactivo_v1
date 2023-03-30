import React from 'react';
import '../App.css';
import Icon1 from '../imgs/img_icon1.png'
import Icon2 from '../imgs/img_icon2.png'
import Icon3 from '../imgs/img_icon3.png'
import Icon4 from '../imgs/img_icon4.png'
import { NavLink } from "react-router-dom";

function IniServicios(){
    return(
        <div className='container-fluid'>
            <div className='row d-flex flex-column flex-lg-row'>
                {/* titulo */}
                <div className='col-10 col-lg-4 d-flex justify-content-start justify-content-lg-center align-items-center mx-auto mb-3 mb-lg-0'>
                    <h3 className='fw-bold display-2 textsty1'>
                        Conoce <br/>nuestros <br/> servicios
                    </h3>
                </div>
                {/* opciones */}
                <div className='col-10 col-lg-7 m-auto'>
                    <div className='row d-flex flex-column flex-lg-row justify-content-center mb-4 '>
                        <div className='col-12 col-lg-4 d-flex flex-column mb-4 mb-lg-0 me-lg-5 align-items-start p-3 boxServSty'>
                            <img src={Icon1} className='w-25 mb-3'></img>
                            <h4 className='h4 fw-semibold mb-3 textsty1'>Consulta nutricional presencial</h4>
                            <p className='textsty1'>Ver más</p>
                        </div>
                        <div className='col-12 col-lg-4 d-flex flex-column align-items-start p-3 boxServSty'>
                            <img src={Icon2} className='w-25 mb-3'></img>
                            <h4 className='h4 fw-semibold mb-3 textsty1'>Consulta nutricional online</h4>
                            <p className='textsty1'>Ver más</p>
                        </div>
                    </div>
                    <div className='row d-flex flex-column flex-lg-row justify-content-center mb-4'>
                        <div className='col-12 col-lg-4 mb-4 mb-lg-0 me-lg-5 d-flex flex-column align-items-start p-3 boxServSty'>
                            <img src={Icon4} className='w-25 mb-3'></img>
                            <h4 className='h4 fw-semibold mb-3 textsty1'>Evaluación física</h4>
                            <p className='textsty1'>Ver más</p>
                        </div>
                        <div className='col-12 col-lg-4 d-flex flex-column align-items-start p-3 boxServSty'>
                            <img src={Icon3} className='w-25 mb-3'></img>
                            <h4 className='h4 fw-semibold mb-3 textsty1'>Convenios</h4>
                            <p className='textsty1'>Ver más</p>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default IniServicios;