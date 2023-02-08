import React from 'react';
import '../App.css';
// import Video from '../videos/video2.mp4';

function Entrevista(){
    return(
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h4 className='h2 mb-4 fw-bold display-6 textsty1'>Entrevista</h4>
                            <p className='psty'>
                            Durante la entrevista el nutricionista le solicitará al paciente información sobre sus
                            hábitos alimenticios y antecedentes de salud. Esta información no será utilizada con 
                            otro fin que no sea en la misma atención del paciente.
                            </p>
                            <p className='psty'>
                            La entrevista tiene una duración de 15-20 minutos, instancia donde también el paciente
                            puede dar a conocer sus intereses, objetivos y dudas. 
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            {/* <video src={Video} className='rounded video2sty' type='video/mp4' controls></video> */}
                            <iframe width="" height="400px"
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