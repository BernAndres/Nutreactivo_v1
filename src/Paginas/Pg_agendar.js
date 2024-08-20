import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import Ig from '../imgs/img_instagram_icon.png';
import Correo from '../imgs/img_correo_icon.png';
import Icon1 from '../imgs/img_icon1.png'
import Icon2 from '../imgs/img_icon2.png'
import Icon3 from '../imgs/img_icon3.png'
import Icon4 from '../imgs/img_icon8.png'
import imgInfo from '../imgs/icon_info.png';

function Agendar() {
    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '250px' }} />

            <div className='container-fluid'>

                <div className='row col-10 m-auto mb-5'>
                    <h3 className='text-center textsty1 display-6 fw-bold'>Agenda tu hora</h3>
                    <p className='fw-bold text-center text-primary h5'>
                        Selecciona el servicio que deseas solicitar para ser re dirigido a WhatsApp
                    </p>
                </div>

                <div className='row col-10 m-auto d-flex flex-column justify-content-center align-items-center'>

                    {/* <div style={{ backgroundColor: '#FAD985' }}
                        className='col-12 col-md-9 col-lg-7 mb-3 py-2 d-flex justify-content-center align-items-center redondearSty'>
                        <img src={imgInfo} className='me-3' style={{ width: '30px' }}></img>
                        <p className=' text-center mb-0 psty'>Disponibilidad solamente para días <b>sábados</b></p>
                    </div> */}

                    <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text=¡Hola! Quiero agendar una hora para consulta nutricional presencial"
                        className='col-12 col-md-9 col-lg-7 d-flex mb-3 py-3 px-4 bg-primary justify-content-center align-items-center pointer redondearSty sombra'>
                        <h4 className='h4 mb-0 fw-semibold textsty1 text-white'>Consulta nutricional presencial &nbsp;</h4>
                        <img src={Icon1} className='mb-2 col-6' style={{ width: '40px', height: '40px' }}></img>
                    </a>
                    {/* <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text=¡Hola! Quiero agendar una hora para consulta nutricional + control"
                        className='col-12 col-md-9 col-lg-7 d-flex mb-3 py-3 px-4 bg-primary justify-content-center align-items-center pointer redondearSty sombra'>
                        <h4 className='h4 mb-0 fw-semibold textsty1 text-white'>Consulta nutricional presencial + control &nbsp;</h4>
                        <img src={Icon4} className='mb-2 col-6' style={{ width: '40px', height: '40px' }}></img>
                    </a> */}
                    <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text=¡Hola! Quiero agendar una hora para consulta nutricional online"
                        className='col-12 col-md-9 col-lg-7 d-flex mb-3 py-3 px-4 bg-primary justify-content-center align-items-center pointer redondearSty sombra'>
                        <h4 className='h4 mb-0 fw-semibold textsty1 text-white'>Consulta nutricional online &nbsp;</h4>
                        <img src={Icon2} className='mb-2 col-6' style={{ width: '40px', height: '40px' }}></img>
                    </a>
                </div>
            </div>

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default Agendar;