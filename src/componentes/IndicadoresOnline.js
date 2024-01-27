import React from 'react';
import '../App.css';
// import Video from '../videos/video4.mp4';
import Img1 from '../imgs/img_fondoBlanco.png';
import Img2 from '../imgs/img_imc_2.png';
import Img3 from '../imgs/img_circunferencia_cintura.png';
import Img4 from '../imgs/img_indice_cintura_cadera.png';

function IndicadoresOnline() {
    return (
        <div className='container-fluid mb-5'>

            {/* Componentes corporales y somatotipo */}
            <div className='row d-flex'>
                <h4 className='h2 col-10 col-lg-9 m-auto mb-3 fw-bold display-6 mb-4 textsty1'>Resultados mediciones</h4>
            </div>

            <div className='row d-flex mb-lg-3 mb-lg-5 mx-0'>
                <div className='col-10 col-lg-9 m-auto d-flex flex-column flex-lg-row align-items-center justify-content-around'>
                    <div className='col-12  col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                        <h5 className='text-center'>
                            índice de Masa Corporal
                        </h5>
                        <div className='d-flex flex-column align-items-center'
                            style={{ position: 'relative' }}>
                            <div className='col-12 d-flex'>
                                <img src={Img1} className='col-10 col-lg-12'></img>
                            </div>
                            <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                <p className='psty2 text-primary'>
                                    Indicador de proporcionalidad corporal. Puede ser utilizado para
                                    determinar el estado nutricional del usuario, sin embargo, por su poca sensibilidad puede
                                    inducir al error, por lo que es más recomendado utilizar otros indicadores como
                                    grasa corporal o circunferencia de cintura para determinar estado nutricional.
                                </p>
                            </div>
                            <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                <img src={Img2} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                        <h5 className='text-center'>
                            Circunferencia de cintura
                        </h5>
                        <div className='d-flex flex-column align-items-center'
                            style={{ position: 'relative' }}>
                            <div className='col-12 d-flex'>
                                <img src={Img1} className='col-10 col-lg-12'></img>
                            </div>
                            <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                <p className='psty2 text-primary'>
                                    El perímetro de cintura nos entrega una mirada del estado de salud del usuario,
                                    puesto que su aumento se relaciona con una mayor prevalencia de enfermedades crónicas y
                                    aumento del riesgo cardiovascular.
                                </p>
                            </div>
                            <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                <img src={Img3} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                        <h5 className='text-center'>
                            Índice Cintura Cadera
                        </h5>
                        <div className='d-flex flex-column align-items-center'
                            style={{ position: 'relative' }}>
                            <div className='col-12 d-flex'>
                                <img src={Img1} className='col-10 col-lg-12'></img>
                            </div>
                            <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                <p className='psty2 text-primary'>
                                    Corresponde a la razón existente entre el perímetro de cintura y de cadera. Es un
                                    indicador útil para determinar el riesgo cardiovascular de una persona.
                                </p>
                            </div>
                            <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                <img src={Img4} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndicadoresOnline;

