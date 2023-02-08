import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import RecPrevias from '../componentes/RecPrevias';
import MedResFisicos from '../componentes/MedResFisicos';
import Valores from '../componentes/Valores3';
import Footer from '../componentes/Footer';
import Img1 from '../imgs/img_medicion_2.png';

function EvFisica() {
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
                            <h3 className='h3 fw-bold display-4 mb-4 textsty1'>Evaluación <br/> física</h3>
                            <p className='psty'>
                            Si eres deportista, amante de la actividad física y deseas llevar seguimiento de todos 
                            tus parámetros físicos, evalúate con nutricionistas certificados en antropometría. 
                            Con tu medición, obtendras una evaluación física completa y detallada, incluyendo
                            importantes indicadores utilizados en el deporte de alto rendimiento, como composición corporal,
                            somatotipo, estratagema phantom, entre otros indicadores deportivos y de salud. 
                            </p>
                            <p className='psty'>
                            Todos los resultados de la evaluación serán entregados mediante el la
                            aplicación <a target="_blank" rel='noreferrer' href="https://www.5componentes.com/">5componentes</a>.
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