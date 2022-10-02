import React from 'react';
import '../App.css';
import Manzana from '../imgs/img_manzana.png'
import Deporte from '../imgs/img_deporte_2.png'
import Online from '../imgs/img_online.png'
import EvFisica from '../imgs/img_cuerpo.png'

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AsesoriasTipos(){
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return(
        <div className='container-fluid mt-5'>
            <div className='row '>
                <div className='col-1'></div>
                <div className='col-10 d-flex flex-column'>
                    <div className='d-flex flex-column flex-lg-row align-items-center mb-5 justify-content-lg-evenly'>
                    {/* Cuadro 1 */}
                        <div data-aos="fade-up" className='col-12 col-lg-4 rounded mb-5 mb-lg-0 px-4 py-4 bg-quaternary align-content-start boxsty'>
                            <div className='mb-2'><img  src={Deporte} alt="icon" style={{height: '50px'}}></img></div>
                            <h4 className='fw-bold h2 text-tertiary'>Asesoría nutricional deportiva</h4>
                            <div className='mb-3 text-tertiary'>
                            Asesoría nutricional dirigida a deportistas y personas físicamente activas que busquen
                            mejorar su rendimiento, composición corporal y salud.
                            </div> 
                            <a href='/Asesoria-nutricional-deportistas' className=''>Ver más</a>
                        </div> 
                    {/* Cuadro 2 */}
                        <div data-aos="fade-up" className='col-12 col-lg-4 rounded px-4 py-4 bg-quaternary align-content-start boxsty'>
                            <div className='mb-2'><img  src={Manzana} alt="icon" style={{height: '50px'}}></img></div>
                            <h4 className='fw-bold h2 text-tertiary'>Asesoría nutricional</h4>
                            <div className='mb-3 text-tertiary'>
                            Asesoría nutricional dirigida para el control de peso, mejora de la composición 
                            corporal y manejo de enfermedades de índole nutricional.
                            </div> 
                            <a href='/Asesoria-nutricional' className=''>Ver más</a>
                        </div> 
                    </div>
                    <div className='d-flex flex-column flex-lg-row align-items-center justify-content-lg-evenly'>
                    {/* Cuadro 3 */}
                        <div data-aos="fade-up" className='col-12 col-lg-4 rounded mb-5 mb-lg-0 px-4 py-4 bg-quaternary align-content-start boxsty'>
                            <div className='mb-2'><img src={Online} alt="icon" style={{height: '50px'}}></img></div>
                            <h4 className='fw-bold h2 text-tertiary'>Asesoría nutricional online</h4>
                            <div className='mb-3 text-tertiary'>
                            Asesoría nutricional dirigida para personas físicamente activas, control de peso y condiciones
                             de salud de índole nutricional.
                            </div> 
                            <a href='/Asesoria-nutricional-online' className=''>Ver más</a>
                        </div> 
                    {/* Cuadro 4 */}
                        <div data-aos="fade-up" className='col-12 col-lg-4 rounded px-4 py-4 bg-quaternary align-content-start boxsty'>
                            <div className='mb-2'><img src={EvFisica} alt="icon" style={{height: '50px'}}></img></div>
                            <h4 className='fw-bold h2 text-tertiary'>Evaluación física</h4>
                            <div className='mb-3 text-tertiary'>
                                Evaluación antropométrica para deportistas, medición de parámetros físicos
                                según estándares ISAK 1.
                            </div> 
                            <a href='/Evaluacion-fisica' className=''>Ver más</a>
                        </div> 
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default AsesoriasTipos;