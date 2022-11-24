import '../App.css';
import Alvaro from '../imgs/img_nutricionista_alvaro_1.png'
import Diego from '../imgs/img_nutricionista_diego.png'
import { NavLink } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function IniConsulta(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        // ASESORÍAS
        <div className="container-fluid">
            <div className='row d-flex justify-content-center mb-3'>
                <h2 className='col-10 text-tertiary display-6 fw-semibold mb-5 d-flex align-items-center'>
                    NUTRICIONISTAS
                </h2>
            </div>
            <div className="row d-flex mb-5 d-flex justify-content-evenly" data-aos="fade-up">
                {/* alvaro */}
                <div className='col-10 col-md-3 py-5 mb-3 d-flex flex-column align-items-center bg-quinary rounded'>
                    <img src={Alvaro} className='rounded-circle w-75 mb-3'></img>
                    <h3 className='text-tertiary mb-3'>Álvaro Cañete</h3>
                    <h4 className='text-tertiary mb-3'>Nutricionista</h4>
                    <p className='mx-3 mb-3 text-tertiary' style={{textAlign: 'justify'}}>
                        Nutricionista titulado con distinción de la Universidad de Valparaíso. Diplomado en Nutrición
                        Deportiva y Fitness Universidad de los Andes, certificado en Nutrición, Ejercicio y Rendimiento Deportivo, 
                        certificado en Alimentación y Nutrición Vegetariana Instituto Universitario Vive Sano.
                    </p>
                </div>
                 {/* diego */}
                 <div className='col-10 col-md-3 py-5 mb-3 d-flex flex-column align-items-center bg-quinary rounded'>
                    <img src={Diego} className='rounded-circle w-75 mb-3'></img>
                    <h3 className='text-tertiary mb-3'>Diego Hernandez</h3>
                    <h4 className='text-tertiary mb-3'>Nutricionista</h4>
                    <p className='mx-3 mb-3 text-tertiary' style={{textAlign: 'justify'}}>
                        Nutricionista titulado con distinción de la Universidad de Valparaíso, antropometrista
                        ISAK nivel I, estudiante de Pedagogía en Educación Física.
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default IniConsulta;