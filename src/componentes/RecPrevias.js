import React from 'react';
import '../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function RecPrevias(){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return(
        <div className='container-fluid mb-5'>
            {/* RECOMENDACIONES PRE CONSULTA */}
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <div className='row' data-aos="fade-up">
                        <h4 className='fw-bold h2 text-tertiary'>Recomendaciones previas a la medición</h4>
                        
                           <ul className='psty'>
                                <li>Considera que se te realizarán diversas mediciones corporales, por lo que es
                                 recomendado asistir con ropa cómoda, que permita tomar mediciones al rededor del
                                  cuerpo. Una buena opción puede ser ropa deportiva.</li>
                                <li>En las 4 horas previas a la medición, evita realizar comidas o ingerir
                                 líquidos como agua, café o té.</li>
                                 <li>En las 24 horas previas, evita el consumo de bebidas alcohólicas.</li>
                                 <li>Evita realizar ejercicio físico que implique sudoración 12 horas antes de la evaluación.</li>
                           </ul>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default RecPrevias;