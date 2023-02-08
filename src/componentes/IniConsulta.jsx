import '../App.css';
// import Video from '../videos/video5.mp4'
import { NavLink } from "react-router-dom";

function IniConsulta(){
    return( 
        // ASESORÍAS
        <div className="container-fluid">
            <div className="row d-flex">
                <div className='col-1'></div>
                <div className='d-flex flex-column col-10 flex-lg-row'>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-start justify-content-start mb-3 mb-lg-0">
                        <h3 className='text-tertiary display-6 mb-4 fw-semibold d-flex align-items-center textsty1'>
                            Consulta nutricional
                        </h3>
                        <div className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                            <p style={{textAlign: 'justify'}} className='psty'>
                            En Nutreactivo encontrarás nutricionistas especialistas en nutrición deportiva, rendimiento y salud,
                            con amplia experiencia en deportistas y personas que buscan una vida más saludable.
                            </p>
                            <p className='psty'>
                            Puedes solicitar tu consulta presencial en Viña del Mar u Online vía Zoom. Haz click a continuación
                            para saber más sobre la modalidad <NavLink to='/Asesoria-nutricional-presencial'>presencial
                            </NavLink> y <NavLink to='/Asesoria-nutricional-online'>online</NavLink>.
                            </p>
                            <p className='psty'>
                            Recibirás tu plan de alimentación personalizado durante los primeros 3 días hábiles después
                            de tu consulta. Además, tendrás acceso a todos los resultados de tus mediciones físicas a través de
                            la aplicación <a href='https://www.5componentes.com/' target='_blank' rel='noreferrer'>5componentes.</a> En 
                            caso de atenderte de forma online, recibirás un informe virtual con tus mediciones.
                            </p>
                            <p className='psty'>
                            Atenciones disponibles de lunes a viernes, de 9am a 7pm, calle Limache 1724, Viña del Mar.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        {/* <video src={Video} className='rounded video2sty' type='video/mp4' controls></video> */}
                        <iframe width="" height=""
                        src="https://www.youtube.com/embed/JK3c-1FjwSc">
                        </iframe>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
} 

export default IniConsulta;