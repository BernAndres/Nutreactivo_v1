import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Servicios from '../componentes/Servicios';
import Footer from '../componentes/Footer';

function PgServicios() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <div className='espacio1'/>
            <Servicios/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default PgServicios;