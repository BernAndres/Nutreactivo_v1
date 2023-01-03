import React from 'react';
import '../App.css';
import Manzana from '../imgs/img_manzana.png'
import Online from '../imgs/img_online.png'
import EvFisica from '../imgs/img_cuerpo.png'
import Pesa from '../imgs/img_pesa_1.png'
import { NavLink } from "react-router-dom";

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function IniServicios(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        <div className='container-fluid'>
            <div className='row mb-5'>
                <h2 className='d-flex display-6 fw-semibold text-tertiary justify-content-center textsty1'>
                  SERVICIOS
                </h2>
            </div>
            <div className='row d-flex justify-content-evenly '>
                {/* asesoria nutricional */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={Manzana} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center textsty1'>Consulta nutricional</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>presencial</p>
                    <div className='mb-4 mx-3 text-tertiary psty2' style={{textAlign: 'justify'}}>
                    Asesoría para la mejora del rendimiento deportivo, composición corporal,  estado de salud,
                    y manejo de enfermedades y condiciones de indole nutricional. Incluye evaluación física.
                    </div> 
                    <NavLink to='/Asesoria-nutricional-presencial' className='text-center psty'>Ver más</NavLink>
                </div>

                {/* asesoria nutricional online */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={Online} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center textsty1'>Consulta nutricional</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>online</p>
                    <div className='mb-4 mx-3 text-tertiary psty2' style={{textAlign: 'justify'}}>
                    Asesoría para la mejora del rendimiento deportivo, composición corporal,  estado de salud,
                    y manejo de enfermedades y condiciones de indole nutricional. 
                    </div> 
                    <NavLink to='/Asesoria-nutricional-online' className='text-center psty'>Ver más</NavLink>
                </div>

                {/* Evaluación física */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={EvFisica} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className=' h2 text-tertiary text-center textsty1'>Evaluación física</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>presencial</p>
                    <div className='mb-4 mx-3 text-tertiary psty2' style={{textAlign: 'justify'}}>
                    Evaluación física para la determinación de la composición corporal, somatocarta, 
                    y otros indicadores de interes deportivo. Mediciones relizadas bajo los estándares ISAK 1.
                    </div> 
                    <NavLink to='/Evaluacion-fisica' className='text-center psty'>Ver más</NavLink>
                </div>

                {/*  nutricional deportiva */}
                <div className='col-10 col-md-5 col-lg-2 mb-4 box1sty'>
                    <div className='mb-2 mt-3'><img  src={Pesa} alt="icon" style={{height: '75px'}}></img></div>
                    <h4 className='h3 text-tertiary text-center textsty1'>Plan de entrenamiento</h4>
                    <p className='h5 text-tertiary text-center mb-4 textsty1'>online</p>
                    <div className='mb-4 mx-3 text-tertiary psty2' style={{textAlign: 'justify'}}>
                    Asesoría deportiva para la mejora de rendimiento, ganancia de fuerza y masa muscular
                    dirigida a deportistas y personas que busquen una vida más activa.
                    
                    </div> 
                    <NavLink to='/Asesoria-deportiva' className='psty'>Ver más</NavLink>
                </div>


            </div>
        </div>
    )
}

export default IniServicios;