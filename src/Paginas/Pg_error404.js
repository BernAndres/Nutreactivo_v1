import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import ManzanaError from '../imgs/img_manzanaError.png';
import { NavLink } from "react-router-dom";

function Error404() {
    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '250px' }} />

            <div className='container-fluid'>
                <div className='row d-flex mb-5'>
                    <div className='col-10 col-md-10 col-lg-8 m-auto d-flex flex-column flex-md-row justify-content-evenly'>
                        <p className='col-12 col-md-6 display-1 fw-bold d-flex justify-content-center align-items-center'>
                            ¡Ha ocurrido un error!
                        </p>
                        <img src={ManzanaError} className='col-6 m-auto col-md-5 col-lg-3'></img>
                    </div>
                </div>
                <div className='row d-flex'>
                    <NavLink className='col-8 col-md-6 col-lg-2 bg-primary rounded d-flex justify-content-center align-items-center text-white
                    px-5 py-2 m-auto mt-5 psty' style={{ textDecoration: 'none' }} to='/'>Volver al inicio</NavLink>
                </div>
            </div>

            <div style={{ height: '200px' }} />
        </>
    )
}

export default Error404;