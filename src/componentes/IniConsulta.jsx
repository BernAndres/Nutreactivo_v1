import '../App.css';
import IntroConsulta from '../componentes/IntroConsulta';
import IntroEvFisica from '../componentes/IntroEvFisica';
import { NavLink } from "react-router-dom";


function IniConsulta() {
    return (
        // ASESORÍAS
        <div className="container-fluid">
            <div className='row d-flex flex-column'>
                <h3 className='textsty1 mx-auto mb-5 col-10 col-lg-9 display-4 fw-bold'>Consulta nutricional</h3>
                <IntroConsulta />
                <IntroEvFisica />
            </div>
        </div>
    )
}

export default IniConsulta;