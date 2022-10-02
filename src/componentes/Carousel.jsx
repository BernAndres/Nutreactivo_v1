import React from 'react';
import '../App.css';
import Img1 from '../imgs/img_deporte_1.jpg';
import Img2 from '../imgs/img_medicion_1.png';
import { NavLink } from "react-router-dom";


function Carousel(){
    return(
        <div className='container-fluid vh-100'>
            <div className='row vh-100'>
                <div className='col-12 px-0 vh-100 '>
                    <div id="mi-carousel" className="carousel carousel-fade carousel-dark slide vh-100" data-bs-ride="false">
                    {/* Indicadores */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#mi-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#mi-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    {/* Imagenes */}
                    <div className="carousel-inner vh-100" style={{height: '90vh'}}>
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={Img1} className="d-block carouselImgSty" alt="Nutrición deportiva"/>
                            <div className="carousel-caption d-flex justify-content-end align-items-center" 
                                style={{height: '100%'}}>
                                <div className='d-flex flex-column col-12 col-md-9 col-lg-6 align-items-end'>
                                    <h2 className='display-4 display-sm-4 text-white fw-bold text-end mb-5'>Nutrición aplicada al deporte</h2>
                                    <button className='fw-bold bg-secondary border-0 rounded-5 px-5 py-2 text-primary'>
                                        <NavLink to='/Asesoria-nutricional-deportistas'>Ver más</NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={Img2} className="d-block carouselImgSty" alt="Mediciones físicas"/>
                            <div className="carousel-caption d-flex justify-content-end align-items-center" 
                                style={{height: '100%'}}>
                                <div className='d-flex flex-column col-12 col-md-9 col-lg-6 align-items-end'>
                                    <h2 className='display-4 display-sm-4 text-white fw-bold text-end mb-5'>Evaluación física y mediciones</h2>
                                    <button className='fw-bold bg-secondary border-0 rounded-5 px-5 py-2 text-primary'>
                                        <NavLink to='/Evaluacion-fisica'>Ver más</NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Botones */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#mi-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mi-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;