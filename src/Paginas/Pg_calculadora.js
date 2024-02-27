import React from 'react';
import { useState } from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';

function Calculadora() {
    const [peso, setPeso] = useState(0);
    const [talla, setTalla] = useState(0);
    const [imc, setImc] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault()
        // setImc(peso * talla)
        document.getElementById('resultado').innerText = imc;
    }


    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '250px' }} />
            {/* Esto debería ser un formulario ojo */}
            <div className='container-fluid'>
                <div className='row d-flex border'>
                    <form
                        onSubmit={handleSubmit}
                        className='col-8 d-flex flex-column justify-content-evenly align-items-center m-auto bg-primary redondearSty' style={{ height: '500px' }}>
                        <h3 className='fw-bold text-white'>Calculadora</h3>
                        <label className='col-6'>
                            <input
                                type='number'
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                                className='col-12 rounded' id="peso"></input>
                        </label>
                        <label className='col-6'>
                            <input
                                type='number'
                                value={talla}
                                onChange={(e) => setTalla(e.target.value)}
                                className='col-12 rounded' id='talla'></input>
                        </label>
                        <input type="submit" />
                        <label className='col-6'>
                            {/* <input
                                type='number'
                                value={imc}
                                className='col-12 rounded' id="peso">
                            </input> */}
                            <p id="resultado"></p>
                        </label>
                    </form>
                </div>
            </div>

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default Calculadora;