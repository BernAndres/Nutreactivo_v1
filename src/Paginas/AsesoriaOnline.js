import React from 'react';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import CuerpoAsesoriaOnline from '../componentes/CuerpoAsesoriaOnline';

function AsesoriaOnline() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <CuerpoAsesoriaOnline/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaOnline;