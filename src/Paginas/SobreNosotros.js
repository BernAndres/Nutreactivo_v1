import React from 'react';
import Navbar from '../componentes/Navbar';
import CuerpoSobreNosotros from '../componentes/CuerpoSobreNosotros';
import Footer from '../componentes/Footer';

function SobreNosotros() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <CuerpoSobreNosotros/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default SobreNosotros;