import React from 'react';
import Bar from '../../componentes/Bar2';
import Navbar from '../../componentes/Navbar2';
import Footer from '../../componentes/Footer';
import Img0 from '../../imgs/img_suples4.png';
import Img1 from '../../imgs/img_sello1.png';
import Img2 from '../../imgs/img_sello2.png';
import Img3 from '../../imgs/img_sello3.png';

function FuentesEnergia() {
    return (
        <>
            <Bar />
            <Navbar />
            <div className='espacio1' />

            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto'>
                        <h2 className=' fw-bold display-6 textsty1'>
                            Fuentes de energía según deporte
                        </h2>
                    </div>
                </div>

                {/* Video */}
                <div className='row mb-5'>
                    <div className='col-10 col-lg-8 m-auto d-flex'>
                        <iframe height="350px" className='col-12 col-md-8  m-auto redondearSty'
                            src="https://www.youtube.com/embed/VY5EZA9P1kk">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className='espacio1' />
            <Footer />
        </>
    )
}

export default FuentesEnergia;