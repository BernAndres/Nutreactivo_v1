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
                            Durante la consulta, se realizará una entrevista al usuario con el fin de conocer
                            sus antecedentes clínicos de salud, estilo de vida, y hábitos alimenticios. 
                            Durante esta instancia, el usuario puede dar a conocer abiertamente sus hábitos alimenticios
                            y relación con la comida, sin temor a ser juzgado, puesto que el ojetivo de
                            esta instancia es crear una alianza entre usuario y nutricionista basada en la confianza
                            y transparencia, con el fin de abordar adecuadamente sus objetivos. 
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