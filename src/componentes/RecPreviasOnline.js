import React from 'react';
import '../App.css';

function RecPreviasOnline() {
    return (
        <div className='container-fluid mb-5'>
            <div className='row mb-5 d-flex '>
                <div className='col-10 col-lg-9 m-auto'>
                    <div className='row'>
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Recomendaciones previas a la consulta</h4>

                        <div className='bg-quaternary  px-2 px-lg-5 py-3 rounded psty'>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>1</div>
                                <p className='mx-0 my-0 pe-0 pe-lg-5'>
                                    Debes contar con un computador con camara web o celular.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>2</div>
                                <p className='mx-0 my-0'>
                                    Asegurate de tener una buena conexión a internet.
                                </p>
                            </div>
                            <div className='d-flex align-items-center mb-3 mb-lg-1'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>3</div>
                                <p className='mx-0 my-0'>
                                    Tener instalada la aplicación Zoom, mediante la cual se realizará la teleconsulta.
                                </p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='bg-secondary px-3 py-2 rounded-circle fw-bold h5 me-2 mx-0 my-0'>4</div>
                                <p className='mx-0 my-0'>
                                    Se recomienda buscar un ambiente tranquilo para la consulta.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default RecPreviasOnline;