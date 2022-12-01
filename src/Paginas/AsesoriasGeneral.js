import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
import AsesoriasTipos from '../componentes/AsesoriasTipos';
import Footer from '../componentes/Footer';

function AsesoriasGeneral() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <NavBack/>
            <div style={{height: '100px'}}/>
            <AsesoriasTipos/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriasGeneral;