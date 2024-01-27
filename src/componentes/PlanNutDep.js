import React from 'react';
import Img1 from '../imgs/img_icon1.png';
import '../App.css';

function PlanNutDep() {
    return (
        <div className='container-fluid mb-5'>
            <div className='row d-flex'>
                <div className=' col-10 col-lg-9 m-auto d-flex flex-column'>
                    <h4 className='h2 fw-bold display-6 mb-3 textsty1'>Plan de alimentación personalizado</h4>
                    <div className=' bg-primary redondearSty py-4 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                        <p className='psty text-white col-10 col-md-8 mx-auto  '>
                            Cada plan de alimentación es totalmente personalizado, 100% enfocado en los objetivos del usuario,
                            y adecuado a las necesidades de energía y nutrientes de cada paciente.
                        </p>
                        <div className='col-6 col-md-2 d-flex mb-3 mx-auto  mb-lg-0 '>
                            <img src={Img1} className='col-6 col-md-9 col-lg-6 m-auto'></img>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanNutDep;