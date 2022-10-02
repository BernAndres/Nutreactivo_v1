import '../App.css';
import NutriAlvaro from '../imgs/img_nutricionista_alvaro_1.png'
import NutriDiego from '../imgs/img_nutricionista_diego_1.png'
import IsapreColmena from '../imgs/img_isapre_colmena.png'
import IsapreBanmedica from '../imgs/img_isapre_banmedica.png'
import IsapreConsalud from '../imgs/img_isapre_consalud.png'
import IsapreNuevaMasVida from '../imgs/img_isapre_nueva_mas_vida.png'
import IsapreVidaTres from '../imgs/img_isapre_vida_tres.png'
import IsapreCruzBlanda from '../imgs/img_cruz_blanca.png'
import Manzana from '../imgs/img_manzana.png'
import Naranja from '../imgs/img_naranja.png'
import Pera from '../imgs/img_pera.png'
import Online from '../imgs/img_online.png'
import EvFisica from '../imgs/img_cuerpo.png'
import Salud from '../imgs/img_salud_1.png'
import Img1 from '../imgs/img_comida_1.jpg'
import Img2 from '../imgs/img_notebook.jpg'
import Img3 from '../imgs/img_medicion_2.png'

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CuerpoInicio(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        // ASESORÍAS
        <div className="container-fluid my-5">

        {/* Sección 1 - Asesorías */}
            <div className="row d-flex mb-5" data-aos="fade-up">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-start">
                        <h2 className='text-tertiary fw-bold  display-4 d-flex align-items-center'>
                            Asesoría nutricional
                            <img src={Manzana} alt='icon' style={{height: '50px'}}></img>
                        </h2>
                        <div className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            Mejora tu rendimiento deportivo, composición corporal, o tu estado
                            de salud con nutricionistas especialistas en alimentación, deporte y actividad física. 
                            Evaluaciones en Santiago y Valparaíso.
                            </p>
                            <button className='fw-bold bg-secondary border-0 rounded-5 px-5 py-2 text-primary btnsty'>
                                <a href="/Asesorias">Ver más</a>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                        <img src={Img1} className="d-block rounded-circle mt-4 mt-lg-0 imgsty" alt="Asesoria nutricional"/>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

        <div style={{height: '50px'}}/>

        {/* Sección 2 - Asesoría online */}
            <div className="row d-flex mb-5" data-aos="fade-up">
                <div className='col-1'></div>
                <div className='d-flex flex-column-reverse col-10 flex-lg-row'>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <img src={Img2} className="d-block rounded mt-4 mt-lg-0 imgsty" alt="Asesoria online"/>
                    </div>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-start">
                        <h2 className='text-tertiary fw-bold  display-4 d-flex align-items-center'>
                            Asesoría online
                            <img  src={Online} style={{height: '50px', marginLeft: '10px'}} alt='icon'></img>
                        </h2>
                        <div className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            La asesoría nutricional online es ideal para aquellas personas que requieran mejorar su
                            alimentación y optimizar su estado de salud. En Nutreactivo encontrarás nutricionistas
                            expertos en atención y evaluación online.
                            </p>
                            <button className='fw-bold bg-secondary border-0 rounded-5 px-5 py-2 text-primary btnsty'>
                                <a href="/Asesoria-nutricional-online">Ver más</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

        <div style={{height: '50px'}}/>

        {/* Sección 3 - Ev física */}
            <div className="row d-flex mb-5" data-aos="fade-up">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-start">
                        <h2 className='text-tertiary fw-bold  display-4 d-flex align-items-center'>
                            Evaluación física
                            <img  src={EvFisica} style={{height: '50px', marginLeft: '10px'}} alt='Medicion fisica'></img>    
                        </h2>
                        <div className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            Mide tus parámetros antropométricos con nutricionistas especialistas en antropometría. Obtén
                            todos tus parámetros por medio del Software nutricional <a target="_blank" href="https://www.5componentes.com/">5componentes</a>.
                            </p>
                            <button className='fw-bold bg-secondary border-0 rounded-5 px-5 py-2 text-primary btnsty'>
                                <a href="/Evaluacion-fisica">Ver más</a>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end ">
                        <img src={Img3} className="d-block rounded-circle mt-4 mt-lg-0 imgsty" alt="Medicion fisica"/>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

        <div style={{height: '50px'}}/>

            <div className='row bg-quaternary pt-5 pb-3 pb-lg-0'> 
                <div className='col-1'></div>
                <div className='col-10 d-flex justify-content-start'><h2 data-aos="fade-up" className='text-tertiary fw-bold display-4'>Nutricionistas</h2></div>
                <div className='col-1'></div>
            </div>

        {/* Sección 3 - Álvaro */}
            <div className="row bg-quaternary pb-5">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column pe-lg-5 col-12 col-lg-6 align-items-start justify-content-center" data-aos="fade-up">
                        <h2 className='text-tertiary fw-bold d-flex align-items-center h2'>
                            Nutricionista Álvaro Cañete
                            <img  src={Pera} style={{height: '30px'}} alt='Pera'></img>
                        </h2>
                        <p style={{textAlign: 'justify'}} className='psty'>
                        Nutricionista titulado con distinción de la Universidad de Valparaíso. Diplomado en Nutrición
                        Deportiva y Fitness Universidad de los Andes, certificado en Nutrición, Ejercicio y Rendimiento Deportivo, 
                        certificado en Alimentación y Nutrición Vegetariana Instituto Universitario Vive Sano.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end" data-aos="fade-up">
                        <img src={NutriAlvaro} className="d-block rounded imgsty" alt="Nutricionsita Alvaro"/>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

        {/* Sección 4 - Diego */}
            <div className="row bg-quaternary pb-5">
                <div className='col-1'></div>
                <div className='d-flex flex-column-reverse col-10 flex-lg-row'>
                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start" data-aos="fade-up">
                        <img src={NutriDiego} className="d-block rounded imgsty" alt="Nutricionista Diego"/>
                    </div>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-center" data-aos="fade-up">
                        <h2 className='text-tertiary fw-bold d-flex align-items-center h2'>
                            Nutricionista Diego Hernandez
                            <img  src={Naranja} style={{height: '30px'}} alt='Naranja'></img>
                        </h2>
                        <p style={{textAlign: 'justify'}} className='psty'>
                        Nutricionista titulado con distinción de la Universidad de Valparaíso, antropometrista
                        ISAK nivel I, estudiante de Pedagogía en Educación Física.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

            <div style={{height: '50px'}}/>

        {/* Sección 5 - Cobertura */}
            <div className='row mt-5 mb-5' data-aos="fade-up">
                <div className='col-1'></div>
                <div className='col-10'>
                    <h2 className='text-tertiary fw-bold text-start pt-5 mb-5 display-4'>
                        Cobertura
                        <img  src={Salud} style={{height: '50px', marginLeft: '10px'}} alt='icon'></img>
                    </h2>
                    <p className='text-start pb-3 psty'>Cobertura con los siguientes planes de salud:</p>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreBanmedica} className="d-block w-75" alt="Isapre banmedica"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreColmena} className="d-block w-75" alt="Isapre colmena"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreConsalud} className="d-block w-75" alt="Isapre consalud"/></div>
                    </div>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreCruzBlanda} className="d-block w-75" alt="Isapre cruz blanca"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreNuevaMasVida} className="d-block w-75" alt="Isapre nueva mas vida"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreVidaTres} className="d-block w-75" alt="Isapre vida tres"/></div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>

        </div>
    )
} 

export default CuerpoInicio;