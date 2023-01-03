import React from 'react';
import Bar from '../../componentes/Bar2';
import Navbar from '../../componentes/Navbar2';
import Footer from '../../componentes/Footer';
import Img from '../../imgs/img_comida_1.jpg';

function Articulo1(){
    return(
        <>
            <Bar/>
            <Navbar/>
            <div className='espacio1'/>

            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'> 
                        <h2 className=' fw-bold display-6 textsty1'>HOLA</h2>
                    </div>
                </div>

                {/* Parrafo con imagen */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <div className='row'>
                            <div className='col-12 col-lg-7 psty'>
                                <h4 className='textsty1'>
                                    Holaaa
                                </h4>
                                <p className='psty'>
                                    soy un parrafooo
                                </p>
                            </div>
                            <div className='col-12 col-lg-5 d-flex justify-content-end'>
                                <img src={Img} className='imgsty2 rounded'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='textsty1'>
                            Holaaa
                        </h4>
                        <p className='psty'>
                            <b>Hola:</b> <br/>
                            soy un parrafooo
                        </p>
                    </div>
                </div>

            </div>

            <div className='espacio1'/>
            <Footer/>
        </>
    )
}

export default Articulo1;