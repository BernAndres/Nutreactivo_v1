import React from 'react';
import Bar from '../componentes/Bar1';
import Bar2 from '../componentes/Bar2';
import Navbar from '../componentes/Navbar1';
import Navbar2 from '../componentes/Navbar2';
import FrontPage from '../componentes/FrontPage';
import Servicios from '../componentes/IniServicios';
import IniConsulta from '../componentes/IniConsulta';
import IniCoverturas from '../componentes/IniCoverturas';
import IniNutris from '../componentes/IniNutris';
import Footer from '../componentes/Footer';

function Inicio() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <Bar2/>
            <Navbar2/>
            <FrontPage />
            <div style={{height: '150px',}}/>
            <Servicios/>
            <div style={{height: '100px'}}/>
            <IniConsulta/>
            <div style={{height: '100px'}}/>
            <IniCoverturas/>
            <div style={{height: '100px'}}/>
            <IniNutris/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Inicio;