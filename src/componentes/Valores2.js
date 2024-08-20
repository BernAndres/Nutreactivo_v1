import React from 'react';
import '../App.css';

function Valores2() {
    return (
        <div className='container-fluid mb-5'>
            <h4 className='col-10 col-lg-9 m-auto h2 fw-bold display-6 mb-5 textsty1'>Valores</h4>
            <div className='row m-auto col-10 col-lg-9 d-flex flex-column flex-lg-row justify-content-around align-items-center'>
                {/* 1 */}
                <div className='col-12 col-md-10 col-lg-3 bg-primary px-4 py-3 mb-3 boxValorSty'>
                    <p className='h1 fw-bold text-white text-center mb-4'>20.000 clp</p>
                    <p className='h4 fw-bold text-white text-center mb-5'>Consulta nutricional</p>
                    <p className='psty2 text-white'>
                        La sesion incluyen plan nutricional enfocado en los objetivos del deportista.
                    </p>
                    <p className='psty2 text-white'>
                        La evaluación física es realizada por el mismo usuario con instrucción del nutricionista.
                    </p>
                    <p className='psty2 text-white'>Duración: 30min.</p>
                    <p className='psty2 text-white'>Servicio no reembolsable por isapre o fonasa.</p>
                </div>
            </div>
        </div>
    )
}

export default Valores2;

