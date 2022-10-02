import React from 'react';
import '../App.css';
import Img2 from '../imgs/img_medicion_2.png';
import Img3 from '../imgs/img_medicion_3.png';
import Img4 from '../imgs/img_medicion_4.jpg';
import Img5 from '../imgs/img_medicion_5.jpg';
import Img6 from '../imgs/img_tres_componentes.png';
import Img7 from '../imgs/img_somatocarta.png';
import Img9 from '../imgs/img_phantom.png';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CuerpoEvFisica(){
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
                        <h4 className='fw-bold h2 text-tertiary'>Evaluación física</h4>
                        <p className='psty'>
                        Evaluación antropométrica para deportistas según estandares ISAK 1. 
                        Obtendrás todos los resultados de tus mediciones por medio del Software
                        nutricional <a target="_blank" href="https://www.5componentes.com/">5componentes</a>.
                        </p>
                    </div>
                    {/* 2 - Recomendaciones pre consulta */}
                    <div className='row my-5' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Recomendaciones previas a la medición</h4>
                        
                           <ul className='psty'>
                                <li>Considera que se te realizarán diversas mediciones corporales, por lo que es
                                 recomendado asistir con ropa cómoda, que permita tomar mediciones al rededor del
                                  cuerpo. Una buena opción puede ser ropa deportiva.</li>
                                <li>En las 4 horas previas a la medición, evita realizar comidas o ingerir
                                 líquidos como agua, café o té.</li>
                                 <li>En las 24 horas previas, evita el consumo de bebidas alcohólicas.</li>
                                 <li>Evita realizar ejercicio físico que implique sudoración 12 horas antes de la evaluación.</li>
                           </ul>
                    
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
                                        <img className='w-100 rounded' src={Img4} alt='Medicion fisica'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img3} alt='Medicion fisica'></img>
                                    </div>
                               </div>
                               <div className='row'>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img2} alt='Medicion fisica'></img>
                                    </div>
                                    <div className='col-12 col-sm-6 g-0 p-1'>
                                        <img className='w-100 rounded' src={Img5} alt='Medicion fisica'></img>
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
                                <img src={Img6} alt='Componentes corporales' className='w-100 mb-2 '></img>
                                <p className='textJustify'>
                                    La composición corporal corresponde a una estimación de la distribución de los tejidos 
                                    corporales del individuo. Esta estimación se realiza en base al modelo tetracompartimental,
                                    que incluye: masa muscular, masa grasa, masa ósea y masa residual.
                                </p>
                            </div>
                            {/* D - Somatocarta */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Somatocarta</h6>
                                <img src={Img7} alt='Somatocarta' className='w-100 mb-2 '></img>
                                <p className='textJustify'>
                                    La somatocarta es una herramienta de uso deportivo la cual es empleada por deportistas de 
                                    todas las disciplinas para optimizar su rendimiento. Este indicador permite graficar la 
                                    relación existente entre 3 componentes: Masa grasa, musculatura 
                                    y linealidad del individuo, con el fin de buscar la relación ideal para cada 
                                    individuo según su disciplina deportiva.
                                </p>
                            </div>
                            {/* E - Phantom */}
                            <div className='col-12 col-lg-3 bg-quaternary p-3 mb-3 d-flex flex-column align-items-center rounded'>
                                <h6 className='fw-bold h5 text-tertiary'>Estratagema Phantom</h6>
                                <img src={Img9} alt='Estratagema phantom' className='w-100 mb-2 '></img>
                                <p className='textJustify'>
                                    Es un indicador que permite evaluar la proporcionalidad y armonía corporal de cada individuo. 
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
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default CuerpoEvFisica;