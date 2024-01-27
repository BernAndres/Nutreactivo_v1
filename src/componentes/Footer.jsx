import Ig from '../imgs/img_instagram_icon.png'
import Wtsp from '../imgs/img_whatsapp_icon.png'
import Correo from '../imgs/img_correo_icon.png'

function Footer() {
    return (
        <div className="containter-fluid py-5 mt-5 bg-primary">
            <div className="row py-5 mx-0 my-0 d-flex">
                <div className="col-10 m-auto">
                    {/* <div className="border-bottom border-white mb-3"></div> */}
                    <div className="d-flex">
                        <div className="col-6 col-lg-3 text-start text-white">
                            Contacto: <br />
                            +56987307068 <br />
                            nutreactivo@gmail.com
                        </div>
                        <div className="col-0 col-lg-6"></div>
                    </div>
                    {/* <div className="border-bottom border-white mt-3"></div> */}
                </div>
            </div>

        </div>
    )
}

export default Footer;