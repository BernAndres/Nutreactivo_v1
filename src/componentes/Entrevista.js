import React from 'react';
import '../App.css';
import Img10 from '../imgs/img_consulta_1.jpg';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Entrevista(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row' data-aos="fade-up">
                        <div className='col-12 col-lg-6'>
                            <h4 className='fw-bold h2 text-tertiary'>Entrevista</h4>
                            <p className='psty'>
                            Durante la consulta, se realiza una breve entrevista al paciente con el fin de conocer
                            sus hábitos alimenticios, antecedentes clínicos de salud, estilo de vida, entre otros.
                            Es una instancia ideal para que el paciente de a conocer sus intereses, objetivos e inquietudes.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
                            <img src={Img10} className='rounded imgsty'></img>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Entrevista;