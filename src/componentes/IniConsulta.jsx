import '../App.css';
import Video from '../videos/video2.mp4'

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
            <div className="row d-flex" data-aos="fade-up">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-start mb-3 mb-lg-0">
                        <h2 className='text-tertiary display-6 fw-semibold d-flex align-items-center'>
                            CONSULTA NUTRICIONAL
                        </h2>
                        <div className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            En Nutreactivo encontrarás nutricionistas especialistas en nutrición, deporte y vida sana, 
                            con amplia experiencia atendiendo deportistas y personas que requieran mejorar sus hábitos de salud.
                            La consulta nutricional consiste en dos secciones:
                            </p>

                            <p style={{textAlign: 'justify'}} className='psty'>
                            <b>Entrevista nutricionista-paciente:</b> En esta instancia el paciente puede dar a conocer sus metas,
                             intereses, objetivos y dudas. Además, esta sección busca ser una instancia de confianza y transparencia
                             donde el paciente pueda expresarse abiertamente con respecto a sus hábitos y relación con la comida.
                            </p>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            <b>Evaluación física o antropométrica:</b> En esta instancia
                            el nutricionista tomará diversas mediciones corporales del paciente como peso, talla, pliegues,
                            perímetros y diámetros óseos, para así construir un perfil antropométrico completo. Para esta
                            instancia se recomienda asistir con short deportivo en caso de los hombres, y short
                            y peto deportivo en el caso de las mujeres. El paciente puede asistir solo o acompañado, y tiene 
                            la libertad de detener la medición si así lo prefiere en caso de no sentirse comoda o comodo, pudiendo
                            optar por la evaluación a través de bioimpedancia.
                            </p>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            Atenciones disponibles de lunes a sabado, de 9am a 7pm de forma online y presencial en 
                            Santiago y Viña del Mar.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <video src={Video} className='rounded video2sty' type='video/mp4' controls></video>
                        {/* <img src={Img1} className="d-block rounded-circle mt-4 mt-lg-0 imgsty" alt="Asesoria nutricional"/> */}
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
} 

export default IniConsulta;