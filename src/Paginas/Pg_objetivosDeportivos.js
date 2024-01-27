import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';

function ObjDep() {
    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '250px' }} />

            <div className='container-fluid'>

                <div className='row mb-5'>
                    <div className='col-10 col-lg-9 d-flex m-auto'>
                        <h2 className='textsty1 display-4 fw-bold'>
                            ¿Cómo definir mis objetivos deportivos?
                        </h2>
                    </div>
                </div>

                <div className='row d-flex'>
                    <div className='col-10 col-lg-9 d-flex flex-column flex-lg-row m-auto justify-content-between'>
                        <div className='col-12 col-lg-4 mb-5 mb-lg-0'>
                            <iframe height="400px" className='col-12 redondearSty'
                                src="https://www.youtube.com/embed/j301_jhzz8c">
                            </iframe>
                        </div>
                        <div className='col-12 col-lg-7 d-flex align-items-center'>
                            <p className='psty'>
                                Para orientar nuestros objetivos deportivos, es importante prestar atención
                                a los indicadores obtenidos en la evaluación física.
                                Para deportes donde el foco está puesto en el rendimiento, podemos
                                guiarnos con el somatotipo. Por otro lado, si nuestro objetivo va por el
                                lado de trabajar la composición corporal, debemos prestar especial atención
                                al nivel de grasa corporal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default ObjDep;