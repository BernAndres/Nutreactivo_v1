import React from 'react';
import Img1 from '../imgs/img_plan_nutricional.png';
import '../App.css';

function PlanNutDep() {
    return (
        <div className='container-fluid mb-5'>
            <div className='row d-flex'>
                <div className=' col-10 col-lg-9 m-auto d-flex flex-column'>
                    <h4 className='h2 fw-bold display-6 mb-3 textsty1'>Plan nutricionl personalizado</h4>
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start'>
                        <div className='psty col-12 col-lg-6 '>
                            <p>El plan de alimentación está planificado en base a las características individules
                                de cada deportista, considerando su gasto de energía diario, y pensado para ser aplicado
                                con facilidad en el día a día.</p>
                            <ul>
                                <p className='fw-bold mb-0'>¿Que incluye cada plan?</p>
                                <li>Requerimientos energéticos y de macronutrientes como proteínas, carbohidratos y lípidos diarios.</li>
                                <li>Prescripción de alimentos por tiempo de comida, junto a 5 ejemplos de preparaciones.</li>
                                <li>Prescripción de recomendaciones deportivas para diferentes días de entrenamiento y días de competencias.</li>
                                <li>Material complementario como videos explicativos.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center '>
                            <img className='col-12 col-md-9 rounded' src={Img1}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanNutDep;