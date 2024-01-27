import React from 'react';
import '../App.css';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import IntroConsulta from '../componentes/IntroConsulta';
import RecPrevias from '../componentes/RecPrevias';
import IndicadoresFisicos from '../componentes/IndicadoresFisicos';
import PlanNutDep from '../componentes/PlanNutDep';
import Valores from '../componentes/Valores1';

function AsesoriaNutPres() {
    return (
        <>
            <Bar />
            <Navbar />
            <div className='espacio1' />
            <div className='row mb-5 mx-0'>
                <h3 className='h2 display-4 fw-bold col-10 col-lg-9 m-auto textsty1'>Consulta Nutricional</h3>
            </div>
            <IntroConsulta />
            <div style={{ height: '50px' }} />
            <PlanNutDep />
            <div style={{ height: '50px' }} />
            <RecPrevias />
            <div style={{ height: '50px' }} />
            <IndicadoresFisicos />
            <div style={{ height: '50px' }} />
            <Valores />
            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default AsesoriaNutPres;