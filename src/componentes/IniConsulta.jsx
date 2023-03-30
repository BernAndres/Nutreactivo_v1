import '../App.css';
// import Video from '../videos/video5.mp4'
import { NavLink } from "react-router-dom";

function IniConsulta(){
    return( 
        // ASESORÍAS
        <div className="container-fluid">
           <div className='row d-flex flex-column-reverse flex-lg-row'>
                <div className='col-12 col-lg-5 mx-auto d-flex justify-content-center align-items-center boxConsSty'>
                        <iframe width="" height="400px" className='my-4 rounded'
                        src="https://www.youtube.com/embed/JK3c-1FjwSc">
                        </iframe>
                </div>
                <div className='col-10 col-lg-6 mx-auto'>
                    <h3 className='textsty1 display-4 fw-bold mx-lg-5 mt-4'>Consulta nutricional</h3>
                    <div className=' mx-lg-5 mt-4'>
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
                <div className='col-1'></div>
           </div>
        </div>
    )
} 

export default IniConsulta;