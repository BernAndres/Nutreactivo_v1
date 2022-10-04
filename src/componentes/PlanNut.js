import React from 'react';
import '../App.css';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function PlanNut(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>    
                    <div className='row' data-aos="fade-up">
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

export default PlanNut;