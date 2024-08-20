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
import Objetivos from '../componentes/objDeportivos';
import IntroEvFisica from '../componentes/IntroEvFisica';

function AsesoriaNutPres() {
    return (
        <>
            <Bar />
            <Navbar />
            <div className='espacio1' />
            <div className='row mb-5 mx-0'>
                <h3 className='h2 display-4 fw-bold col-10 col-lg-9 m-auto textsty1'>Consulta Nutricional</h3>
            </div>
            <div style={{ height: '20px' }} />
            <IntroConsulta />
            <div style={{ height: '20px' }} />
            <Objetivos />
            <div style={{ height: '40px' }} />
            <PlanNutDep />
            <div style={{ height: '50px' }} />
            <div className=' col-10 col-lg-9 m-auto d-flex flex-column'>
                <h4 className='h2 fw-bold display-6 mb-3 textsty1'>Evaluación física</h4>
            </div>
            <IntroEvFisica />
            <div style={{ height: '0px' }} />
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