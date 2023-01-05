import React from 'react';
import '../App.css';
import Video from '../videos/video2.mp4';

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function Entrevista(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 mb-4 fw-bold display-6 textsty1'>Entrevista</h4>
                            <p className='psty'>
                            La entrevista consiste en la primera instancia de la consulta, donde el
                            paciente puede expresar sus intereses, objetivos y dudas. Además, el nutricionista
                            le solicitará cierta información sobre antecedentes de salud, habitos alimenticios
                            y saludables al paciente.
                            </p>
                            <p className='psty'>
                            Durante esta instancia, el paciente puede dar a conocer abiertamente sus hábitos alimenticios
                            y relación con la comida, sin temor a ser juzgado, ya que el ojetivo de
                            esta instancia es crear una alianza entre paciente y nutricionista basada en la confianza
                            y transparencia, con el fin de abordar adecuadamente sus objetivos. 
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            {/* <video src={Video} className='rounded video2sty' type='video/mp4' controls></video> */}
                            <iframe width="" height=""
                            src="https://www.youtube.com/embed/_u518cntCkY">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Entrevista;