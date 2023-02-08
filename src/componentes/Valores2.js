import React from 'react';
import '../App.css';

function Valores2(){
    return(
    <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Valores</h4>
                        <p className='psty'>
                            Valor asesoría online: 20.000 clp.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <p className='mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                                Servicio no reembolsable por planes de salud.
                            </p>
                        </div>
            </div>
            <div className='col-1'></div>
        </div>
    </div>
    )
}

export default Valores2;

