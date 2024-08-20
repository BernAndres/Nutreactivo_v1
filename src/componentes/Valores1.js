import React from 'react';
import '../App.css';
import './style/valores.css';

function Valores1() {
    return (
        <div className='container-fluid mb-5'>
            <h4 className='col-10 col-lg-9 m-auto h2 fw-bold display-6 mb-3 textsty1'>Valores</h4>
            <p className='col-10 col-lg-9 m-auto psty mb-5'>Servicio reembolsable por isapre. El valor final dependerá del plan de salud del usuario.</p>
            <div className='row m-auto col-10 col-lg-9 d-flex flex-column flex-lg-row justify-content-around align-items-center'>
                {/* 1 */}
                <div className='col-12 col-md-10 col-lg-3 bg-primary px-4 py-3 mb-3 boxValorSty'>
                    <p className='h1 fw-bold text-white text-center mb-4'>28.000 clp</p>
                    <p className='h4 fw-bold text-white text-center mb-5'>Consulta nutricional</p>
                    <p className='psty2 text-white'>
                        La sesion incluyen plan nutricional enfocado en los objetivos del deportista + evaluación física
                        según el estandar deportivo ISAK 1.
                    </p>
                    <p className='psty2 text-white'>Duración: 45min.</p>
                    <p className='psty2 text-white'>Pago: Efectivo, debito o crédito.</p>
                </div>
                {/* 2 */}
                <div className='col-12 col-md-10 col-lg-3 bg-primary px-4 py-3 mb-3 boxValorSty'>
                    <p className='h1 fw-bold text-white text-center mb-4'>50.000 clp</p>
                    <p className='h4 fw-bold text-white text-center mb-3'>Consulta nutricional + 1 control</p>
                    <p className='psty2 text-white'>
                        Ambas sesiones incluyen plan nutricional o reajuste de este + evaluación física según el estandar
                        deportivo ISAK 1.
                    </p>
                    <p className='psty2 text-white'>Recomendado para usuarios con objetivos a corto plazo.</p>
                    <p className='psty2 text-white'>Sin límite de tiempo entre la primera y segunda sesión.</p>
                    <p className='psty2 text-white'>Duración: 45min por sesión.</p>
                    <p className='psty2 text-white'>Pago: Efectivo, debito o crédito.</p>
                </div>
                {/* 3 */}
                <div className='col-12 col-md-10 col-lg-3 bg-primary px-4 py-3 mb-3 boxValorSty'>
                    <p className='h1 fw-bold text-white text-center mb-4'>75.000 clp</p>
                    <p className='h4 fw-bold text-white text-center mb-3'>Consulta nutricional + 2 controles</p>
                    <p className='psty2 text-white'>
                        Todas las sesiones incluyen plan nutricional o reajuste de este + evaluación física según el estandar
                        deportivo ISAK 1.
                    </p>
                    <p className='psty2 text-white'>Recomendado para usuarios con objetivos a mediano-largo plazo.</p>
                    <p className='psty2 text-white'>Sin límite de tiempo entre cada sesión.</p>
                    <p className='psty2 text-white'>Duración: 45min por sesión.</p>
                    <p className='psty2 text-white'>Pago: Efectivo, debito o crédito.</p>
                </div>

            </div>
        </div>
    )
}

export default Valores1;

