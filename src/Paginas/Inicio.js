import React from 'react';
import Navbar from '../componentes/Navbar';
import Carousel from '../componentes/Carousel';
import CuerpoInicio from '../componentes/CuerpoInicio';
import Footer from '../componentes/Footer';

function Inicio() {
    return(
        <>
            <Navbar/>
            <Carousel />
            <div style={{height: '100px'}}/>
            <CuerpoInicio/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Inicio;