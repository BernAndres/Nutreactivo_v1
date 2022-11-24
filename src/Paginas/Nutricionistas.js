import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import NutriAlvaro from '../imgs/img_nutricionista_alvaro_1.png'
import NutriDiego from '../imgs/img_nutricionista_diego.png'
import Naranja from '../imgs/img_naranja.png'
import Pera from '../imgs/img_pera.png'
import IniNutris from '../componentes/IniNutris';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Nutricionistas() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <>
            <Bar/>
            <Navbar/>
            <NavBack/>
            <div style={{height: '150px'}}/>

           <IniNutris/>

            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Nutricionistas;