import Ig from '../imgs/img_instagram_icon.png'
import Wtsp from '../imgs/img_whatsapp_icon.png'
import Correo from '../imgs/img_correo_icon.png'

function Footer() {
    return (
        <div className="containter-fluid py-5 mt-5 bg-primary">
            <div className="col-12 py-5">
                <div className='col-10 col-md-9 col-lg-8 m-auto d-flex flex-column align-items-center' style={{ position: 'relative' }}>
                    <div className='w-100' style={{ height: '1px', backgroundColor: 'white' }}></div>
                    <p className='col-7 col-sm-5 col-md-4 col-lg-3 text-center bg-primary h4 text-white' style={{ position: 'absolute', top: '-15px' }}>Nutreactivo®</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;