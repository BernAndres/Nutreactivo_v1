import React from 'react';
import '../App.css';
// import Video from '../videos/video4.mp4';
import Img11 from '../imgs/img_comp_corp_porc.png';
import Img12 from '../imgs/img_comp_corp_kg.png';
import Img13 from '../imgs/img_somatocarta.png';
import Img14 from '../imgs/img_phantom.png';
import Img15 from '../imgs/img_pliegues.png';
import Img16 from '../imgs/img_suma_pliegues.png';
import Img17 from '../imgs/img_perimetros.png';
import Img18 from '../imgs/img_imc_2.png';
import Img19 from '../imgs/img_indices.png';

function MedResFisicos(){
    return(
        <div className='container-fluid mb-5'>

        {/* EVALUACIÓN FÍSICA */}
        <div className='row mb-5'>
            <div className='col-1'></div>
            <div className='col-10'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Evaluación física</h4>
                        <p className='psty'>
                            Durante la evaluación física, el nutricionista tomará diversas mediciones corporales al usuario,
                            como peso, estatura, pliegues y perímetros corporales.
                            Estas mediciones servirán para obtener diversos indicadores de interés deportivo y de salud.
                        </p>
                        <p className='psty'>
                            Todas las mediciones son realizadas según los estándares ISAK nivel 1.
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            {/* <video src={Video} className='rounded video2sty' type='video/mp4' controls></video> */}
                            <iframe width="" height="400px"
                            src="https://www.youtube.com/embed/tYvFE5t76GI">
                            </iframe>
                    </div>
                </div>
            </div>
            <div className='col-1'></div>
        </div>

        {/* RESULTADOS EVALUACIÓN FÍSICA */}
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
          <div className='row' data-aos="fade-up">
                    <div className='row mb-3 d-flex justify-content-center mx-0 px-0'>
                        <h4 className='h2 fw-bold display-6 mb-4 textsty1'>Resultados mediciones</h4>
                        <p className='psty'>
                            La evaluación física o antropométrica nos entrega como resultado una gran variedad de 
                            indicadores de interés deportivo y de salud, como lo son los componentes corporales,
                            somatotipo, estrategema phantom, índice de masa corporal, entre otros
                            indicadores físicos.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <p className='mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                                Las siguientes imágenes sobre indicadores físicos son referenciales, los resultados de la
                                evaluación física son entregados al usuario mediante el software <a href='https://www.5componentes.com/' target='_blank' rel='noreferrer'>5componentes.</a>
                            </p>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-around mb-lg-3 mb-lg-5 mx-0'>
                        <div className='col-12 col-lg-3 mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Composición corporal %</h5>
                            <img src={Img11} alt='Composición corporal' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Composición corporal Kg</h5>
                            <img src={Img12} alt='Composición corporal' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Somatocarta</h5>
                            <img src={Img13} alt='Somatotipo' className='w-100'></img>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-around mb-lg-3  mb-lg-5  mx-0'>
                        <div className='col-12 col-lg-3 mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Estratagema phantom</h5>
                            <img src={Img14} alt='Estratagema phantom' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Perfil pliegues cutaneos</h5>
                            <img src={Img15} alt='Pliegues cutaneos' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Sumatoria 6 pliegues</h5>
                            <img src={Img16} alt='Sumatoria de pliegues cutaneos' className='w-100'></img>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-around mb-3 mx-0'>
                        <div className='col-12 col-lg-3 mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Perímetros corporales</h5>
                            <img src={Img17} alt='Perímetros corporales' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>índice de masa corporal</h5>
                            <img src={Img18} alt='Índice de masa corporal' className='w-100'></img>
                        </div>
                        <div className='col-12 col-lg-3  mb-3 mb-lg-0 imgMedSty'>
                            <h5 className='text-center mt-2'>Índices corporales</h5>
                            <img src={Img19} alt='índices corporales' className='w-100'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-1'></div>
        </div>

    </div>
    )
}

export default MedResFisicos;

