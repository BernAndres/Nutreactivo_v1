import React from 'react';
import '../App.css';
// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function RecPrevias(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        <div className='container-fluid mb-5'>
            {/* RECOMENDACIONES PRE CONSULTA */}
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <h4 className='h2 mb-4 display-6 fw-bold textsty1'>Recomendaciones previas a la medición</h4>

                        <div className='bg-quaternary px-2 px-lg-5 py-3 rounded psty'>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>1</div>
                                <p className='mx-0 my-0 pe-0 pe-lg-5'>
                                  Se debe considerar que se realizarán diversas mediciones corporales, por lo que es
                                  recomendado asistir con ropa cómoda, que permita tomar mediciones al rededor del
                                  cuerpo. Una buena opción puede ser ropa deportiva o traje de baño.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-3 mb-lg-1 '>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>2</div>
                                <p className='mx-0 my-0'>
                                 En las 4 horas previas a la medición, evitar realizar comidas o ingerir
                                 líquidos como agua, café o té.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-3 mb-lg-1 '>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>3</div>
                                <p className='mx-0 my-0'>
                                En las 24 horas previas, evitar el consumo de bebidas alcohólicas.
                                </p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>4</div>
                                <p className='mx-0 my-0'>
                                Evitar realizar ejercicio físico que implique sudoración 12 horas antes de la evaluación.
                                </p>
                            </div>
                        </div>
                        
                           {/* <ol className='psty bg-quaternary px-5 py-4 text-primary'>
                                <li>Se debe considerar que se realizarán diversas mediciones corporales, por lo que es
                                 recomendado asistir con ropa cómoda, que permita tomar mediciones al rededor del
                                  cuerpo. Una buena opción puede ser ropa deportiva o traje de baño.</li>
                                <li>En las 4 horas previas a la medición, evitar realizar comidas o ingerir
                                 líquidos como agua, café o té.</li>
                                 <li>En las 24 horas previas, evitar el consumo de bebidas alcohólicas.</li>
                                 <li>Evitar realizar ejercicio físico que implique sudoración 12 horas antes de la evaluación.</li>
                           </ol> */}
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default RecPrevias;