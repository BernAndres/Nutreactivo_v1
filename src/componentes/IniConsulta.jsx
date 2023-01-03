import '../App.css';
import Video from '../videos/video5.mp4'
// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function IniConsulta(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        // ASESORÍAS
        <div className="container-fluid">
            <div className="row d-flex">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-start mb-3 mb-lg-0">
                        <h2 className='text-tertiary display-6 fw-semibold d-flex align-items-center textsty1'>
                            CONSULTA NUTRICIONAL
                        </h2>
                        <div className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                            <p style={{textAlign: 'justify'}} className='psty2'>
                            En Nutreactivo encontrarás nutricionistas especialistas en nutrición, deporte y vida sana, 
                            con amplia experiencia atendiendo deportistas y personas que requieran mejorar sus hábitos de salud.
                            </p>

                            <p className='psty2'>
                            La consulta presencial tiene una duración de aproximadamente 50 minutos. Inicia con una Entrevista
                            entre nutricionista y paciente, instancia donde el paciente puede dar a conocer sus intereses, objetivos
                            y dudas. Además, el nutricionista indagará sobre los antecedentes de salud del paciente. La segunda 
                            sección consiste en la evaluación física, donde el nutricionista tomará diversas mediciones físicas
                            del paciente como peso, talla, pliegues, perímetros y diamétros oseos, siguiendo el protocolo de
                            medición ISAK 1. En caso de tratarse de consulta online, el paciente 
                            </p>

                            <p className='psty2'>
                            Posterior a la consulta, el paciente recibirá su plan nutricional personalizado dentro de 
                            los 2 dias habiles siguientes vía email, junto a material complementario. Además, tendrá acceso
                            a todos los resultados de sus mediciones físicas a través del software nutricional
                            5componentes. En caso de tratarse de consulta online, el paciente recibirá su infórme físico
                            en PDF.
                            </p>
                            <p className='psty2'>
                            Atenciones disponibles de lunes a sabado, de 9am a 7pm de forma online y presencial en 
                            Viña del Mar.
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