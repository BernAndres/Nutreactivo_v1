import React from 'react';
import '../App.css';
import Img2 from '../imgs/img_notebook.jpg'
import Img3 from '../imgs/img_medicion_6.jpg';
import Img4 from '../imgs/img_medicion_4.jpg';
import Img5 from '../imgs/img_no_disponible.png';
import Img8 from '../imgs/img_imc.png';
 
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CuerpoAsesoriaOnline(){
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
                        <h4 className='fw-bold h2 text-tertiary'>Asesoría Nutricional Online</h4>
                        <p className='psty'>
                        A continuación encontrarás en detalle que esperar en tu consulta nutricional online, 
                        la cual está dirigida a personas físicamente activas, individuos que busquen controlar 
                        su peso corporal o manejar condiciones de salud de índole nutricional, como resistencia 
                        a la insulina, diabetes, hipertensión, dislipidemia, entre otros.
                        </p>
                    </div>
                    {/* 2 - Recomendaciones pre consulta */}
                    <div className='row my-5' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Recomendaciones previas a la consulta</h4>
          
                           <ul className='psty'>
                                <li>Contar con un computador con camara web o teléfono.</li>
                                <li>Asegurate de tener una buena conexión a internet.</li>
                                <li>Descargar la aplicación Zoom mediante la cual se realizará la teleconsulta.</li>
                                <li>Busca ambiente tranquilo para la consulta, ten en cuenta que estas 
                                suelen durar 45 minutos en promedio.</li>
                           </ul>
                    
                    </div>
                    {/* 3 - Entrevista */}
                    <div className='row my-5' data-aos="fade-up">
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Entrevista</h4>
                            <p className='psty'>
                            Durante la consulta, se realiza una breve entrevista al paciente con el fin de conocer
                            sus hábitos alimenticios, antecedentes clínicos de salud, estilo de vida, entre otros.
                            Es una instancia ideal para que el paciente dé a conocer sus intereses, objetivos e inquietudes.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
                            <img src={Img2} className='rounded imgsty' alt='Entrevista online'></img>
                        </div>
                    </div>
                    {/* 4 - Ev física */}
                    <div className='row my-5' data-aos="fade-up">
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Medición física</h4>
                            <p className='psty'>
                            La evaluación física puede ser realizada por el paciente o alguien que lo asista, el cual deberá tomar 
                            los indicadores de peso, talla y circunferencia de cintura. Para realizar las mediciones de forma correcta,
                            debe descargar la siguiente “guía de medición para el paciente” donde se explica el paso a paso para
                            realizar cada medición adecuadamente. En caso de tener dudas siempre puede consultar a su nutricionista
                            la forma adecuada para realizar esta medicion.
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
                    {/* 5 - Parámetros/resultados físicos */}
                    <div className='row my-5' data-aos="fade-up">
                        <div className='row mb-3'>
                            <h4 className='fw-bold h2 text-tertiary'>Resultados mediciones</h4>
                            <p className='psty'>
                                La evaluación antropométrica entrega como resultado una visión del estado nutricional 
                                y de salud del paciente, que involucra su estado nutricional y el riesgo de desarrollar 
                                patologías asociadas. 
                            </p>
                        </div>
                        <div className='row d-flex justify-content-around mb-3 mx-0'>
                            {/* B - IMC */}
                            <div className='col-12 col-lg-4 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Índice de Masa Corporal</h6>
                                <img src={Img8} className='w-100 mb-2' alt='Indice de Masa Corporal'></img>
                                <p className='textJustify'>
                                    El Índice de Masa Corporal o IMC, es un indicador de la proporcionalidad corporal corporal.
                                    Este indicador clasifica el estado nutricional de cada individuo entre las categorías de Bajo
                                    peso, Normopeso, Sobrepeso, y obesidad grado I, II y III.
                                </p>
                            </div>
                            {/* C - No sé */}
                            <div className='col-12 col-lg-4 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Índice cintura cadera</h6>
                                <img src={Img5} className='w-100 mb-2' alt='Indice cintura cadera'></img>
                                <p className='textJustify'>
                                    Indicador es de gran utilidad para determinar el riesgo que de una persona
                                    en desarrollar trastornos metabólicos y enfermedades cardiovasculares.
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
        </div>
    )
}

export default CuerpoAsesoriaOnline;