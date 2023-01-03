import React from 'react';
import '../App.css';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Valores from '../componentes/Valores2';
import Footer from '../componentes/Footer';
import { NavLink } from 'react-router-dom';
import Video from '../videos/video3.mp4';
import Img1 from '../imgs/img_consulta_online.jpg';
import Img2 from '../imgs/img_imc_2.png';
import Img3 from '../imgs/img_medicion_6.jpg';
import Img4 from '../imgs/img_medicion_4.jpg';

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function AsesoriaNutOnline() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        <>
            <Bar/>
            <Navbar/>
            <div style={{height: '250px'}}/>

            {/* INTRO */}
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 fw-bold display-4 mb-4 textsty1'>Asesoría Nutricional Online</h4>
                            <p className='psty'>
                            La consulta nutricional online se enfoca en la mejora del rendimiento deportivo, habitos saludables,
                            estado de salud y manejo de enfermedades o condiciones de índole nutricional. La modalidad online
                            es ideal para personas físicamente activas o que deseen un estilo de vida más saludable y actibo.
                            </p>
                            <p className='psty'>
                            La consulta online se realiza por zoom, con duración de 45 minutos a 1 hora, e incluye plan nutricional
                            adaptado a cada paciente más  determinación de indicadores físicos básicos.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img src={Img1} className='imgsty2 rounded' alt='img'></img>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* RECOMENDACIONES PREVIAS */}
            <div className='row mb-5 mx-0 '>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Recomendaciones previas a la consulta</h4>

                        <div className='bg-quaternary px-5 py-3 rounded psty'>
                            <div className='d-flex align-items-center mb-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>1</div>
                                <p className='mx-0 my-0 pe-5'>
                                Contar con un computador con camara web o celular.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>2</div>
                                <p className='mx-0 my-0'>
                                Asegurar el tener una buena conexión a internet.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>3</div>
                                <p className='mx-0 my-0'>
                                Descargar la aplicación Zoom mediante la cual se realizará la teleconsulta.
                                </p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>4</div>
                                <p className='mx-0 my-0'>
                                Se recomienda buscar un ambiente tranquilo para la consulta, ya que estas 
                                suelen durar 30-45 minutos.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* ENTREVISTA */}
            <div className='row mb-5 mx-0' >
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Entrevista</h4>

                            <p className='psty'>
                            La entrevista consiste en la instancia ideal donde el
                            paciente puede expresar sus intereses, objetivos y dudas. Además, el nutricionista
                            le solicitará cierta información sobre sus antecedentes de salud, habitos alimenticios
                            y saludables al paciente.
                            </p>
                            <p className='psty'>
                            Durante esta instancia, el paciente puede dar a conocer abiertamente sus hábitos alimenticios
                            y relación con la comida, sin temor a ser juzgado, ya que el ojetivo de
                            esta instancia es crear una alianza entre paciente y nutricionista basada en la confianza
                            y transparencia, con el fin de abordar adecuadamente sus objetivos. 
                            </p>

                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <video src={Video} className='rounded video2sty' type='video/mp4' controls></video>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* EVALUACIÓN FÍSICA */}
            <div className='row mb-5 mx-0' >
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Evaluación física</h4>
                            <p className='psty'>
                            La evaluación física puede ser realizada por el paciente o alguien que lo asista, el cual deberá tomar 
                            los indicadores de peso, talla y circunferencia de cintura y cadera. Para realizar las mediciones de forma correcta,
                            debe descargar el siguiente <NavLink to='/Instructivo-mediciones' target='_blank' rel='help'>instructuvo de
                             mediciones</NavLink> donde se explica el paso a paso para
                            realizar cada medición adecuadamente.
                            </p>
                            <p className='psty'>
                            En caso de tener dudas puede consultar con su nutricionista para realizar las mediciones.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img className='imgsty2 rounded' src={Img3} alt='Medicion fisica'></img>
                            
                        </div>
                    </div>


                </div>
                <div className='col-1'></div>
            </div>

            {/* RESULTADOS EVALUACIÓN FÍSICA */}
            <div className='row mx-0' >
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='row mb-3 d-flex justify-content-center mx-0 px-0'>
                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Resultados mediciones</h4>
                            <p className='psty'>
                                Las mediciones antropométricas nos entregan como resultado indicadores relacionados con la proporcionalidad
                                corporal del usuario y el estado de salud de este.
                            </p>
                        </div>
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>
                            <div className='col-12 col-lg-4 mb-3 mb-lg-0 imgMedSty'>
                                <h5 className='text-center mt-2 textsty1'>índice de Masa Corporal</h5>
                                <img src={Img2} alt='Composición corporal' className='w-100'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            {/* INTERVENCION NUTRICIONAL */}
            <div className='row mb-5 mx-0 '>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Intervención nutricional</h4>
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

export default AsesoriaNutOnline;