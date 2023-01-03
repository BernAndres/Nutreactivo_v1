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
import Img1 from '../imgs/img_comida_1.jpg';

// import Aos from "aos";
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

function AsesoriaNutPres() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    //   }, []);
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
                            <h4 className='h2 display-4 fw-bold textsty1'>Asesoría <br/> Nutricional</h4>
                            <p className='psty'>
                            La consulta nutricional se enfoca en la mejora del rendimiento deportivo, composición corporal,
                            estado de salud y manejo de enfermedades o condiciones de índole nutricional. Es una instancia
                            que se adecúa tanto a deportistas de alto rendimiento como a personas físicamente activas o que
                            quieran mejorar su estilo de vida. Cada consulta incluye una evaluación física según los estandares
                            ISAK 1, el usuario tendrá acceso a sus resultados mediante el software 5Componentes.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center'>
                            <img src={Img1} className='imgsty2 rounded' alt='img'></img>
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