import React from 'react';
import '../App.css';

function RecPrevias() {
    return (
        <div className='container-fluid mb-5'>
            {/* RECOMENDACIONES PRE CONSULTA */}
            <div className='row d-flex'>
                <div className='col-10 col-lg-9 m-auto d-flex flex-column'>
                    <h4 className='h2 mb-4 display-6 fw-bold textsty1'>Recomendaciones previas a la medición</h4>

                    <div className='bg-quaternary px-2 px-lg-5 py-3 rounded psty'>
                        <div className='d-flex align-items-center mb-3 mb-lg-1'>
                            <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>1</div>
                            <p className='mx-0 my-0 pe-0 pe-lg-5'>
                                La/el paciente debe considerar que se realizarán diversas mediciones físicas durante la
                                consulta, por lo que se recomienda que asista con ropa cómoda, que permita tomar mediciones
                                de forma sensilla. Una buena opción es asistir con short y polera deportiva.
                            </p>
                        </div>
                        <div className='d-flex align-items-center mb-3 mb-lg-1 '>
                            <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>2</div>
                            <p className='mx-0 my-0'>
                                Durante las 4 horas previas a la medición, se debe evitar ingerir comidas abundantes o ingerir
                                líquidos en exceso.
                            </p>
                        </div>
                        <div className='d-flex align-items-center mb-3 mb-lg-1 '>
                            <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>3</div>
                            <p className='mx-0 my-0'>
                                Durante las 24 horas previas a la consulta, se debe evitar el consumo de bebidas alcohólicas.
                            </p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>4</div>
                            <p className='mx-0 my-0'>
                                Se recomienda, 12 horas antes de la consulta, evitar hacer ejercicio que implique sudoración.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecPrevias;