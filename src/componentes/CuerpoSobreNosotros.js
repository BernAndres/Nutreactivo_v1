import React from 'react';
import '../App.css';

function CuerpoSobreNosotros(){
    return(
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    {/* 1 - Intro */}
                    <div className='row mb-5'>
                        <h2 className='fw-bold display-4 text-tertiary'>Sobre nosotros</h2>
                        <p>
                            Somos nutricionistas millennials especialistas en nutrición deportiva y actividad 
                            física.
                        </p>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default CuerpoSobreNosotros;