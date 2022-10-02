import React from 'react';
import '../App.css';
import Img2 from '../imgs/img_medicion_2.png';
import Img3 from '../imgs/img_medicion_3.png';
import Img4 from '../imgs/img_medicion_4.jpg';
import Img5 from '../imgs/img_medicion_5.jpg';
import Img6 from '../imgs/img_tres_componentes.png';
import Img7 from '../imgs/img_somatocarta.png';
import Img9 from '../imgs/img_phantom.png';
import Img10 from '../imgs/img_consulta_1.jpg';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CuerpoAsesoriaDep(){
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
                        <h4 className='fw-bold h2 text-tertiary'>Asesoría Nutricional deportiva</h4>
                        <p className='psty'>
                        A continuación encontrarás en detalle que esperar en tu consulta nutricional, la cual 
                        está dirigida a deportistas y personas físicamente activas que deseen mejorar su rendimiento,
                        composición corporal y salud.
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
                                como peso, estatura, pliegues y perímetros corporales. Estas mediciones servirán para obtener
                                indicadores de relevancia respecto al rendimiento deportivo del atleta, como composición corporal,
                                somatocarta, estratagema phantom, distribución de la masa muscular y otros indicadores de interés
                                deportivo.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6'>
                               <div className='row'>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img4} alt='Medición física'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img3} alt='Medición física'></img>
                                    </div>
                               </div>
                               <div className='row'>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img2} alt='Medición física'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img5} alt='Medición física'></img>
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
                            {/* D - Somatocarta */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Somatocarta</h6>
                                <img src={Img7} className='w-100 mb-2' alt='Somatocarta'></img>
                                <p className='textJustify'>
                                    Indicador de uso deportivo que permite graficar la forma 
                                    física del atleta basandose en 3 componentes: grasa, musculo y linealidad del individuo.
                                    Es útil para estimar y optimizar las aptitudesd físicas del atleta según la disciplina 
                                    deportiva que practique.
                                </p>
                            </div>
                            {/* E - Phantom */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Estratagema Phantom</h6>
                                <img src={Img9} className='w-100 mb-2' alt='Estratagema phantom'></img>
                                <p className='textJustify'>
                                    Indicador que permite evaluar la proporcionalidad y armonía corporal de cada individuo. 
                                    Esta herramienta tiene diversas aplicaciones, por ejemplo, determinar si una persona
                                    realmente tiene “brazos gruesos” en base a la proporcionalidad de su propio cuerpo.
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
                            El proceso de intervención nutricional es un proceso donde nutricionista y atleta 
                            trabajan en conjunto por la mejora del estado de salud y rendimiento del deportista.
                            Para lograr este objetivo, el paciente cuenta con el apoyo de su nutricionista para 
                            realizar preguntas y resolver dudas, además, su nutricionista le proporcionará su plan
                            nutricional de alimentación en formato pdf, el cual incluye la prescripción de la dieta,
                            plan nutricional adaptado a las distintas exigencias de cada día, planificación de timing 
                            nutricional para suplir las exigencias del entrenamiento y recuperación, 
                            además de otras estrategias de índole nutricional según sea la exigencia del atleta.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default CuerpoAsesoriaDep;