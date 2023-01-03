import React from 'react';
import '../App.css';

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function PlanNutDep(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>    
                    <div className='row'>
                        <h4 className='h2 fw-bold display-6 textsty1'>Intervención nutricional</h4>
                        <p className='psty'>
                            El proceso de intervención nutricional es un proceso donde nutricionista y atleta 
                            trabajan en conjunto por la mejora del rendimiento, composición y salud del deportista.
                            Para lograr este objetivo, el paciente cuenta con el apoyo de su nutricionista para 
                            consultar y resolver inquietudes. Además, su nutricionista proporcionará su plan
                            nutricional de alimentación en formato pdf, el cual incluye la prescripción de la dieta,
                            pauta nutricional adaptada a las distintas exigencias de la semana, planificación de timing 
                            nutricional, 
                            entre otras estrategias de índole nutricional según las necesidades del atleta.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default PlanNutDep;