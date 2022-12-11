import React from 'react';
import '../App.css';
import Video from '../videos/video1.mp4';


function FrontPage(){
    return(
        <div className='container-fluid vh-100 frontsty'>
            <div className='row w-100 h-100'>
                <div className='col-12 contvideosty px-0 py-0'>
                    <video src={Video} className='videosty' type='video/mp4' autoPlay muted loop>
                    </video>
                </div>
                <div className='col-12 w-100 h-100 position-absolute'>
                    <div className='position-relative d-flex flex-column h-100 w-100 d-flex justify-content-center align-items-center text-white'>
                        <p className='display-4 mx-1 fw-bold mb-3 text-center'>
                            NUTRICIÓN PARA EL DEPORTE  <br/> Y VIDA SANA
                        </p>
                        <p className='h5 mx-1 text-center'>
                            Nutricionistas especializados en nutrición, ejercicio y rendimiento deportivo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;