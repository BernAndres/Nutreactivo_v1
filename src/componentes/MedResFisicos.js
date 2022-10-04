import React from 'react';
import '../App.css';
import Img2 from '../imgs/img_medicion_2.png';
import Img3 from '../imgs/img_medicion_3.png';
import Img4 from '../imgs/img_medicion_4.jpg';
import Img5 from '../imgs/img_medicion_5.jpg';
import Img11 from '../imgs/img_comp_corp_porc.png';
import Img12 from '../imgs/img_comp_corp_kg.png';
import Img13 from '../imgs/img_somatocarta.png';
import Img14 from '../imgs/img_phantom.png';
import Img15 from '../imgs/img_pliegues.png';
import Img16 from '../imgs/img_suma_pliegues.png';
import Img17 from '../imgs/img_perimetros.png';
import Img18 from '../imgs/img_imc_2.png';
import Img19 from '../imgs/img_indices.png';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MedResFisicos(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <div className='container-fluid mb-5'>

        {/* EVALUACIÓN FÍSICA */}
        <div className='row mb-5'>
            <div className='col-1'></div>
            <div className='col-10'>
                <div className='row' data-aos="fade-up">
                    <div className='col-12 col-lg-6'>
                        <h4 className='fw-bold h2 text-tertiary'>Medición física</h4>
                        <p className='psty'>
                            Durante la evaluación física, el nutricionista tomará diversas mediciones corporales al paciente,
                            como peso, estatura, pliegues y perímetros corporales. Estas mediciones servirán para obtener
                            indicadores de relevancia respecto al rendimiento deportivo del atleta, como composición corporal,
                            somatocarta, estratagema phantom, distribución de la masa muscular y otros indicadores de interés
                            deportivo.
                        </p>
                    </div>
                    <div className='col-12 col-lg-6'>
                           <div className='row'>
                                <div className='col-12 col-sm-6 g-0 p-1'>
                                    <img className='w-100 rounded' src={Img4} alt='Medicion fisica'></img>
                                </div>
                                <div className='col-12 col-sm-6 g-0 p-1'>
                                    <img className='w-100 rounded' src={Img3} alt='Medicion fisica'></img>
                                </div>
                           </div>
                           <div className='row'>
                                <div className='col-12 col-sm-6 g-0 p-1'>
                                    <img className='w-100 rounded' src={Img2} alt='Medicion fisica'></img>
                                </div>
                                <div className='col-12 col-sm-6 g-0 p-1'>
                                    <img className='w-100 rounded' src={Img5} alt='Medicion fisica'></img>
                                </div>
                           </div>
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
                        <h4 className='fw-bold h2 text-tertiary'>Resultados mediciones</h4>
                        <p className='psty'>
                            Las mediciones antropométricas nos entregan como resultado una gran variedad de indicadores físicos y de 
                            salud, como lo son los componentes corporales como masa muscular, grasa, ósea y residual. También otros  
                            indicadores de interés para el deportista como la somatocarta, estratagema phantom, perfil de pliegues cutáneos, 
                            perfil de perímetros corporales, índice de masa corporal e indicadores corporales como índice músculo
                            óseo, índice masa grasa, índice masa muscular, índice cintura cadera, entre otros indicadores 
                            físicos. 
                        </p>
                        <div className='d-flex justify-content-center'>
                            <p className='mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                                Las siguientes imágenes sobre indicadores físicos son referenciales, los resultados de la
                                evaluación física son entregados al usuario mediante el software <a href='https://www.5componentes.com/' target='_blank' rel='external'>5componentes.</a>
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
                            <img src={Img13} alt='Somatocarta' className='w-100'></img>
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

