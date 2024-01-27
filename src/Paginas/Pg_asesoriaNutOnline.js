import React from 'react';
import '../App.css';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Valores from '../componentes/Valores2';
import Footer from '../componentes/Footer';
import IntroConsultaOnline from '../componentes/IntroConsultaOnline';
import RecPreviasOnline from '../componentes/RecPreviasOnline';
import IndicadoresOnline from '../componentes/IndicadoresOnline';
import PlanNut from '../componentes/PlanNutDep';
import Img1 from '../imgs/img_comida_2.png';
import Img2 from '../imgs/img_medicion_6.jpg';
import Img3 from '../imgs/img_imc_2.png';
import Img4 from '../imgs/img_circunferencia_cintura.png';
import Img5 from '../imgs/img_indice_cintura_cadera.png';

function AsesoriaNutOnline() {
    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '250px' }} />

            <div className='row d-flex'>
                <h3 className='h2 col-10 col-lg-9 fw-bold display-4 mb-5 textsty1 m-auto'>Consulta Nutricional Online</h3>
            </div>
            <IntroConsultaOnline />
            <div style={{ height: '50px' }} />
            <RecPreviasOnline />
            <div style={{ height: '50px' }} />
            <PlanNut />
            <div style={{ height: '50px' }} />
            {/* EVALUACIÓN FÍSICA */}
            <div className='row mb-5 mx-0 d-flex' >
                <div className='col-10 col-lg-9 m-auto'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Evaluación física</h4>
                            <p className='psty'>
                                Al tratarse de una modalidad online,
                                la evaluación física debe ser realizada por el paciente o alguien que lo asista, el cual deberá tomar
                                los indicadores de peso, talla, circunferencia de cintura y de cadera. Para realizar las mediciones de forma correcta,
                                debe descargar el siguiente <a href='https://drive.google.com/drive/folders/1OBqvgz_n_aBNyMVIxbl6lN7m3T7ljtsa?usp=sharing'
                                    target='_blank'
                                    rel='help'>instructuvo de mediciones</a>, donde
                                se explica el paso a paso para realizar cada medición.
                            </p>
                            <p className='psty'>
                                Si tiene dudas, contacte a su nutricionista tratante para que lo asista.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img className='imgsty1 rounded' src={Img2} alt='Medicion fisica'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '50px' }} />
            <IndicadoresOnline />
            <div style={{ height: '50px' }} />
            <Valores />
            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default AsesoriaNutOnline;