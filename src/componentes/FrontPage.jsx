import React from 'react';
import '../App.css';
import Video from '../videos/video1.mp4';


function FrontPage() {
    return (
        <div className='container-fluid vh-100 frontsty'>
            <div className='row w-100 h-100'>
                {/* video */}
                <div className='col-12 contvideosty px-0 py-0'>
                    <video src={Video} className='videosty' type='video/mp4' autoPlay muted loop>
                    </video>
                </div>
                {/* texto */}
                <div className='col-12 w-100 h-100 position-absolute'>
                    <div className='position-relative d-flex flex-column h-100 w-100 d-flex justify-content-center align-items-center text-white'>
                        <h2 className='display-4 mx-1 fw-bold mb-3 text-center textsty1'>
                            NUTRICIÓN PARA EL DEPORTE  <br /> Y VIDA SANA
                        </h2>
                        <h1 className='h5 mx-1 text-center textsty1'>
                            Nutricionistas especialistas en nutrición deportiva, rendimiento y salud.
                        </h1>
                    </div>
                    <div className='text-white' style={{ position: 'relative', top: '-30px' }}>
                        <h2 className='h6 textsty1'>
                            Atenciones en Viña del Mar y Online
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;