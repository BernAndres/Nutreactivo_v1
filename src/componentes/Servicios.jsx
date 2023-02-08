import React from 'react';
import '../App.css';
import Manzana from '../imgs/img_manzana.png'
import Online from '../imgs/img_online.png'
import EvFisica from '../imgs/img_cuerpo.png'
import Pesa from '../imgs/img_pesa_1.png'
import { NavLink } from "react-router-dom";

function Servicios(){
    return(
        <div className='container-fluid mt-5'>
            <div className='row '>
                <div className='col-1'></div>
                <div className='col-10 d-flex flex-column'>

                    {/* FILA 1 */}
                    <div className='d-flex flex-column flex-lg-row align-items-center mb-5 justify-content-lg-evenly'>
                        {/* Cuadro 1 */}
                        <div className='col-12 col-lg-4 rounded mb-5 mb-lg-0 px-4 py-4 bg-quaternary boxsty d-flex flex-column justify-content-between'>
                            <div className=''>
                                <div className='mb-2'><img  src={Manzana} alt="icon" style={{height: '50px'}}></img></div>
                                <h4 className='h3 fw-bold text-tertiary textsty1'>Consulta nutricional presencial</h4>
                                <div className='mb-3 text-tertiary psty'>
                                Dirigida a la mejora del rendimiento deportivo, composición corporal y estado de salud
                                general. <b>Incluye evaluación física.</b>
                                </div> 
                                <NavLink to='/Asesoria-nutricional-presencial' className='psty'>Ver más</NavLink>
                            </div>
                            <div className=' d-flex justify-content-end w-100' style={{position: 'relative'}}>
                                    <span className='valorsty psty'>25.000 clp</span>
                            </div>
                        </div> 

                        {/* Cuadro 2 */}
                        <div className='col-12 col-lg-4 rounded px-4 py-4 bg-quaternary boxsty d-flex flex-column justify-content-between'>
                            <div className=''>
                                <div className='mb-2'><img  src={Online} alt="icon" style={{height: '50px'}}></img></div>
                                <h4 className='h3 fw-bold text-tertiary textsty1'>Asesoría nutricional online</h4>
                                <div className='mb-3 text-tertiary psty'>
                                Dirigida a la mejora del rendimiento deportivo, composición corporal y estado de salud
                                general.
                                </div> 
                                <NavLink to='/Asesoria-nutricional-online' className='psty'>Ver más</NavLink>
                            </div>
                            <div className='d-flex justify-content-end w-100' style={{position: 'relative'}}>
                                    <span className='valorsty psty'>20.000 clp</span>
                            </div>
                        </div> 
                    </div>


                    {/* FILA 2 */}
                    <div className='d-flex flex-column flex-lg-row align-items-center mb-5 justify-content-lg-evenly'>
                        {/* Cuadro 1 */}
                        <div className='col-12 col-lg-4 rounded mb-5 mb-lg-0 px-4 py-4 bg-quaternary boxsty d-flex flex-column justify-content-between'>
                            <div className=''>
                                <div className='mb-2'><img  src={EvFisica} alt="icon" style={{height: '50px'}}></img></div>
                                <h4 className='h3 fw-bold text-tertiary textsty1'>Evaluación física</h4>
                                <div className='mb-3 text-tertiary psty'>
                                Determinación de la composición corporal, somatotipo,
                                y otros indicadores de interés deportivo y de salud. Mediciones relizadas bajo estándares ISAK 1.
                                </div> 
                                <NavLink to='/Evaluacion-fisica' className='psty'>Ver más</NavLink>
                            </div>
                            <div className=' d-flex justify-content-end w-100' style={{position: 'relative'}}>
                                    <span className='valorsty psty'>20.000 clp</span>
                            </div>
                        </div> 

                        {/* Cuadro 2 */}
                        <div className='col-12 col-lg-4 rounded px-4 py-4 bg-quaternary boxsty d-flex flex-column justify-content-between'>
                            <div className=''>
                                <div className='mb-2'><img  src={Pesa} alt="icon" style={{height: '50px'}}></img></div>
                                <h4 className='h3 fw-bold text-tertiary textsty1'>Plan de entrenamiento</h4>
                                <div className='mb-3 text-tertiary psty'>
                                Asesoría deportiva para la mejora del rendimiento, ganancia de fuerza y masa muscular.
                                </div> 
                                <NavLink to='/Asesoria-deportiva' className='psty'>Ver más</NavLink>
                            </div>
                            <div className='d-flex justify-content-end w-100' style={{position: 'relative'}}>
                                    <span className='valorsty psty'>20.000 clp</span>
                            </div>
                        </div> 
                    </div>

                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Servicios;