import React from 'react';
import Ig from '../imgs/img_instagram_icon.png'
import Wtsp from '../imgs/img_whatsapp_icon.png'
import Correo from '../imgs/img_correo_icon.png'
import '../App.css';

function Bar(){
    return(
      <div className='container-fluid w-100 bg-secondary d-flex justify-content-center position-fixed barsty' style={{height: '25px',}}>
          <div className='row w-100 h-100'>
            <div className='col d-flex justify-content-center h-100'>
                <a href='https://www.instagram.com/nutreactivo.cl/?hl=es-la' target='_blank' rel='external' className="d-flex align-items-center justify-content-center h-100">
                    <img src={Ig} style={{height: '60%'}} alt='Icon instagram'></img>
                </a>
                <a href='https://api.whatsapp.com/send?phone=56987307068&text=nutreactivo' target='_blank' rel='external' className="d-flex align-items-center justify-content-center ms-4 h-100">
                    <img src={Wtsp} style={{height: '60%'}} alt='Icon wtsp'></img>
                </a>
                <a href='mailto:nutreactivo@gmail.com' target='' rel='external' className="d-flex align-items-center justify-content-center ms-4 h-100">
                    <img src={Correo} style={{height: '60%'}} alt='Icon wtsp'></img>
                </a>
            </div>
          </div>
      </div>
    )
}

export default Bar;