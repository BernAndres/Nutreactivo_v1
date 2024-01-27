import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import IntroEvFisica from '../componentes/IntroEvFisica';
import RecPrevias from '../componentes/RecPrevias';
import IndicadoresFisicos from '../componentes/IndicadoresFisicos';
import Valores from '../componentes/Valores3';
import Footer from '../componentes/Footer';

function EvFisica() {
    return (
        <>
            <Bar />
            <Navbar />
            <div className='espacio1' />
            <div className='row d-flex mb-5'>
                <h3 className='col-10 col-lg-9 m-auto display-4 fw-bold textSty1'>Evaluación física</h3>
            </div>
            <IntroEvFisica />
            <RecPrevias />
            <IndicadoresFisicos />
            <div style={{ height: '100px' }} />
            <Footer />

        </>
    )
}

export default EvFisica;