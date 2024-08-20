import React from 'react';
import img1 from '../imgs/img_corriendo.png';
import img2 from '../imgs/img_grasa.png';
import img3 from '../imgs/img_musculo.png';
import '../App.css';
import './style/objDeportivos.css';
import { NavLink } from "react-router-dom";

function ObjDeportivos() {

    return (
        <div className='container-fluid mb-5'>
            <div className='col-10 col-md-9 col-lg-7 d-flex flex-md-row justify-content-center  mb-3 mx-auto'>
                {/* item 1 */}
                <NavLink to="/Mejorar-rendimiento"
                    className='col-4 px-3 py-2 py-md-3 d-flex flex-column flex-md-row align-items-center justify-content-center objetivosSty'
                    style={{ background: '#F5AA38', borderRadius: '20px 0 0 20px', textDecoration: 'none' }}>
                    <img className='imgObjetivosSty' src={img1}></img>
                    <p className='my-0 textObjetivosSty'>
                        Mejorar<br />rendimiento
                    </p>
                </NavLink>
                {/* item 2 */}
                <NavLink to="/disminuir-grasa-corporal"
                    className='col-4 px-3 py-2 py-lg-3 d-flex flex-column flex-md-row  align-items-center justify-content-center objetivosSty'
                    style={{ background: '#FA1671', textDecoration: 'none' }}>
                    <img className='imgObjetivosSty px-1' src={img2}></img>
                    <p className='my-0 textObjetivosSty'>
                        Perder <br /> grasa
                    </p>
                </NavLink>
                {/* item 3 */}
                <NavLink to="/aumentar-masa-muscular"
                    className='col-4 px-3 py-2 py-lg-3 d-flex flex-column flex-md-row  align-items-center justify-content-center objetivosSty'
                    style={{ background: '#342DFA', borderRadius: '0 20px 20px 0', textDecoration: 'none' }}>
                    <img className='imgObjetivosSty' src={img3}></img>
                    <p className='my-0 textObjetivosSty'>
                        Ganar<br />musculo
                    </p>
                </NavLink>
            </div>
        </div>
    )
}

export default ObjDeportivos;