import React from 'react';
import Bar from '../componentes/Bar';
import NavBack from '../componentes/NavBack';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import Construccion from '../imgs/enConstruccion.png'

function Blog() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <NavBack/>
            <div style={{height: '250px'}}/>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 m-auto d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='h1'>Actualmente esta sección está en construcción u_u</h3>
                        <img src={Construccion} alt='En construccion' className='w-25'></img>
                    </div>
                </div>
            </div>

            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default Blog;