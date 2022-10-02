import React from 'react';
import Navbar from '../componentes/Navbar';
import AsesoriasTipos from '../componentes/AsesoriasTipos';
import Footer from '../componentes/Footer';

function Asesorias() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <AsesoriasTipos/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Asesorias;