import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import IniNutris from '../componentes/IniNutris';


function Nutricionistas() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <div style={{height: '150px'}}/>

           <IniNutris/>

            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Nutricionistas;