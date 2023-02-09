import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import ImgGym from '../imgs/img_gym.jpg';
import ImgGym2 from '../imgs/img_gym2.jpg';

function AsesoriaDeportiva() {
    return(
        <> 
            <Bar/>
            <Navbar/>
            <div className='espacio1'/>

            {/* INTRO */}
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h3 className='h2 fw-bold display-4 mb-4 textsty1'>Plan de <br/> entrenamiento</h3>
                            <p className='psty'>
                            Plan de entrenamiento para deportistas y personas que busquen una vida más activa. En
                            nutreactivo puedes obtener tu plan mensual de entrenamiento con el que lograras un 
                            una mejor salud, mejor composición corporal y mayor rendimiento.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img src={ImgGym} className='imgsty2 rounded' alt='Entrenamiento'></img>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            
            {/* DE QUE TRATA */}
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>

                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>¿En qué consiste?</h4>

                            <p className='psty'>
                            Para entrenar de forma adecuada, además de una buena nutrición y un correcto descanso,
                            es importante contar con un plan de entrenamiento que se ajuste a nuestros objetivos y metas,
                            que contemple variantes impresindibles como la progresión de cargas y el trabajo con ciclos de 
                            entrenamiento. Estas estrategias serán fundamentales para lograr un mejor rendimiento
                            y estado de salud.
                            </p>
                            <p className='psty'>
                            En nutreactivo puedes obtener tu planificación de entrenamiento personal, enfocada para personas
                            físicamente activas o sedentarios que se dediquen o quieran empezar en el mundo del gimnasio, 
                            en busqueda de un mejor estado de salud, composición corporal y rendimiento. 
                            </p>
                            <p className='psty'>
                            El plan de entrenamiento se realiza de forma online, empezando con una reunion por Zoom 
                            entre entrenador y paciente donde se fijarán metas y objetivos. Posteriormente, recibiras
                            tu planificación mensual con ejercicios, recomendaciones y tips sobre nutrición para
                            lograr el máximo rendimiento.
                            </p>
                      
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img src={ImgGym2} className='imgsty2 rounded' alt='Deporte'></img>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Valores</h4>
                            <p className='psty'>
                                Valor plan de entrenamiento: 20.000 clp.
                            </p>
                            <div className='d-flex justify-content-center'>
                                <p className='mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                                    Servicio no reembolsable por planes de salud.
                                </p>
                            </div>
                </div>
                <div className='col-1'></div>
            </div>
  
            <div style={{height: '100px'}}/>
            <Footer/>

        </>
    )
}

export default AsesoriaDeportiva;