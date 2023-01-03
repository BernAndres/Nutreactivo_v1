import React from 'react';
import '../App.css';

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function Valores3(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, []);
    return(
        <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
          {/* <div className='row' data-aos="fade-up"> */}
                    {/* <div className='row mb-3 d-flex justify-content-center mx-0 px-0'> */}
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Valores</h4>
                        <p className='psty'>
                            Valor evaluación física: 18.000 clp.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <p className='mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                                Servicio no reembolsable por planes de salud.
                            </p>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
            <div className='col-1'></div>
        </div>
    </div>
    )
}

export default Valores3;

