import React, { useState } from 'react';
import Bar from '../../componentes/Bar2';
import Navbar from '../../componentes/Navbar2';
import Footer from '../../componentes/Footer';
import Img1 from '../../imgs/img_suples2.jpg';
import Img2 from '../../imgs/img_creatina.jpg';
import Img3 from '../../imgs/img_balanina.png';
import Img4 from '../../imgs/img_bicarbonato.png';
import Img5 from '../../imgs/img_betarraga.jpg';
import Img6 from '../../imgs/img_cafeina.png';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function Articulo2(){
    const [creatina, setCreatina] =useState(false);
    const [creatina1, setCreatina1] =useState(false);
    const [creatina2, setCreatina2] =useState(false);
    const [creatina3, setCreatina3] =useState(false);
    const [creatina4, setCreatina4] =useState(false);
    const [balanina, setBalanina] =useState(false);
    const [balanina1, setBalanina1] =useState(false);
    const [balanina2, setBalanina2] =useState(false);
    const [balanina3, setBalanina3] =useState(false);
    const [balanina4, setBalanina4] =useState(false);
    const [bicarbonato, setBicarbonato] =useState(false);
    const [bicarbonato1, setBicarbonato1] =useState(false);
    const [bicarbonato2, setBicarbonato2] =useState(false);
    const [bicarbonato3, setBicarbonato3] =useState(false);
    const [bicarbonato4, setBicarbonato4] =useState(false);
    const [bicarbonato5, setBicarbonato5] =useState(false);
    const [nitrato, setNitrato] =useState(false);
    const [nitrato1, setNitrato1] =useState(false);
    const [nitrato2, setNitrato2] =useState(false);
    const [nitrato3, setNitrato3] =useState(false);
    const [nitrato4, setNitrato4] =useState(false);
    const [nitrato5, setNitrato5] =useState(false);
    const [cafeina, setCafeina] =useState(false);
    const [cafeina1, setCafeina1] =useState(false);
    const [cafeina2, setCafeina2] =useState(false);
    const [cafeina3, setCafeina3] =useState(false);
    const [cafeina4, setCafeina4] =useState(false);

    return(
        <>
            <Bar/>
            <Navbar/>
            <div className='espacio1'/>

            <div className='container-fluid'>

                {/* Titulo */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'> 
                        <h2 className=' fw-bold display-6 textsty1'>
                            Suplementos deportivos con mayor efectividad en la actualidad
                        </h2>
                    </div>
                </div>

                {/* Parrafo con imagen */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <div className='row'>
                            <div className='col-12 col-lg-7 psty'>
                                <p className='psty'>
                                Hoy en d??a es habitual que deportistas de alto rendimiento o personas que realizan 
                                ejercicio de forma recreativa usen suplementos deportivos, hecho que puede ser muy 
                                beneficioso para mejorar su rendimiento deportivo. Sin embargo, al momento de elegir
                                que suplemento consumir, muchas veces esta elecci??n se ve influenciada por mitos, 
                                creencias y campa??as de publicidad de suplementos que no tienen el respaldo cient??fico
                                suficiente para acreditar alg??n beneficio concreto. Por este motivo, es importante que
                                nos hagamos tres preguntas al momento de considerar consumir un suplemento:
                                </p>
                                <ul className='psty'>
                                    <li>
                                        ??Existe evidencia de que funciona?
                                    </li>
                                    <li>
                                        ??Est?? permitido en los deportes?
                                    </li>
                                    <li>
                                        ??Es seguro?
                                    </li>
                                </ul>
                                <p className='psty'>
                                Con estas preguntas creamos un filtro para asegurar la efectividad de los suplementos
                                 y prevenir complicaciones negativas, como por ejemplo marcar positivo a una prueba de dopaje. 
                                </p>
                            </div>
                            <div className='col-12 col-lg-5 d-flex justify-content-end'>
                                <img src={Img1} className='imgsty2 rounded'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parrafo solo */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='fw-bold textsty1'>
                            Suplementos m??s efectivos
                        </h4>
                        <p className='psty'>
                        El Instituto Australiano del Deporte clasifica los suplementos en cuatro grupos seg??n el
                        nivel de evidencia cient??fica con el que cuentan, los cuales son los grupos A, B, C y D. El grupo 
                        A incluye los suplementos con suficiente evidencia cient??fica para ser recomendados en situaciones 
                        espec??ficas. Los suplementos tipo B son aquellos cuyas investigaciones son prometedoras, pero 
                        todav??a no son concluyentes. El grupo C incluye aquellos suplementos que tienen muy poca evidencia 
                        sobre ser beneficiosos. Y, por ??ltimo, el grupo D abarca los suplementos prohibidos o con riesgo de 
                        contaminaci??n de sustancias il??citas. 
                        </p>
                        <p>
                        Debemos considerar que no basta con que un suplemento cuente con respaldo cient??fico para 
                        asegurar que nos ser?? de utilidad, tambi??n debemos considerar si el efecto del suplemento es 
                        beneficioso para la disciplina deportiva que estamos practicando. Para ello, a continuaci??n, 
                        veremos las caracter??sticas de los suplementos ergog??nicos tipo A, cuando los podemos utilizar 
                        y que beneficios nos entregan.
                        </p>
                    </div>
                </div>

                {/* CREATINA */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setCreatina(!creatina)}>
                        Creatina
                        {
                            creatina ? 
                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm'/>
                            :
                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm'/>
                        }

                    </div>
                </div>

                {
                    creatina &&
                
                <div className='row mb-5'>
                    <div className='col-10 m-auto border px-2 py-2 rounded'>
                        <h4 className='fw-bold textsty1'>
                            Creatina
                        </h4>
                        <div className='row mb-4'>
                            <p className='col-12 col-lg-8 psty'>
                            La creatina es un nutriente que podemos obtener a partir de la misma s??ntesis del cuerpo humano, 
                            y tambi??n a partir de los alimentos, principalmente carnes y pescados. Por este motivo las dietas 
                            vegetarianas suelen ser bajas en creatina.
                            </p>
                            <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                 <img className='w-75 rounded' src={Img2} />
                            </div>
                        </div>
                        {/* Creatina - efectos */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setCreatina1(!creatina1)}>
                                <b>Efectos</b>
                                {
                                    creatina1 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                creatina1 &&
                                <div>
                                    <p>
                                    La funci??n de la creatina es la de proporcionar energ??a en ejercicios breves pero intensos, 
                                    entregando grandes cantidades de energ??a, pero de corta duraci??n, aportando su peack de energ??a 
                                    durante los primeros 8-10 segundos de actividad intensa, para luego decaer. Un perfecto ejemplo 
                                    de deportes donde la creatina tiene un rol protag??nico es la prueba de 100 metros planos.
                                    </p>
                                    <p>
                                    Al suplementar, se ha visto que la creatina tiene importantes efectos en la mejora del 
                                    rendimiento en el entrenamiento y posteriormente en la recuperaci??n del atleta, lo cual a su 
                                    vez favorece el desarrollo de fuerza y masa muscular.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - cuando suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setCreatina2(!creatina2)}>
                                <b>Cuando suplementar</b>
                                {
                                    creatina2 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                creatina2 &&
                                <div>
                                    <p>
                                    La creatina, al igual que los otros suplementos ergog??nicos, tiene una funci??n particular, 
                                    en este caso sus beneficios se ven mayormente durante los primeros 8-10 segundos de actividad f??sica intensa, 
                                    por lo que se deduce que no podemos administrar creatina en todas las disciplinas deportivas. 
                                    Por ejemplo, suplementar con creatina no generar?? un beneficio radical en el rendimiento de 
                                    atletas de larga distancia, como carreras de 10mil metros, pero si en deportes cortos y explosivos 
                                    como los vistos a continuaci??n:
                                    </p>
                                    <ul className=''>
                                        <li>
                                            Esfuerzos m??ximos de alta intensidad menores a 30 segundos. Ej: eventos de 
                                            velocidad como 100 y 200 metros planos.
                                        </li>
                                        <li>
                                            Al realizar sprints de alta intensidad durante o al final de un ejercicio de resistencia. 
                                            Ej: remate de una carrera de 5000 o 10000 metros.
                                        </li>
                                        <li>
                                            Deportes que implican esfuerzos repetidos de alta intensidad. Ej: deportes grupales 
                                            como futbol o rugby.
                                        </li>
                                        <li>
                                            Para apoyar la recuperaci??n en periodos de perdida muscular por desuso. Ej: 
                                            lesiones, inmovilizaci??n.
                                        </li>
                                        <li>
                                            Para mejorar el procesamiento cognitivo del cerebro, reducir el da??o y mejorar 
                                            la recuperaci??n de lesiones cerebrales leves.
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* Creatina - Recomendaciones al suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setCreatina3(!creatina3)}>
                                <b>Recomendaciones al suplementar</b>
                                {
                                    creatina3 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                creatina3 &&
                                <div>
                                    <p>
                                    La mejor forma de creatina, independiente de las marcas, es la creatina monohidratada. 
                                    Esta forma de creatina es la que mayor respaldo cient??fico tiene, y por el momento no 
                                    hay motivos para preferir otras formas alternativas de creatina. 
                                    </p>
                                    <p>
                                    Debemos considerar que la captaci??n de creatina en el musculo est?? mediada por la insulina, 
                                    esto significa que su absorci??n se ve favorecida al consumirla junto con alimentos que aumenten 
                                    la insulina en sangre como carbohidratos y prote??nas. Una forma adecuada de consumirla ser??a 
                                    despu??s de comidas que aporten prote??na (carnes, huevo, leche) y carbohidratos (arroz, pastas, 
                                    avena, pan).
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Efectos secundarios */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' onClick={() => setCreatina4(!creatina4)}>
                                <b>Efectos secundarios</b>
                                {
                                    creatina4 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                creatina4 &&
                                <div>
                                    <p>
                                    No existe evidencia de efectos adversos graves relacionados con la suplementaci??n de creatina
                                    monohidrato. Sin embargo, existen algunas implicancias respecto al consumo de creatina y el 
                                    aumento de peso, debido a la retenci??n de agua que esta genera, pudiendo generar un aumento de 
                                    entre 1-2kg. 
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                }


                {/* BETA ALANINA */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setBalanina(!balanina)}>
                        Beta Alanina
                        {
                            balanina ? 
                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm'/>
                            :
                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm'/>
                        }

                    </div>
                </div>

                {
                    balanina &&
                
                <div className='row mb-5'>
                    <div className='col-10 m-auto border px-2 py-2 rounded'>
                        <h4 className='fw-bold textsty1'>
                            Beta Alanina
                        </h4>
                        <div className='row mb-4'>
                            <p className='col-12 col-lg-8 psty'>
                            La beta alanina es un amino??cido que puede encontrarse en el cuerpo de forma libre o 
                            formando parte de la carnosina. Podemos encontrarla en carnes rojas, blancas y pescados, 
                            aunque las cantidades en que se encuentran no son suficientes para generar un aumento en 
                            el rendimiento deportivo. Nuevamente, personas con dietas basadas en plantas tendr??n niveles 
                            mucho m??s bajos de este nutriente.
                            </p>
                            <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                 <img className='w-75 rounded' src={Img3} />
                            </div>
                        </div>
                        {/* Creatina - efectos */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setBalanina1(!balanina1)}>
                                <b>Efectos</b>
                                {
                                    balanina1 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                balanina1 &&
                                <div>
                                    <p>
                                    La beta alanina disminuye la acidez muscular producto del ejercicio intenso 
                                    y la acumulaci??n de ??cido l??ctico, generando una disminuci??n de la fatiga y 
                                    mejorando el rendimiento.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - cuando suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setBalanina2(!balanina2)}>
                                <b>Cuando suplementar</b>
                                {
                                    balanina2 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                balanina2 &&
                                <div>
                                    <ul className=''>
                                        <li>
                                            Es recomendado suplementar en ejercicios cortos que van desde los 30s hasta los 10min, 
                                            de car??cter sostenidos y de alta intensidad. Por ejemplo: Remo, ciclismo, nataci??n y 
                                            carreras de media distancia que van desde los 400 metros planos hasta los 3mil.
                                        </li>
                                        <li>
                                            Deportes que involucran esfuerzos repetitivos de alta intensidad como futbol, rugby entre otros.
                                        </li>
                                        <li>
                                            Como alternativa al bicarbonato de sodio si este nos produce malestar gastrointestinal.
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* Creatina - Recomendaciones al suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setBalanina3(!balanina3)}>
                                <b>Recomendaciones al suplementar</b>
                                {
                                    balanina3 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                balanina3 &&
                                <div>
                                    <p className=''>
                                    La beta alanina es un suplemento cuyo efecto se puede apreciar despu??s de una 
                                    suplementaci??n de varias semanas, por lo que consumirla previamente al ejercicio 
                                    no generar?? ning??n efecto agudo respecto al rendimiento.
                                    </p>
                                    <p className=''>
                                    Existen suplementos de beta alanina de r??pida y lenta absorci??n siendo estos ??ltimos 
                                    la mejor opci??n si consideramos que generan menos efectos secundarios, adem??s que permiten 
                                    ingerir una mayor dosis y tienen una mejor retenci??n en el cuerpo.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Efectos secundarios */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                            onClick={() => setBalanina4(!balanina4)}>
                                <b>Efectos secundarios</b>
                                {
                                    balanina4 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                balanina4 &&
                                <div>
                                    <p>
                                    Hay que considerar que puede generar una sensaci??n de hormigueo en el cuerpo, pero 
                                    se puede disminuir consumiendo p??ldoras de absorci??n lenta en lugar de las formas de 
                                    r??pida absorci??n como el formato en polvo.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                }

                {/* BICARBONATO */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setBicarbonato(!bicarbonato)}>
                        Bicarbonato de Sodio
                        {
                            bicarbonato ? 
                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm'/>
                            :
                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm'/>
                        }

                    </div>
                </div>

                {
                    bicarbonato &&
                
                <div className='row mb-5'>
                    <div className='col-10 m-auto border px-2 py-2 rounded'>
                        <h4 className='fw-bold textsty1'>
                            Bicarbonato de Sodio
                        </h4>
                        <div className='row mb-4'>
                            <p className='col-12 col-lg-8 psty'>
                            El bicarbonato se produce de manera natural en el cuerpo y tiene la funci??n de mantener el balance 
                            acido base. Sin embargo, cuando nos suplementamos con bicarbonato de sodio logramos aumentar mucho 
                            m??s estos niveles en la sangre, favoreciendo la absorci??n de la acidez producida en ejercicios 
                            prolongados de alta intensidad.
                            </p>
                            <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                 <img className='w-75 rounded' src={Img4} />
                            </div>
                        </div>
                        {/* Creatina - efectos */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setBicarbonato1(!bicarbonato1)}>
                                <b>Efectos</b>
                                {
                                    bicarbonato1 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                bicarbonato1 &&
                                <div>
                                    <p>
                                    El bicarbonato de sodio tiene la funci??n de ayudar a amortiguar la formaci??n de ??cido l??ctico 
                                    al hacer ejercicios intensos, disminuyendo la fatiga y mejora el rendimiento.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - cuando suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setBicarbonato2(!bicarbonato2)}>
                                <b>Cuando suplementar</b>
                                {
                                    bicarbonato2 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                bicarbonato2 &&
                                <div>
                                    <ul className='psty'>
                                        <li>
                                        En eventos de alta intensidad con una duraci??n de 1-7 minutos, donde la acumulaci??n 
                                        de ??cido l??ctico cause fatiga. Ej: remo, nataci??n, carreras de mediana distancia.
                                        </li>
                                        <li>
                                        Para el remate de una carrera de larga distancia.
                                        </li>
                                        <li>
                                        Deportes con actividad repetitiva de alta intensidad como deportes de combate o equipo.
                                        </li>
                                        <li>
                                        Para mejorar la capacidad y adaptaci??n en el entrenamiento.
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* Creatina - Recomendaciones al suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setBicarbonato3(!bicarbonato3)}>
                                <b>Recomendaciones al suplementar</b>
                                {
                                    bicarbonato3 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                bicarbonato3 &&
                                <div>
                                    <p className=''>
                                    La fuente m??s com??nmente disponible y econ??mica de bicarbonato de sodio es el bicarbonato 
                                    de sodio para productos dom??sticos/para hornear, pero tambi??n existe en tabletas, polvo de 
                                    bicarbonato de sodio en alcalinizantes urinarios como el polvo efervescente Ural e incluso por 
                                    administraci??n transd??rmica.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Efectos secundarios */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                            onClick={() => setBicarbonato4(!bicarbonato4)}>
                                <b>Efectos secundarios</b>
                                {
                                    bicarbonato4 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                bicarbonato4 &&
                                <div>
                                    <p>
                                    El principal efecto secundario con el bicarbonato de sodio es el malestar gastrointestinal 
                                    que incluye: nauseas, diarrea, dolor de est??mago y v??mito. Para disminuir estos efectos vamos 
                                    a empezar con la carga unos 120-150 minutos antes, y consumirla lentamente durante unos 30-60 minutos. 
                                    Adem??s, debemos consumir con abundante l??quido y acompa??arlo con carbohidratos para mejorar la absorci??n.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Consideraciones */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                            onClick={() => setBicarbonato5(!bicarbonato5)}>
                                <b>Consideraciones</b>
                                {
                                    bicarbonato5 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                bicarbonato5 &&
                                <div>
                                    <p>
                                    El pH de la orina puede tardar algunas horas en volver a niveles aceptables para las
                                    pruebas antidopaje.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                }

                {/* NITRATO */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setNitrato(!nitrato)}>
                        Nitrato
                        {
                            nitrato ? 
                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm'/>
                            :
                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm'/>
                        }

                    </div>
                </div>

                {
                    nitrato &&
                
                <div className='row mb-5'>
                    <div className='col-10 m-auto border px-2 py-2 rounded'>
                        <h4 className='fw-bold textsty1'>
                            Nitrato
                        </h4>
                        <div className='row mb-4'>
                            <p className='col-12 col-lg-8 psty'>
                            El nitrato es un compuesto que ayuda a mejorar la disponibilidad del ??xido n??trico en el cuerpo, 
                            el cual participa en regulaci??n de la presi??n arterial y el flujo sangu??neo, la respiraci??n 
                            mitocondrial, la contracci??n muscular y la funci??n inmunol??gica. 
                            Naturalmente podemos encontrarlo en betarraga, algunas frutas y carnes procesadas, pero el 
                            alimento m??s destacado es la ra??z de betarraga.
                            </p>
                            <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                 <img className='w-75 rounded' src={Img5} />
                            </div>
                        </div>
                        {/* Creatina - efectos */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setNitrato1(!nitrato1)}>
                                <b>Efectos</b>
                                {
                                    nitrato1 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                nitrato1 &&
                                <div>
                                    <p>
                                    El nitrato aumenta el nivel ??xido n??trico en el organismo, el cual juega un rol importante 
                                    en la regulaci??n de la presi??n sangu??nea y contracci??n muscular. En consecuencia, genera un 
                                    aumento del flujo sangu??neo, oxigenaci??n muscular, aumentando la capacidad al hacer ejercicio
                                    y el rendimiento.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - cuando suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setNitrato2(!nitrato2)}>
                                <b>Cuando suplementar</b>
                                {
                                    nitrato2 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                nitrato2 &&
                                <div>
                                    <ul className='psty'>
                                        <li>
                                        Nos podemos beneficiar si realizamos ejercicios de resistencia que vayan entre 4-30 minutos, 
                                        como correr o andar en bicicleta. 
                                        </li>
                                        <li>
                                        Para apoyar el entrenamiento aer??bico.
                                        </li>
                                        <li>
                                        Ejercicios intermitentes de alta intensidad donde hayan sprints de corta duraci??n como el futbol, rugby.
                                        </li>
                                        <li>
                                        En la exposici??n a condiciones hip??xicas, o con poco ox??geno, como entrenamiento de altura o monta??ismo.
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* Creatina - Recomendaciones al suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setNitrato3(!nitrato3)}>
                                <b>Recomendaciones al suplementar</b>
                                {
                                    nitrato3 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                nitrato3 &&
                                <div>
                                    <p className='psty'>
                                    Adem??s de las fuentes diet??ticas como las verduras ricas en nitratos, tambi??n se comercializan 
                                    una gran cantidad de suplementos a base de remolacha para atletas, incluidos concentrados de jugo, 
                                    geles y polvos. 
                                    </p>
                                    <p className='psty'>
                                    En este caso podemos hacer una suplementaci??n aguda, es decir, antes del ejercicio en cuesti??n 
                                    y obtener resultados inmediatos, no como otros suplementos donde nos demoramos semanas en aumentar 
                                    los niveles basales.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Efectos secundarios */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                            onClick={() => setNitrato4(!nitrato4)}>
                                <b>Efectos secundarios</b>
                                {
                                    nitrato4 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                nitrato4 &&
                                <div>
                                    <p>
                                        El jugo de betarraga concentrado puede causar molestias gastrointestinales, as?? que siempre 
                                        debemos probarlo primero en el entrenamiento antes de aplicarlo en alguna competencia.
                                    </p>
                                    <p className='psty'>
                                        Puede causar un color rosado en la orina y en las heces, esto es temporal e inofensivo
                                        as?? que no hay que preocuparse.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Consideraciones */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                            onClick={() => setNitrato5(!nitrato5)}>
                                <b>Consideraciones</b>
                                {
                                    nitrato5 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                nitrato5 &&
                                <div>
                                    <p>
                                    El uso err??neo de este suplemento puede causar intoxicaci??n, por lo que si no se cuenta con 
                                    asesor??a profesional para consumirlo, es m??s seguro utilizar fuentes naturales como verduras.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                }

                {/* CAFEINA */}

                <div className='row mb-3 pointer'>
                    <div className='col-10 m-auto rounded d-flex justify-content-center align-items-center artboxsty'
                        onClick={() => setCafeina(!cafeina)}>
                        Cafe??na
                        {
                            cafeina ? 
                            <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='sm'/>
                            :
                            <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='sm'/>
                        }

                    </div>
                </div>

                {
                    cafeina &&
                
                <div className='row mb-5'>
                    <div className='col-10 m-auto border px-2 py-2 rounded'>
                        <h4 className='fw-bold textsty1'>
                            Cafe??na
                        </h4>
                        <div className='row mb-4'>
                            <p className='col-12 col-lg-8 psty'>
                            La cafe??na es una sustancia que se encuentra de forma natural en las hojas, los frijoles y los 
                            frutos de una variedad de plantas, siendo el caf?? la fuente diet??tica m??s com??n. Tambi??n se encuentra 
                            presente en el t??, las bebidas de cola, las bebidas energ??ticas, el chocolate y en suplementos 
                            deportivos especializados. 
                            </p>
                            <div className='col-12 col-lg-4 d-flex rounded justify-content-center'>
                                 <img className='w-75 rounded' src={Img6} />
                            </div>
                        </div>
                        {/* Creatina - efectos */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setCafeina1(!cafeina1)}>
                                <b>Efectos</b>
                                {
                                    cafeina1 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                cafeina1 &&
                                <div>
                                    <p>
                                    Es un estimulante natural, que ejerce un efecto estimulador en los m??sculos, lo que se vuelve 
                                    beneficioso al hacer deporte ya que activa el sistema nervioso disminuye la percepci??n del esfuerzo, 
                                    disminuye el dolor y mejora el rendimiento.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - cuando suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setCafeina2(!cafeina2)}>
                                <b>Cuando suplementar</b>
                                {
                                    cafeina2 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                cafeina2 &&
                                <div>
                                    <ul className='psty'>
                                        <li>
                                        Deportes de resistencia sobre 60 minutos como ciclismo.
                                        </li>
                                        <li>
                                        Deportes de equipo como futbol o rugby.
                                        </li>
                                        <li>
                                        Deportes breves, sostenidos y de alta intensidad como el remo.
                                        </li>
                                        <li>
                                        Esfuerzos ??nicos que impliquen fuerza o potencia como levantamiento de pesas.
                                        </li>
                                        <li>
                                        Antes de entrenar si se siente fatigado.
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* Creatina - Recomendaciones al suplementar */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                                onClick={() => setCafeina3(!cafeina3)}>
                                <b>Recomendaciones al suplementar</b>
                                {
                                    cafeina3 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                cafeina3 &&
                                <div>
                                    <p className='psty'>
                                    Existen diversos protocolos de ingesta de cafe??na para mejorar el rendimiento pudiendo 
                                    siniestrarse antes de la sesi??n de ejercicio, distribuida durante el ejercicio o al final 
                                    del ejercicio cuando la fatiga comienza a ocurrir.
                                    </p>
                                    <p className='psty'>
                                    Respecto al tiempo de consumo, los estudios ahora muestran que los beneficios de la cafe??na ocurren poco 
                                    despu??s de la ingesta y no dependen del logro de las concentraciones m??ximas de cafe??na en la sangre que 
                                    generalmente ocurren alrededor de los 60 minutos, por lo cual puede ser igual de efectiva tomarla antes o 
                                    durante el entrenamiento.
                                    </p>
                                </div>
                            }
                        </div>
                        {/* Creatina - Efectos secundarios */}
                        <div className='border rounded psty px-2 py-2 mb-2'>
                            <div className='pointer d-flex justify-content-between justify-content-lg-start' 
                            onClick={() => setCafeina4(!cafeina4)}>
                                <b>Consideraciones</b>
                                {
                                    cafeina4 ? 
                                    <FontAwesomeIcon className='ms-2' icon={faCircleMinus} color='black' size='lg'/>
                                    :
                                    <FontAwesomeIcon className='ms-2' icon={faCirclePlus} color='black' size='lg'/>
                                }
                            </div>
                            {
                                cafeina4 &&
                                <div>
                                <p className='psty'>
                                El hecho de abstenerse de tomar cafe??na d??as antes de la competici??n, no potencia el efecto de la cafe??na.
                                </p>
                                <p>
                                Una dosis alta puede tener efectos secundarios como malestar estomacal, falta de concentraci??n, 
                                confusi??n, ansiedad y trastornos del sue??o.
                                </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                }


            </div>

            <div className='espacio1'/>
            <Footer/>
        </>
    )
}

export default Articulo2;