import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
import RecPrevias from '../componentes/RecPrevias';
import MedResFisicos from '../componentes/MedResFisicos';
import Valores from '../componentes/Valores3';
import Footer from '../componentes/Footer';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function EvFisica() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <> 
            <Bar/>
            <Navbar/>
            <NavBack/>
            <div style={{height: '150px'}}/>
            {/* INTRO */}
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Evaluación física</h4>
                        <p className='psty'>
                        Evaluación antropométrica para deportistas según estandares ISAK 1. 
                        Obtendrás todos los resultados de tus mediciones por medio del Software
                        nutricional <a target="_blank" rel='external' href="https://www.5componentes.com/">5componentes</a>.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
            <RecPrevias/>
            <MedResFisicos/>
            <Valores/>
            <div style={{height: '100px'}}/>
            <Footer/>

        </>
    )
}

export default EvFisica;