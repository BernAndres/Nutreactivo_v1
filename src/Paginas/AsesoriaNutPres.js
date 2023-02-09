import React from 'react';
import '../App.css';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import RecPrevias from '../componentes/RecPrevias';
import Entrevista from '../componentes/Entrevista';
import MedResFisicos from '../componentes/MedResFisicos';
import PlanNutDep from '../componentes/PlanNutDep';
import Valores from '../componentes/Valores1';
import Img1 from '../imgs/img_comida_1.png';

function AsesoriaNutPres() {
    return(
        <>
           <Bar/>
            <Navbar/>
            <div className='espacio1'/>
            <div className='row mb-5 mx-0'>
                <div className='col-1'></div>
                <div className='col-10'>
                    {/* 1 - Intro */}
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <h3 className='h2 display-4 fw-bold textsty1'>Consulta <br/> Nutricional</h3>
                            <p className='psty'>
                            Si eres amante del deporte, buscas una vida más saludable, y quieres darle a tu cuerpo la
                            nutrición que requiere, asesorate con nutricionistas expertos en nutrición para el deporte y salud.
                            En Nutreactivo encontraras nutricionistas comprometidos con sus pacientes, que te ayudarán 
                            a lograr una alimentación equilibrada que potencie tu salud y tus rendimiento deportivo.
                            Además, obtendrás todos los resultados de tu evaluación física a través de 
                            la aplicación <a href='https://www.5componentes.com/' target='_blank' rel='external' >5Componentes</a>.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img src={Img1} className='imgsty2 rounded' alt='consulta nutricional deportiva y salud'></img>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
            <RecPrevias/>
            <Entrevista/>
            <MedResFisicos/>
            <PlanNutDep/>
            <Valores/>
            <div style={{height: '100px'}}/>
            <Footer/>
        </>
    )
}

export default AsesoriaNutPres;