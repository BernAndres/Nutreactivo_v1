import Ig from '../imgs/img_instagram_icon.png'
// import Wtsp from '../imgs/img_whatsapp_icon.png'
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <div className="containter-fluid py-5 mt-5" style={{background: '#202020'}}>
            <div className="row py-5 mx-0 my-0">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="border-bottom border-white mb-3"></div>
                    <div className="d-flex">
                        <div className="col-6 col-lg-3 text-start text-white">
                            Contacto: <br/>
                            {/* +56981620295 <br/> */}
                            nutreactivo@gmail.com
                        </div>
                        <div className="col-0 col-lg-6"></div>
                        <div className="d-flex col-6 col-lg-3 justify-content-end align-items-center">
                            <a href='https://www.instagram.com/nutreactivo.cl/?hl=es-la' target='_blank' rel='external' className="rounded-circle  bg-secondary d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                <img src={Ig} style={{height: '60%'}} alt='Icon instagram'></img>
                            </a>
                            {/* <div className="rounded-circle bg-secondary ms-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                <img src={Wtsp} style={{height: '60%'}}></img>
                            </div> */}
                        </div>
                    </div>
                    <div className="border-bottom border-white mt-3"></div>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}

export default Footer;