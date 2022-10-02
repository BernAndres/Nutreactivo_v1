import React from 'react';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import CuerpoAsesoriaDep from '../componentes/CuerpoAsesoriaDep';

function AsesoriaDep() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <CuerpoAsesoriaDep/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaDep;