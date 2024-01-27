import React from 'react';
import '../App.css';
// import Video from '../videos/video4.mp4';
import Img1 from '../imgs/img_fondoBlanco.png';
import Img2 from '../imgs/img_comp_corp_porc.png';
import Img3 from '../imgs/img_comp_corp_kg.png';
import Img4 from '../imgs/img_somatocarta.png';
import Img5 from '../imgs/img_pliegues.png';
import Img6 from '../imgs/img_suma_pliegues.png';
import Img7 from '../imgs/img_perimetros.png';
import Img8 from '../imgs/img_imc_2.png';
import Img9 from '../imgs/img_ffmi.png';
import Img10 from '../imgs/img_indice_cormico.png';

function MedResFisicos() {
    return (
        <div className='container-fluid mb-5'>

            {/* RESULTADOS EVALUACIÓN FÍSICA */}
            <div className='row d-flex flex-column'>

                <div className='col-10 col-lg-9 m-auto'>
                    <div className='row' data-aos="fade-up">

                        {/* Intro resultados mediciones */}
                        <div className='row mb-3 d-flex justify-content-center mx-0 px-0'>
                            <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Resultados mediciones</h4>
                            <p className='psty'>
                                La evaluación física o antropométrica nos entrega como resultado una gran variedad de
                                indicadores de interés deportivo y de salud, como lo son los componentes corporales,
                                somatotipo, índice de masa corporal, entre otros
                                indicadores físicos.
                            </p>
                            <div className='d-flex justify-content-center'>
                                <p className='mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                                    Las siguientes imágenes sobre indicadores físicos son referenciales, los resultados de la
                                    evaluación física serán entregados a través de un informe PDF.
                                </p>
                            </div>
                        </div>

                        {/* Componentes corporales y somatotipo */}
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>

                            <div className='col-12  col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Composición corporal %
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            Indicador que determina el porcentaje de masa muscular y grasa corporal
                                            del deportista.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img2} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Composición corporal KG
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            Indicador que determina los kg de masa muscular y grasa corporal
                                            del deportista.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img3} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Somatotipo
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            Indicador que grafica el cuerpo del deportista en base a la muscularidad,
                                            adiposidad y linealidad. <br /> Permite comparar el somatotipo del usuario con el
                                            de deportistas de mayor rendimiento.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img4} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pliegues, perimetros, sumatoria 6p */}
                        <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Pliegues cutáneos
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            Indicador correspondiente a los pliegues sub cutaneos realizados en la evaluación
                                            física. Nos entregan una visión del de grasa corporal del usuario. Además, nos permite
                                            determinar el porcentaje de grasa corporal.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img5} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Perímetros corporales
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            Correspondientes a brazo, cintura, cadera, muslo y pierna. Los perímetros son corregidos
                                            en base a la grasa sub cutánea, para así poder obtener el nivel real de masa
                                            muscular de cada medición.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img7} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Sumatoria 6 pliegues
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            Indicador que nos entrega otra visión del nivel de grasa corporal del usuario.
                                            Implementado mayormente en deportes colectivos como fútbol o rugby.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img6} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* IMC, FFMI, Indice cormico */}
                        <div className='row d-flex justify-content-around mb-3 mx-0'>

                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    Índice de masa corporal
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
                                        <img src={Img8} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    índice de masa magra
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            índice de gran utilidad para evaluar el nivel de masa muscular del individuo
                                            y el potencial de crecimiento de cada usuario. Valores sobre 25 en hombres y 22
                                            en mujeres se consideran como no alcanzables naturalmente,
                                            indicando un posible uso de anabólicos.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img9} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-3 mb-3 pt-2 mb-lg-0 imgMedSty rounded'>
                                <h5 className='text-center'>
                                    índice cormico
                                </h5>
                                <div className='d-flex flex-column align-items-center'
                                    style={{ position: 'relative' }}>
                                    <div className='col-12 d-flex'>
                                        <img src={Img1} className='col-10 col-lg-12'></img>
                                    </div>
                                    <div className='indicadorSty col-12 h-100 p-2 d-flex justify-content-center align-items-center '>
                                        <p className='psty2 text-primary'>
                                            índice que evalúa la proporcionalidad corporal del usuario. Valores altos indican
                                            un tronco proporcionalmente más grande, lo cual supone una ventaja competitiva
                                            para deportes como halterofilia, lucha, natación, entre otros.
                                        </p>
                                    </div>
                                    <div className='indicadorSty col-12 bg-white d-flex justify-content-center'>
                                        <img src={Img10} alt='Composición corporal' className='col-10 col-lg-12' ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MedResFisicos;

