import '../App.css';
import IsapreColmena from '../imgs/img_isapre_colmena.png'
import IsapreBanmedica from '../imgs/img_isapre_banmedica.png'
import IsapreConsalud from '../imgs/img_isapre_consalud.png'
import IsapreNuevaMasVida from '../imgs/img_isapre_nueva_mas_vida.png'
import IsapreVidaTres from '../imgs/img_isapre_vida_tres.png'
import IsapreCruzBlanda from '../imgs/img_cruz_blanca.png'

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function IniCoverturas(){
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
    return(
        // ASESORÍAS
        <div className="container-fluid">
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <h2 className='text-tertiary display-6 fw-semibold text-start mb-5 textsty1'>
                        COBERTURA
                        {/* <img  src={Salud} style={{height: '50px', marginLeft: '10px'}} alt='icon'></img> */}
                    </h2>
                    <p className='text-start pb-3 psty'>
                        Cobertura en consulta nutricional con los siguientes planes de salud,
                        no incluye servicios online.
                    </p>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreBanmedica} className="d-block w-75" alt="Isapre banmedica"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreColmena} className="d-block w-75" alt="Isapre colmena"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreConsalud} className="d-block w-75" alt="Isapre consalud"/></div>
                    </div>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreCruzBlanda} className="d-block w-75" alt="Isapre cruz blanca"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreNuevaMasVida} className="d-block w-75" alt="Isapre nueva mas vida"/></div>
                        <div className='col-12 col-md-4 mb-3 mb-md-0'><img src={IsapreVidaTres} className="d-block w-75" alt="Isapre vida tres"/></div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
} 

export default IniCoverturas;