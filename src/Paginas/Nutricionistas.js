import React from 'react';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import CuerpoNutricionistas from '../componentes/CuerpoNutricionistas';

function Nutricionistas() {
    return(
        <>
            <Navbar/>
            <div style={{height: '100px'}}/>
            <CuerpoNutricionistas/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Nutricionistas;