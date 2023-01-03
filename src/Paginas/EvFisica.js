import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import RecPrevias from '../componentes/RecPrevias';
import MedResFisicos from '../componentes/MedResFisicos';
import Valores from '../componentes/Valores3';
import Footer from '../componentes/Footer';
import Img1 from '../imgs/img_medicion_2.png';

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function EvFisica() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        <> 
            <Bar/>
            <Navbar/>
            <div className='espacio1'/>
            {/* INTRO */}
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 fw-bold display-4 mb-4 textsty1'>Evaluación <br/> física</h4>
                            <p className='psty'>
                            Evaluación antropométrica para la determinación de la composición corporal, somatocarta,
                            estrategema phantom y otros indicadores de interes deportivo y de salud. La evaluación física
                            o antropométrica está dirigida a deportistas de alto rendimiento y personas físicamente activas
                            que deseen un analisis detallado de sus parámetros corporales tanto deportivos como de salud.
                            </p>
                            <p className='psty'>
                            La medición se realiza según los estándares ISAK 1. Todos los resultados son entregados 
                            mediante el Software
                            nutricional <a target="_blank" rel='noreferrer' href="https://www.5componentes.com/">5componentes</a>.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img src={Img1} className='imgsty2 rounded' alt='img'></img>
                        </div>
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