import React from 'react';
import '../App.css';


function IntroConsulta() {
    return (
        <div className='container-fluid mb-3' id="inicio1">
            <div className='col-10 col-lg-9 d-flex flex-column-reverse flex-md-row  justify-content-between m-auto mb-5'>
                <div className='col-12 col-md-5 col-lg-4 mb-3 mb-md-0 d-flex justify-content-center '>
                    <iframe height="250px" className='col-12 redondearSty'
                        src="https://youtube.com/embed/3m74gRagBaQ">
                    </iframe>
                </div>
                <div className='col-12 col-md-6 col-lg-7 d-flex flex-column justify-content-center '>
                    <h4 className='textsty1 text-primary'>Estableciendo un plan para alcanzar tus objetivos</h4>
                    <p className='psty' style={{ textAlign: 'justify' }}>
                        La consulta nutricional tiene como objetivo establecer las estrategias nutricionales
                        más adecuadas para el logro de los objetivos de cada persona, ya sean estos orientados
                        al rendimiento deportivo, composición corporal o salud.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IntroConsulta;