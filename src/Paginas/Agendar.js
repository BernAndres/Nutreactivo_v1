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

                        {/* COMENTARIO PQ ACTUALMENTE NO TENGO WTSP */}
                        {/* <p className='mb-5' style={{textAlign: 'justify'}}>
                            Haz click en el botón inferior para ser redirigido a Whatsapp, donde podrás ponerte en contacto
                            con un nutricionista para reservar una hora. Las consultas son realizadas de lunes a sábado
                            de 9am - 7pm, atenciones disponibles en Viña del Mar.
                        </p> 
                        <div className='border bg-secondary rounded d-flex justify-content-center btnAgendar'>
                            <a className="navtextstybtn px-5 py-3 w-100 text-center" target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text=">
                            AGENDA AQUÍ
                            </a>
                        </div> */}
                        <p className='mt-3 mb-5 psty' style={{textAlign: 'justify'}}>
                            ¡Contáctanos via email o instagram para agendar hora o realizar otras consultas!
                        </p>
                        <div className='w-100 d-flex justify-content-center' style={{height: '100px'}}>
                            <a href='https://www.instagram.com/nutreactivo.cl/?hl=es-la' target='_blank' rel='noreferrer' className="border rounded px-4 d-flex align-items-center justify-content-center h-100">
                                <img src={Ig} style={{height: '60%'}} alt='Icon instagram'></img>
                            </a>
                            <a href='mailto:nutreactivo@gmail.com' target='' rel='external' className="border rounded px-4 d-flex align-items-center justify-content-center ms-4 h-100">
                                <img src={Correo} style={{height: '60%'}} alt='Icon correo'></img>
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