import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
import Valores from '../componentes/Valores2';
import Footer from '../componentes/Footer';
import { NavLink } from 'react-router-dom';


import Img1 from '../imgs/img_notebook.jpg'
import Img2 from '../imgs/img_imc_2.png';
import Img3 from '../imgs/img_medicion_6.jpg';
import Img4 from '../imgs/img_medicion_4.jpg';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AsesoriaOnline() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <>
            <Bar/>
            <Navbar/>
            <NavBack/>
            <div style={{height: '150px'}}/>

            {/* INTRO */}
            <div className='row mb-5 mx-0 data-aos="fade-up"'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <h4 className='fw-bold h2 text-tertiary'>Asesoría Nutricional Online</h4>
                        <p className='psty'>
                        A continuación encontrarás en detalle que esperar en tu consulta nutricional online, 
                        la cual está dirigida a personas físicamente activas, individuos que busquen controlar 
                        su peso corporal o manejar condiciones de salud de índole nutricional.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* RECOMENDACIONES PREVIAS */}
            <div className='row mb-5 mx-0 data-aos="fade-up"'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <h4 className='fw-bold h2 text-tertiary'>Recomendaciones previas a la consulta</h4>
                           <ul className='psty'>
                                <li>Contar con un computador con camara web o celular.</li>
                                <li>Asegurar el tener una buena conexión a internet.</li>
                                <li>Descargar la aplicación Zoom mediante la cual se realizará la teleconsulta.</li>
                                <li>Se recomienda buscar un ambiente tranquilo para la consulta, ya que estas 
                                suelen durar 30-45 minutos.</li>
                           </ul>

                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* ENTREVISTA */}
            <div className='row mb-5 mx-0' data-aos="fade-up">
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Entrevista</h4>
                            <p className='psty'>
                            Durante la consulta, se realizará una entrevista al usuario con el fin de conocer
                            sus antecedentes clínicos de salud, estilo de vida, y hábitos alimenticios. 
                            Durante esta instancia, el usuario puede dar a conocer abiertamente sus hábitos alimenticios
                            y relación con la comida, sin temor a ser juzgado, puesto que el ojetivo de
                            esta instancia es crear una alianza entre usuario y nutricionista basada en la confianza
                            y transparencia, con el fin de abordar adecuadamente sus objetivos. 
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
                            <img src={Img1} className='rounded imgsty' alt='Entrevista online'></img>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* EVALUACIÓN FÍSICA */}
            <div className='row mb-5 mx-0' data-aos="fade-up">
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Medición física</h4>
                            <p className='psty'>
                            La evaluación física puede ser realizada por el paciente o alguien que lo asista, el cual deberá tomar 
                            los indicadores de peso, talla y circunferencia de cintura. Para realizar las mediciones de forma correcta,
                            debe descargar el siguiente <NavLink to='/Instructivo-mediciones' target='_blank' rel='help'>instructuvo de mediciones</NavLink> donde se explica el paso a paso para
                            realizar cada medición adecuadamente. En caso de tener dudas puede consultar con su nutricionista
                            para realizar las mediciones.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6'>
                               <div className='row'>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img4} alt='Medicion fisica'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img3} alt='Medicion fisica'></img>
                                    </div>
                               </div>
                        </div>
                    </div>


                </div>
                <div className='col-1'></div>
            </div>

            {/* RESULTADOS EVALUACIÓN FÍSICA */}
            <div className='row mx-0' data-aos="fade-up">
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='row mb-3 d-flex justify-content-center mx-0 px-0'>
                            <h4 className='fw-bold h2 text-tertiary'>Resultados mediciones</h4>
                            <p className='psty'>
                                Las mediciones antropométricas nos entregan como resultado indicadores relacionados con la proporcionalidad
                                corporal del usuario y el estado de salud de este.
                            </p>
                        </div>
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>
                            <div className='col-12 col-lg-4 mb-3 mb-lg-0 imgMedSty'>
                                <h5 className='text-center mt-2'>índice de Masa Corporal</h5>
                                <img src={Img2} alt='Composición corporal' className='w-100'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* INTERVENCION NUTRICIONAL */}
            <div className='row mb-5 mx-0 data-aos="fade-up"'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <h4 className='fw-bold h2 text-tertiary'>Intervención nutricional</h4>
                        <p className='psty'>
                            El proceso de intervención nutricional es un proceso terapéutico donde nutricionista 
                            y paciente trabajan en conjunto por la mejora del estado de salud y/o control de condiciones
                            negativas de salud de índole nutricional. Para lograr este objetivo, el paciente cuenta con
                            el apoyo de su nutricionista para realizar preguntas y resolver dudas, además, su nutricionista 
                            le proporcionará su plan nutricional en formato pdf, el cual incluye la prescripción del
                            tratamiento realizado, una pauta de alimentación con diversos ejemplos de comidas, tareas 
                            por realizar y material de apoyo para el paciente.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            <Valores/>

            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaOnline;