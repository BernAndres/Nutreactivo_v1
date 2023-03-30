import React from 'react';
import '../App.css';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import Img1 from '../imgs/img_convenio.png';

function Convenios() {
    return(
        <>
            <Bar/>
            <Navbar/>
            <div style={{height: '250px'}}/>
            {/* INTRO */}
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12'>
                            <h3 className='h2 fw-bold display-4 mb-4 textsty1'>Convenios</h3>
                        </div>
                        <div className='col-12 col-lg-10 d-flex flex-column justify-content-center boxServSty px-5 py-4'>
                            <p className='psty '>
                            ¿Quieres incorporar a tu centro deportivo servicios de atención nutricional? Dales una mejor 
                            atención a tus clientes incorporando nutricionistas especialistas en nutrición deportiva.
                            </p>
                            <p className='psty '>
                            En Nutreactivo contamos con diversas modalidades de convenios, adaptables al tamaño de tu negocio y 
                            las necesidades que este tenga.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>


            {/* MODALIDADES */}
            <div className='row'>
                <div className='col-1'/>
                <h4 className='col-10 h2 mt-5 mb-5 fw-bold display-6 textsty1'>Modalidades</h4>
                <div className='col-1'/>
            </div>

            <div className='row d-flex flex-column flex-lg-row'>
                <div className='col-1'/>
                <div className='col-10 mx-auto col-lg-3 mb-3 mb-lg-0 rounded border px-4 py-5 shadow d-flex flex-column justify-content-between'>
                    <div>
                        <h3 className='mb-4 textsty1'>Modalidad 1</h3>
                        <table className="table mb-5 textsty1">
                            <thead>
                            <tr>
                                <th>Modalidad</th>
                                <th>Parcial</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Servicios incluidos</td>
                                <td>Mediciones físicas</td>
                            </tr>
                            <tr>
                                <td>Detalles servicio</td>
                                <td className='psty2'>Mediciones físicas según los estándares ISAK 1. Entrega
                                de los resultados a través del software 5componentes.</td>
                            </tr>
                            <tr>
                                <td>Valor</td>
                                <td>Cotiza el mejor valor según las necesidades de tu centro</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text="
                         className='w-75 py-2 bg-primary text-center text-white fw-semibold btnConvSty'>
                                Cotizar
                        </a>
                    </div>
                </div>

                <div className='col-10 m-auto col-lg-3 rounded border px-4 py-5 shadow'>
                    <h3 className='mb-4 textsty1'>Modalidad 2</h3>
                    <table className="table mb-5 textsty1">
                        <thead>
                        <tr>
                            <th>Modalidad</th>
                            <th>Completa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Servicios incluidos</td>
                            <td>Mediciones físicas<br/>Asesoría nutricional </td>
                        </tr>
                        <tr>
                            <td>Detalles servicio</td>
                            <td className='psty2'>
                            Mediciones físicas según los estándares ISAK 1. Entrega
                            de los resultados a través del software 5componentes. <br/>
                            Planificación nutricional según necesidades individuales de cada paciente, 
                            entrega en formato PDF.
                            </td>
                        </tr>
                        <tr>
                            <td>Valor</td>
                            <td>Cotiza el mejor valor según las necesidades de tu centro</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center'>
                        <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=56987307068&text="
                         className='w-75 py-2 bg-primary text-center text-white fw-semibold btnConvSty'>
                                Cotizar
                        </a>
                    </div>
                </div>

                <div className='col-1'/>
            </div>

            <div style={{height: '150px'}}></div>
            <Footer/>
        </>
    )
}

export default Convenios;