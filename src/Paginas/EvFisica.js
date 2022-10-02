import React from 'react';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import CuerpoEvFisica from '../componentes/CuerpoEvFisica';

function EvFisica() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <CuerpoEvFisica/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default EvFisica;