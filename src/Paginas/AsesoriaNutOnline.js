import React from 'react';
import '../App.css';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Valores from '../componentes/Valores2';
import Footer from '../componentes/Footer';
import { NavLink } from 'react-router-dom';
import Video from '../videos/video3.mp4';
import Img1 from '../imgs/img_comida_2.png';
import Img2 from '../imgs/img_medicion_6.jpg';
import Img3 from '../imgs/img_imc_2.png';
import Img4 from '../imgs/img_circunferencia_cintura.png';
import Img5 from '../imgs/img_indice_cintura_cadera.png';

function AsesoriaNutOnline() {
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
                            <h3 className='h2 fw-bold display-4 mb-4 textsty1'>Asesoría Nutricional Online</h3>
                            <p className='psty'>
                            Si eres amante del deporte, buscas una vida más saludable, y quieres darle a tu cuerpo la
                            nutrición que requiere, asesorate con nutricionistas expertos en nutrición para el deporte y salud.
                            En Nutreactivo encontraras nutricionistas comprometidos con sus pacientes, que te ayudarán 
                            a lograr una alimentación equilibrada que potencie tu salud y rendimiento deportivo.
                            </p>
                            <p className='psty'>
                            Modalidad no recomendada para deportistas de nivel competitivo.
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

                        <div className='bg-quaternary  px-2 px-lg-5 py-3 rounded psty'>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>1</div>
                                <p className='mx-0 my-0 pe-0 pe-lg-5'>
                                Debes contar con un computador con camara web o celular.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>2</div>
                                <p className='mx-0 my-0'>
                                Asegurate de tener una buena conexión a internet.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>3</div>
                                <p className='mx-0 my-0'>
                                Tener instalada la aplicación Zoom, mediante la cual se realizará la teleconsulta.
                                </p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>4</div>
                                <p className='mx-0 my-0'>
                                Se recomienda buscar un ambiente tranquilo para la consulta.
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
                            Durante la entrevista el nutricionista le solicitará al paciente información sobre sus
                            hábitos alimenticios y antecedentes de salud. Esta información no será utilizada con 
                            otro fin que no sea en la misma atención del paciente.
                            </p>
                            <p className='psty'>
                            La entrevista tiene una duración de 20-30 minutos, instancia donde también el paciente
                            puede dar a conocer sus intereses, objetivos y dudas. 
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            {/* <video src={Video} className='rounded video2sty' type='video/mp4' controls></video> */}
                            <iframe width="300px" height="400px"
                            src="https://www.youtube.com/embed/InqcR3w_V5Y">
                            </iframe>
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
                            Al tratarse de una modalidad online,
                            la evaluación física debe ser realizada por el paciente o alguien que lo asista, el cual deberá tomar 
                            los indicadores de peso, talla, circunferencia de cintura y de cadera. Para realizar las mediciones de forma correcta,
                            debe descargar el siguiente <a href='https://drive.google.com/drive/folders/1OBqvgz_n_aBNyMVIxbl6lN7m3T7ljtsa?usp=sharing' 
                                                           target='_blank' 
                                                           rel='help'>instructuvo de mediciones</a>, donde
                            se explica el paso a paso para realizar cada medición. 
                            </p>
                            <p className='psty'>
                            Si tiene dudas, contacte a su nutricionista tratante para que lo asista.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img className='imgsty1 rounded' src={Img2} alt='Medicion fisica'></img>
                            
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
                                Las mediciones físicas nos entregan una serie de indicadores orientados al 
                                estado de salud del paciente. Estos indicadores nos dan una visión del estado nutricional 
                                y el riesgo de desarrollar complicaciones metabólicas a futuro.
                            </p>
                        </div>
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>
                            <div className='col-12 col-lg-3 mb-3 mb-lg-0 imgMedSty'>
                                <h5 className='text-center mt-2'>Índice de masa corporal</h5>
                                <img src={Img3} alt='Composición corporal' className='w-100'></img>
                            </div>
                            <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                                <h5 className='text-center mt-2'>Circunferencia de cintura</h5>
                                <img src={Img4} alt='Composición corporal' className='w-100'></img>
                            </div>
                            <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                                <h5 className='text-center mt-2'>índice cintura/cadera</h5>
                                <img src={Img5} alt='Somatocarta' className='w-100'></img>
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
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Plan de alimentación personalizado</h4>
                        <p className='psty'>
                            Cada plan de alimentación es totalmente personalizado, 100% enfocado en los objetivos del usuario,
                            y adecuado a las necesidades de energía y nutrientes de cada paciente.
                        </p>
                        <p className='psty'>
                            El plan de alimentación será enviado durante los 3 días habiles después de la consulta.
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