import React from 'react';
import '../App.css';

function PlanNutDep(){
    return(
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>    
                    <div className='row'>
                        <h4 className='h2 fw-bold display-6 textsty1'>Plan de alimentación personalizado</h4>
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
        </div>
    )
}

export default PlanNutDep;