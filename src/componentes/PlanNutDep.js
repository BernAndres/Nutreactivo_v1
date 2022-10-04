import React from 'react';
import '../App.css';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function PlanNutDep(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <div className='container-fluid mb-5' data-aos="fade-up">
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>    
                    <div className='row'>
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

export default PlanNutDep;