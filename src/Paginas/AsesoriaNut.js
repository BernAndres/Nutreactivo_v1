import React from 'react';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import CuerpoAsesoriaNut from '../componentes/CuerpoAsesoriaNut';

function AsesoriaNut() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <CuerpoAsesoriaNut/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaNut;