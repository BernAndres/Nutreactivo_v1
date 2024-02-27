import '../App.css';
import { NavLink } from "react-router-dom";
import Img1 from '../imgs/img_objetivo.png';
import Img2 from '../imgs/img_salud.png';

function IniCarrusel() {
    return (

        <div className="container-fluid">
            <div className='row d-flex flex-column'>

                <div id="carouselExampleAutoplaying" className="carousel slide col-10 col-lg-9 m-auto" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <div className="carousel-item active">
                            <div className='w-100 bg-primary d-flex flex-column flex-md-row justify-content-center align-items-center carrSty'>
                                <div className=' col-9 col-md-6 col-lg-5 d-flex flex-column mb-3 mb-md-0 justify-content-start'>
                                    <p className='h-25 h2 text-white mb-3'>
                                        ¿Cómo identificar mis objetivos deportivos?
                                    </p>
                                    <NavLink to='/Objetivos-deportivos'
                                        className='h5 col-10 col-md-8 col-lg-5 text-center py-2 bg-secondary rounded'
                                        style={{ border: 'none', textDecoration: 'none', text: 'primary' }}>
                                        Saber más
                                    </NavLink>
                                </div>
                                <div className=' col-9 col-md-3 col-lg-3 d-flex flex-column align-items-center'>
                                    <img src={Img1} className='col-8 col-md-10 col-lg-6 ms-0 ms-md-5'></img>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='w-100 bg-primary d-flex flex-column flex-md-row justify-content-center align-items-center carrSty'>
                                <div className='col-9 col-md-6 col-lg-5 d-flex flex-column mb-3 mb-md-0 justify-content-start'>
                                    <p className='h-25 h2 text-white mb-3'>
                                        ¿Cómo conocer mi estado nutricional de forma rápida?
                                    </p>
                                    <NavLink to='/Antropometria/Indicadores-generales-salud'
                                        className='h5 col-10 col-md-8 col-lg-5 text-center py-2 bg-secondary rounded'
                                        style={{ border: 'none', textDecoration: 'none', text: 'primary' }}>
                                        Saber más
                                    </NavLink>
                                </div>
                                <div className='col-9 col-md-3 col-lg-3 d-flex flex-column align-items-center '>
                                    <img src={Img2} className='col-8 col-md-10 col-lg-6 ms-0 ms-md-5'></img>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default IniCarrusel;