import React from 'react';
import '../App.css';
import Img2 from '../imgs/img_medicion_2.png';
import Img3 from '../imgs/img_medicion_3.png';
import Img4 from '../imgs/img_medicion_4.jpg';
import Img5 from '../imgs/img_medicion_5.jpg';
import Img6 from '../imgs/img_tres_componentes.png';
import Img8 from '../imgs/img_imc.png';
import Img9 from '../imgs/img_perfil_pliegues.png';
import Img10 from '../imgs/img_consulta_1.jpg';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CuerpoAsesoriaNut(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    {/* 1 - Intro */}
                    <div className='row mb-5' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Asesoría Nutricional</h4>
                        <p className='psty'>
                        A continuación encontrarás en detalle que esperar en tu consulta nutricional, 
                        la cual está dirigida para personas que deseen controlar su peso, mejorar su 
                        composición corporal y/o controlar enfermedades de índole nutricional como resistencia
                        a la insulina, diabetes, hipertensión, dislipidemia, hipo/hipertiroidismo, entre otros. 
                        </p>
                    </div>
                    {/* 2 - Recomendaciones pre consulta */}
                    <div className='row my-5' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Recomendaciones previas a la consulta</h4>
               
                           <ul className='psty'>
                                <li>Cosidera que se tomarán diversas mediciones corporales, por lo que es
                                recomendado asistir con ropa cómoda, que facilite la toma de mediciones.
                                Una buena opción es ropa deportiva como shorts, calzas cortas y peto.</li>
                                <li>En las 4 horas previas a la medición evita comer o ingerir
                                 líquidos como agua, café o té.</li>
                                <li>En las 24 horas previas, evita el consumo de bebidas alcohólicas.</li>
                                <li>Evita realizar ejercicio físico que implique sudoración 12 horas antes de la evaluación.</li>
                           </ul>
                
                    </div>
                    {/* 3 - Entrevista */}
                    <div className='row my-5' data-aos="fade-up">
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Entrevista</h4>
                            <p className='psty'>
                            Durante la consulta, se realiza una breve entrevista al paciente con el fin de conocer
                            sus hábitos alimenticios, antecedentes clínicos de salud, estilo de vida, entre otros.
                            Es una instancia ideal para que el paciente de a conocer sus intereses, objetivos e inquietudes.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
                            <img src={Img10} className='rounded imgsty'></img>
                        </div>
                    </div>
                    {/* 4 - Ev física */}
                    <div className='row my-5' data-aos="fade-up">
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Medición física</h4>
                            <p className='psty'>
                            Durante la evaluación física, el nutricionista tomará diversas mediciones corporales al paciente, 
                            como peso, estatura, pliegues y perímetros corporales. Estas mediciones son realizadas para obtener
                            indicadores físicos de relevancia respecto al estado de salud del individuo, o en el caso de deportistas,
                            relevantes para el rendimiento deportivo.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6'>
                               <div className='row'>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img4} alt='medicion fisica'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img3} alt='medicion fisica'></img>
                                    </div>
                               </div>
                               <div className='row'>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img2} alt='medicion fisica'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img5} alt='medicion fisica'></img>
                                    </div>
                               </div>
                        </div>
                    </div>
                    {/* 5 - Parámetros/resultados físicos */}
                    <div className='row my-5' data-aos="fade-up">
                        <div className='row mb-3'>
                            <h4 className='fw-bold h2 text-tertiary'>Resultados mediciones</h4>
                            <p className='psty'>
                                La evaluación antropométrica entrega como resultado una gran variedad de datos físicos del paciente,
                                como composición corporal, estado nutricional, perfil de pliegues cutáneos, masa muscular por zona, 
                                y otros indicadores. Todos los resultados antropométricos son entregados al paciente mediante el
                                Software 5componentes. 
                            </p>
                        </div>
                        <div className='row d-flex justify-content-around mb-3 mx-0'>
                            {/* A - Componentes corporales */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Componentes corporales</h6>
                                <img src={Img6} className='w-100 mb-2' alt='Componentes corporales'></img>
                                <p className='textJustify'>
                                    La composición corporal corresponde a una estimación de la distribución de los tejidos 
                                    corporales del individuo. Esta estimación se realiza en base al modelo tetracompartimental,
                                    que incluye: <b>masa muscular, masa grasa, masa ósea y masa residual.</b>
                                </p>
                            </div>
                            {/* B - IMC */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Indice de Masa Corporal</h6>
                                <img src={Img8} className='w-100 mb-2' alt='Indice de Masa Corporal'></img>
                                <p className='textJustify'>
                                    El Índice de Masa Corporal o IMC, es un indicador de la proporcionalidad corporal.
                                    Este indicador clasifica el estado nutricional de cada individuo entre las categorías de Bajo
                                    peso, Normopeso, Sobrepeso, y obesidad grado I, II y III.
                                </p>
                            </div>
                            {/* C - Perfil pliegues cutaneos */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Perfil de pliegues cutaneos</h6>
                                <img src={Img9} className='w-100 mb-2' alt='Pliegues cutaneos'></img>
                                <p className='textJustify'>
                                    Los pliegues cutáneos son un indicador de cambio, progreso y monitoreo de la 
                                    grasa corporal de cada individuo, que además nos da una visión de la distribución 
                                    de esta alrededor del cuerpo.
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <p>
                       
                            </p>
                        </div>
                    </div>
                    {/* 6 - Plan nutricional */}
                    <div className='row my-5' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Intervención nutricional</h4>
                        <p className='psty'>
                            El proceso de intervención nutricional es un proceso terapéutico donde nutricionista 
                            y paciente trabajan en conjunto por la mejora del estado de salud y/o control de condiciones
                            de salud de índole nutricional. Para lograr este objetivo, el paciente cuenta con
                            el apoyo de su nutricionista para realizar preguntas y resolver dudas, además, su nutricionista 
                            le proporcionará su plan nutricional en formato pdf, el cual incluye la prescripción del
                            tratamiento realizado, una pauta de alimentación con diversos ejemplos de comidas, tareas 
                            por realizar y material de apoyo para el paciente.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default CuerpoAsesoriaNut;