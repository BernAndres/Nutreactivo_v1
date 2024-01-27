import '../App.css';
import Alvaro from '../imgs/img_nutricionista_alvaro_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function IniConsulta() {
    return (
        <div className="container-fluid">

            <div className='row mb-5'>
                <div className='col-10 col-lg-9 d-flex m-auto'>
                    <h2 className='textsty1 display-4 fw-bold'>
                        Nutricionistas
                    </h2>
                </div>
            </div>

            <div className='row d-flex'>
                <div className='col-10 col-lg-9 d-flex flex-column flex-md-row m-auto justify-content-between'>
                    <div className=' col-12 col-md-5 col-lg-4 mb-4 mb-md-0 d-flex'>
                        <img src={Alvaro} className='rounded-circle col-10 col-md-12 col-lg-9 m-auto'></img>
                    </div>
                    <div className=' col-12 col-md-6 col-lg-8 d-flex flex-column'>
                        <h5 className='h2 mb-5'>
                            Nutricionista Álvaro Cañete
                        </h5>
                        <div className='bg-primary px-5 py-4 redondearSty' style={{ position: 'relative' }}>
                            <FontAwesomeIcon icon={faQuoteLeft} className='text-secondary comillasSty' />
                            <p className='text-white mb-0 psty' style={{ textAlign: 'justify' }}>
                                Mi nombre es Álvaro, nutricionista con amplia experiencia trabajando con deportistas,
                                personas que buscan un cambio físico o mejorar su salud. Respecto a mi formación, estudié en
                                la Universidad de Valparaíso, donde me titulé con distinción el año 2019, soy antropometrista
                                ISAK 1, y diplomado en Nutrición Deportiva y Fitness U Andes. Además, cuento con varias
                                certificaciones en nutrición deportiva y vegetariana.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IniConsulta;