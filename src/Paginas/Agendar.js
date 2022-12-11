import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';

function Agendar() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <NavBack/>
            <div style={{height: '250px'}}/>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 m-auto d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='h1 text-tertiary mb-5'>Agenda tu hora</h3>
                        <p className='mb-5' style={{textAlign: 'justify'}}>
                            Haz click en el botón inferior para ser redirigido a Whatsapp, donde podrás ponerte en contacto
                            con un nutricionista para reservar una hora. Las consultas son realizadas de lunes a sábado
                            de 9am - 7pm, atenciones disponibles en Santiago y Viña del Mar.

                        </p>
                        <div className='border bg-secondary rounded d-flex justify-content-center btnAgendar'>
                            <a className="navtextstybtn px-5 py-3 w-100 text-center" target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text=nutreactivo">
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