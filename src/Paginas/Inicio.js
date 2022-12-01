import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
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
            <NavBack/>
            <FrontPage />
            <div style={{height: '100px',}}/>
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