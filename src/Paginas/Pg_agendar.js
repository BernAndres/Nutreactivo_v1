import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import Ig from '../imgs/img_instagram_icon.png'
import Correo from '../imgs/img_correo_icon.png'

function Agendar() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <div style={{height: '250px'}}/>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 m-auto d-flex flex-column justify-content-center align-items-center'>
                        <p className='d-flex display-6 fw-semibold text-tertiary justify-content-center textsty1'>Agenda tu hora</p>

        
                        <div className='d-flex justify-content-center'>
                            <p className='mb-5 mx-0 mx-lg-5 my-4 px-4 px-lg-5 py-3 bg-quaternary rounded text-primary msjBoxSty'>
                            ¡Haz click en el botón inferior para agendar tu hora! 
                            Reservaciones disponibles de lunes a viernes desde 9am a 7pm en Vña del Mar y Online.
                            
                            </p>
                        </div>
                        <div className='border bg-secondary rounded d-flex justify-content-center btnAgendar'>
                            <a className="navtextstybtn px-5 py-3 w-100 text-center" target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text=">
                            AGENDA AQUÍ
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Agendar;