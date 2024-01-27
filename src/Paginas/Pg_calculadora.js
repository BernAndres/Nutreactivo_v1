import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';

function Calculadora() {
    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '250px' }} />
            {/* Esto debería ser un formulario ojo */}
            <div className='container-fluid'>
                <div className='row d-flex border'>
                    <form className='col-8 d-flex flex-column justify-content-evenly align-items-center m-auto bg-primary redondearSty' style={{ height: '500px' }}>
                        <h3 className='fw-bold text-white'>Calculadora</h3>
                        <input type='number' value='' className='col-6 rounded' id="peso"></input>
                        <input type='number' value='' className='col-6 rounded' id='talla'></input>
                        <input className='col-6 rounded'></input>
                        <button type='submit' id='boton' >Calcular</button>
                        <p id='resultado' >1</p>
                    </form>
                </div>
            </div>

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default Calculadora;