import React from 'react';
import Navbar from '../componentes/Navbar';
import RecPrevias from '../componentes/RecPrevias';
import Entrevista from '../componentes/Entrevista';
import MedResFisicos from '../componentes/MedResFisicos';
import PlanNut from '../componentes/PlanNut';
import Valores from '../componentes/Valores1';
import Footer from '../componentes/Footer';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AsesoriaNut() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <>
            <Navbar/>
            <div style={{height: '150px'}}/>
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    {/* 1 - Intro */}
                    <div className='row' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Asesoría Nutricional</h4>
                        <p className='psty'>
                        A continuación encontrarás en detalle que esperar en tu consulta nutricional, 
                        la cual está dirigida para personas que deseen controlar su peso, mejorar su 
                        composición corporal y/o controlar enfermedades de índole nutricional.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
            <RecPrevias/>
            <Entrevista/>
            <MedResFisicos/>
            <PlanNut/>
            <Valores/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaNut;