import React from 'react';
import '../App.css';
import Manzana from '../imgs/img_manzana.png'
import Deporte from '../imgs/img_deporte_2.png'
import Online from '../imgs/img_online.png'
import EvFisica from '../imgs/img_cuerpo.png'
import { NavLink } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function IniServicios(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <div className='container-fluid' data-aos="fade-up">
            <div className='row mb-5'>
                <h2 className='d-flex display-6 fw-semibold text-tertiary justify-content-center'>
                  SERVICIOS
                </h2>
            </div>
            <div className='row d-flex justify-content-evenly '>
                {/* consulta nutricional */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-2'><img  src={Manzana} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center'>Asesoría nutricional</h4>
                    <div className='mb-3 mx-3 text-tertiary' style={{textAlign: 'justify'}}>
                    Asesoría nutricional dirigida para el control de peso, mejora de la composición 
                    corporal y manejo de enfermedades de índole nutricional.
                    </div> 
                    <NavLink to='/Asesoria-nutricional' className='text-center'>Ver más</NavLink>
                </div>
                {/* consulta nutricional deportiva */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-2'><img  src={Deporte} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className='h2 text-tertiary text-center'>Asesoría nutricional deportiva</h4>
                    <div className='mb-3 mx-3 text-tertiary' style={{textAlign: 'justify'}}>
                    Asesoría nutricional dirigida a deportistas y personas físicamente activas que busquen
                    mejorar su rendimiento, composición corporal y salud.
                    </div> 
                    <NavLink to='/Asesoria-nutricional-deportistas' className=''>Ver más</NavLink>
                </div>

                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-2'><img  src={Online} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center'>Asesoría Online</h4>
                    <div className='mb-3 mx-3 text-tertiary' style={{textAlign: 'justify'}}>
                    Asesoría nutricional dirigida para personas físicamente activas, control de peso y condiciones
                    de salud de índole nutricional.
                    </div> 
                    <NavLink to='/Asesoria-nutricional-online' className='text-center'>Ver más</NavLink>
                </div>

                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-2'><img  src={EvFisica} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center'>Evaluación física</h4>
                    <div className='mb-3 mx-3 text-tertiary' style={{textAlign: 'justify'}}>
                    Evaluación antropométrica para deportistas. Medición de parámetros físicos
                    según estándares ISAK 1.
                    </div> 
                    <NavLink to='/Evaluacion-fisica' className='text-center'>Ver más</NavLink>
                </div>

            </div>
        </div>
    )
}

export default IniServicios;