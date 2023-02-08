import React from 'react';
import '../App.css';
import Manzana from '../imgs/img_manzana.png'
import Online from '../imgs/img_online.png'
import EvFisica from '../imgs/img_cuerpo.png'
import Pesa from '../imgs/img_pesa_1.png'
import { NavLink } from "react-router-dom";

function IniServicios(){
    return(
        <div className='container-fluid'>
            <div className='row mb-5'>
                <h3 className='d-flex display-6 fw-semibold text-tertiary justify-content-center textsty1'>
                  SERVICIOS
                </h3>
            </div>
            <div className='row d-flex justify-content-evenly '>
                {/* asesoria nutricional */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={Manzana} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center textsty1'>Consulta nutricional</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>presencial</p>
                    <div className='mb-4 mx-3 text-tertiary psty' style={{textAlign: 'justify'}}>
                    Dirigida a la mejora del rendimiento deportivo, composición corporal y estado de salud
                    general. <b>Incluye evaluación física.</b>
                    </div> 
                    <NavLink to='/Asesoria-nutricional-presencial' className='text-center psty'>Ver más</NavLink>
                </div>

                {/* asesoria nutricional online */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={Online} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center textsty1'>Consulta nutricional</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>online</p>
                    <div className='mb-4 mx-3 text-tertiary psty' style={{textAlign: 'justify'}}>
                    Dirigida a la mejora del rendimiento deportivo, composición corporal y estado de salud
                    general.
                    </div> 
                    <NavLink to='/Asesoria-nutricional-online' className='text-center psty'>Ver más</NavLink>
                </div>

                {/* Evaluación física */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={EvFisica} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center textsty1'>Evaluación física</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>presencial</p>
                    <div className='mb-4 mx-3 text-tertiary psty' style={{textAlign: 'justify'}}>
                    Determinación de la composición corporal, somatotipo,
                    y otros indicadores de interés deportivo y de salud. Mediciones relizadas bajo estándares ISAK 1.
                    </div> 
                    <NavLink to='/Evaluacion-fisica' className='text-center psty'>Ver más</NavLink>
                </div>

                {/*  nutricional deportiva */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={Pesa} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className='h3 text-tertiary text-center textsty1'>Plan de entrenamiento</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>online</p>
                    <div className='mb-4 mx-3 text-tertiary psty' style={{textAlign: 'justify'}}>
                    Asesoría deportiva para la mejora del rendimiento, ganancia de fuerza y masa muscular.
                    </div> 
                    <NavLink to='/Asesoria-deportiva' className='psty'>Ver más</NavLink>
                </div>


            </div>
        </div>
    )
}

export default IniServicios;