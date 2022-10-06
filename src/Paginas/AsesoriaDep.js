import React from 'react';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import RecPrevias from '../componentes/RecPrevias';
import Entrevista from '../componentes/Entrevista';
import MedResFisicos from '../componentes/MedResFisicos';
import PlanNutDep from '../componentes/PlanNutDep';
import Valores from '../componentes/Valores1';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AsesoriaDep() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <>
            <Navbar/>
            <div style={{height: '150px'}}/>
            <div className='row mb-5 mx-0' data-aos="fade-up">
                <div className='col-1'></div>
                <div className='col-10'>
                    {/* 1 - Intro */}
                    <div className='row'>
                        <h4 className='fw-bold h2 text-tertiary'>Asesoría Nutricional Deportiva</h4>
                        <p className='psty'>
                        A continuación encontrarás en detalle que esperar en tu consulta nutricional, la cual 
                    está dirigida a deportistas y personas físicamente activas que deseen mejorar su rendimiento,
                    composición corporal y salud.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
            <RecPrevias/>
            <Entrevista/>
            <MedResFisicos/>
            <PlanNutDep/>
            <Valores/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaDep;