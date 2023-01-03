import React from 'react';
import Bar from '../../componentes/Bar2';
import Navbar from '../../componentes/Navbar2';
import Footer from '../../componentes/Footer';
import Img1 from '../../imgs/img_suples2.jpg';
import '../../App.css';

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
                                Hoy en día es habitual que deportistas de alto rendimiento o personas que realizan 
                                ejercicio de forma recreativa usen suplementos deportivos, hecho que puede ser muy 
                                beneficioso para mejorar su rendimiento deportivo. Sin embargo, al momento de elegir
                                que suplemento consumir, muchas veces esta elección se ve influenciada por mitos, 
                                creencias y campañas de publicidad de suplementos que no tienen el respaldo científico
                                suficiente para acreditar algún beneficio concreto. Por este motivo, es importante que
                                nos hagamos tres preguntas al momento de considerar consumir un suplemento:
                                </p>
                                <ul className='psty'>
                                    <li>
                                        ¿Existe evidencia de que funciona?
                                    </li>
                                    <li>
                                        ¿Está permitido en los deportes?
                                    </li>
                                    <li>
                                        ¿Es seguro?
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
                            Suplementos más efectivos
                        </h4>
                        <p className='psty'>
                        El Instituto Australiano del Deporte clasifica los suplementos en cuatro grupos según el
                        nivel de evidencia científica con el que cuentan, los cuales son los grupos A, B, C y D. El grupo 
                        A incluye los suplementos con suficiente evidencia científica para ser recomendados en situaciones 
                        específicas. Los suplementos tipo B son aquellos cuyas investigaciones son prometedoras, pero 
                        todavía no son concluyentes. El grupo C incluye aquellos suplementos que tienen muy poca evidencia 
                        sobre ser beneficiosos. Y, por último, el grupo D abarca los suplementos prohibidos o con riesgo de 
                        contaminación de sustancias ilícitas. 
                        </p>
                        <p>
                        Debemos considerar que no basta con que un suplemento cuente con respaldo científico para 
                        asegurar que nos será de utilidad, también debemos considerar si el efecto del suplemento es 
                        beneficioso para la disciplina deportiva que estamos practicando. Para ello, a continuación, 
                        veremos las características de los suplementos ergogénicos tipo A, cuando los podemos utilizar 
                        y que beneficios nos entregan.
                        </p>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <div className='row d-flex justify-content-around'>
                            <a href='#Creatina' className='mb-2 col-12 col-md-5 col-lg-2 border rounded d-flex justify-content-center align-items-center artboxsty'>
                                Creatina
                            </a>
                            <a href='#Betaalanina' className='mb-2 col-12 col-md-5 col-lg-2 border rounded d-flex justify-content-center align-items-center artboxsty'>
                                Beta Alanina
                            </a>
                            <a href='#Bicarbonato' className='mb-2 col-12 col-md-5 col-lg-2 border rounded d-flex justify-content-center align-items-center artboxsty'>
                                Bicarbonato
                            </a>
                            <a href='#Nitrato' className='mb-2 col-12 col-md-5 col-lg-2 border rounded d-flex justify-content-center align-items-center artboxsty'>
                                Nitrato
                            </a>
                            <a href='#Cafeina' id='Creatina' className='mb-2 col-12 col-md-5 col-lg-2 border rounded d-flex justify-content-center align-items-center artboxsty'>
                                Cafeína
                            </a>
                        </div>

                    </div>

                </div>

                {/* CREATINA */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='fw-bold textsty1'>
                            Creatina
                        </h4>
                        <p className='psty'>
                        La creatina es un nutriente que podemos obtener a partir de la misma síntesis del cuerpo humano, 
                        y también a partir de los alimentos, principalmente carnes y pescados. Por este motivo las dietas 
                        vegetarianas suelen ser bajas en creatina.
                        </p>
                        <p className='psty'>
                        <b>Efectos:</b> <br/>
                        La función de la creatina es la de proporcionar energía en ejercicios breves pero intensos, 
                        entregando grandes cantidades de energía, pero de corta duración, aportando su peack de energía 
                        durante los primeros 8-10 segundos de actividad intensa, para luego decaer. Un perfecto ejemplo 
                        de deportes donde la creatina tiene un rol protagónico es la prueba de 100 metros planos.
                        </p>
                        <p className='psty'>
                        Al suplementar, se ha visto que la creatina tiene importantes efectos en la mejora del 
                        rendimiento en el entrenamiento y posteriormente en la recuperación del atleta, lo cual a su 
                        vez favorece el desarrollo de fuerza y masa muscular.
                        </p>
                        <p className='psty'>
                        <b>Cuando suplementar:</b> <br/>
                        La creatina, al igual que los otros suplementos ergogénicos, tiene una función particular, 
                        en este caso sus beneficios se ven mayormente durante los primeros 8-10 segundos de actividad física intensa, 
                        por lo que se deduce que no podemos administrar creatina en todas las disciplinas deportivas. 
                        Por ejemplo, suplementar con creatina no generará un beneficio radical en el rendimiento de 
                        atletas de larga distancia, como carreras de 10mil metros, pero si en deportes cortos y explosivos 
                        como los vistos a continuación:
                        </p>
                        <ul className='psty'>
                            <li>
                                Esfuerzos máximos de alta intensidad menores a 30 segundos. Ej: eventos de 
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
                                Para apoyar la recuperación en periodos de perdida muscular por desuso. Ej: 
                                lesiones, inmovilización.
                            </li>
                            <li>
                                Para mejorar el procesamiento cognitivo del cerebro, reducir el daño y mejorar 
                                la recuperación de lesiones cerebrales leves.
                            </li>
                        </ul>
                        <p className='psty'>
                        <b>Recomendaciones al consumir creatina:</b><br/>
                        La mejor forma de creatina, independiente de las marcas, es la creatina monohidratada. 
                        Esta forma de creatina es la que mayor respaldo científico tiene, y por el momento no 
                        hay motivos para preferir otras formas alternativas de creatina. 
                        </p>
                        <p className='psty'>
                        Debemos considerar que la captación de creatina en el musculo está mediada por la insulina, 
                        esto significa que su absorción se ve favorecida al consumirla junto con alimentos que aumenten 
                        la insulina en sangre como carbohidratos y proteínas. Una forma adecuada de consumirla sería 
                        después de comidas que aporten proteína (carnes, huevo, leche) y carbohidratos (arroz, pastas, 
                        avena, pan).
                        </p>
                        <p className='psty' id='Betaalanina'>
                        <b>Efectos secundarios</b><br/>
                        No existe evidencia de efectos adversos graves relacionados con la suplementación de creatina
                        monohidrato. Sin embargo, existen algunas implicancias respecto al consumo de creatina y el 
                        aumento de peso, debido a la retención de agua que esta genera, pudiendo generar un aumento de 
                        entre 1-2kg. 
                        </p>
                    </div>
                </div>

                {/* BETA ALANINA */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='fw-bold textsty1'>
                        Beta alanina
                        </h4>
                        <p className='psty'>
                        La beta alanina es un aminoácido que puede encontrarse en el cuerpo de forma libre o 
                        formando parte de la carnosina. Podemos encontrarla en carnes rojas, blancas y pescados, 
                        aunque las cantidades en que se encuentran no son suficientes para generar un aumento en 
                        el rendimiento deportivo. Nuevamente, personas con dietas basadas en plantas tendrán niveles 
                        mucho más bajos de este nutriente.
                        </p>
                        <p className='psty'>
                        <b>Efectos:</b> <br/>
                        La beta alanina disminuye la acidez muscular producto del ejercicio intenso 
                        y la acumulación de ácido láctico, generando una disminución de la fatiga y 
                        mejorando el rendimiento.
                        </p>
                        <p className='psty'>
                        <b>Cuando suplementar:</b>
                        </p>
                        <ul className='psty'>
                            <li>
                                Es recomendado suplementar en ejercicios cortos que van desde los 30s hasta los 10min, 
                                de carácter sostenidos y de alta intensidad. Por ejemplo: Remo, ciclismo, natación y 
                                carreras de media distancia que van desde los 400 metros planos hasta los 3mil.
                            </li>
                            <li>
                                Deportes que involucran esfuerzos repetitivos de alta intensidad como futbol, rugby entre otros.
                            </li>
                            <li>
                                Como alternativa al bicarbonato de sodio si este nos produce malestar gastrointestinal.
                            </li>
                        </ul>
                        <p className='psty'>
                        <b>Recomendaciones al consumir beta alanina:</b><br/>
                        La beta alanina es un suplemento cuyo efecto se puede apreciar después de una 
                        suplementación de varias semanas, por lo que consumirla previamente al ejercicio 
                        no generará ningún efecto agudo respecto al rendimiento.
                        </p>
                        <p className='psty'>
                        Existen suplementos de beta alanina de rápida y lenta absorción siendo estos últimos 
                        la mejor opción si consideramos que generan menos efectos secundarios, además que permiten 
                        ingerir una mayor dosis y tienen una mejor retención en el cuerpo.
                        </p>
                        <p className='psty' id='Bicarbonato'>
                        <b>Efectos secundarios:</b><br/>
                        Hay que considerar que puede generar una sensación de hormigueo en el cuerpo, pero 
                        se puede disminuir consumiendo píldoras de absorción lenta en lugar de las formas de 
                        rápida absorción como el formato en polvo.
                        </p>
                    </div>
                </div>

                {/* BICARBONATO */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='fw-bold textsty1'>
                            Bicarbonato de sodio
                        </h4>
                        <p className='psty'>
                        El bicarbonato se produce de manera natural en el cuerpo y tiene la función de mantener el balance 
                        acido base. Sin embargo, cuando nos suplementamos con bicarbonato de sodio logramos aumentar mucho 
                        más estos niveles en la sangre, favoreciendo la absorción de la acidez producida en ejercicios 
                        prolongados de alta intensidad.
                        </p>    
                        <p className='psty'>
                        <b>Efectos:</b> <br/>
                        El bicarbonato de sodio tiene la función de ayudar a amortiguar la formación de ácido láctico 
                        al hacer ejercicios intensos, disminuyendo la fatiga y mejora el rendimiento.
                        </p>
                        <p className='psty'>
                        <b>Cuando suplementar</b>
                        </p>
                        <ul className='psty'>
                            <li>
                            En eventos de alta intensidad con una duración de 1-7 minutos, donde la acumulación 
                            de ácido láctico cause fatiga. Ej: remo, natación, carreras de mediana distancia.
                            </li>
                            <li>
                            Para el remate de una carrera de larga distancia.
                            </li>
                            <li>
                            Deportes con actividad repetitiva de alta intensidad como deportes de combate o equipo.
                            </li>
                            <li>
                            Para mejorar la capacidad y adaptación en el entrenamiento.
                            </li>
                        </ul>
                        <p className='psty'>
                        <b>Recomendaciones al consumir bicarbonato</b><br/>
                        La fuente más comúnmente disponible y económica de bicarbonato de sodio es el bicarbonato 
                        de sodio para productos domésticos/para hornear, pero también existe en tabletas, polvo de 
                        bicarbonato de sodio en alcalinizantes urinarios como el polvo efervescente Ural e incluso por 
                        administración transdérmica.
                        </p>
                        <p className='psty'>
                        <b>Efectos secundarios</b><br/>
                        El principal efecto secundario con el bicarbonato de sodio es el malestar gastrointestinal 
                        que incluye: nauseas, diarrea, dolor de estómago y vómito. Para disminuir estos efectos vamos 
                        a empezar con la carga unos 120-150 minutos antes, y consumirla lentamente durante unos 30-60 minutos. 
                        Además, debemos consumir con abundante líquido y acompañarlo con carbohidratos para mejorar la absorción.
                        </p>
                        <p className='psty' id='Nitrato'>
                        <b>Consideraciones</b><br/>
                        El pH de la orina puede tardar algunas horas en volver a niveles aceptables para las
                        pruebas antidopaje.
                        </p>
                    </div>
                </div>

                {/* Nitrato */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='fw-bold textsty1'>
                            Nitrato
                        </h4>
                        <p className='psty'>
                        El nitrato es un compuesto que ayuda a mejorar la disponibilidad del óxido nítrico en el cuerpo, 
                        el cual participa en regulación de la presión arterial y el flujo sanguíneo, la respiración 
                        mitocondrial, la contracción muscular y la función inmunológica. 
                        </p>
                        <p className='psty'>
                        Naturalmente podemos encontrarlo en betarraga, algunas frutas y carnes procesadas, pero el 
                        alimento más destacado es la raíz de betarraga.
                        </p>
                        <p className='psty'>
                        <b>Efectos:</b> <br/>
                        El nitrato aumenta el nivel óxido nítrico en el organismo, el cual juega un rol importante 
                        en la regulación de la presión sanguínea y contracción muscular. En consecuencia, genera un 
                        aumento del flujo sanguíneo, oxigenación muscular, aumentando la capacidad al hacer ejercicio
                        y el rendimiento.
                        </p>
                        <p className='psty'>
                        <b>Cuando suplementar:</b>
                        </p>
                        <ul className='psty'>
                            <li>
                            Nos podemos beneficiar si realizamos ejercicios de resistencia que vayan entre 4-30 minutos, 
                            como correr o andar en bicicleta. 
                            </li>
                            <li>
                            Para apoyar el entrenamiento aeróbico.
                            </li>
                            <li>
                            Ejercicios intermitentes de alta intensidad donde hayan sprints de corta duración como el futbol, rugby.
                            </li>
                            <li>
                            En la exposición a condiciones hipóxicas, o con poco oxígeno, como entrenamiento de altura o montañismo.
                            </li>
                        </ul>
                        <p className='psty'>
                        <b>Recomendaciones al suplementar con Nitrato:</b><br/>
                        Además de las fuentes dietéticas como las verduras ricas en nitratos, también se comercializan 
                        una gran cantidad de suplementos a base de remolacha para atletas, incluidos concentrados de jugo, 
                        geles y polvos. 
                        </p>
                        <p className='psty'>
                        En este caso podemos hacer una suplementación aguda, es decir, antes del ejercicio en cuestión 
                        y obtener resultados inmediatos, no como otros suplementos donde nos demoramos semanas en aumentar 
                        los niveles basales.
                        </p>
                        <p className='psty'>
                        <b>Efectos secundarioa:</b><br/>
                        El jugo de betarraga concentrado puede causar molestias gastrointestinales, así que siempre 
                        debemos probarlo primero en el entrenamiento antes de aplicarlo en alguna competencia.
                        </p>
                        <p className='psty'>
                        Puede causar un color rosado en la orina y en las heces, esto es temporal e inofensivo así que no hay que preocuparse.
                        </p>
                        <p className='psty' id='Cafeina'>
                        <b>Consideraciones:</b><br/>
                        El uso erróneo de este suplemento puede causar intoxicación, por lo que si no se cuenta con 
                        asesoría profesional para consumirlo, es más seguro utilizar fuentes naturales como verduras.
                        </p>
                    </div>
                </div>

                {/* CAFEÍNA */}
                <div className='row mb-5'>
                    <div className='col-10 m-auto'>
                        <h4 className='fw-bold textsty1'>
                            Cafeína
                        </h4>
                        <p className='psty'>
                        La cafeína es una sustancia que se encuentra de forma natural en las hojas, los frijoles y los 
                        frutos de una variedad de plantas, siendo el café la fuente dietética más común. También se encuentra 
                        presente en el té, las bebidas de cola, las bebidas energéticas, el chocolate y en suplementos 
                        deportivos especializados. 
                        </p>
                        <p className='psty'>
                        <b>Efectos:</b> <br/>
                        Es un estimulante natural, que ejerce un efecto estimulador en los músculos, lo que se vuelve 
                        beneficioso al hacer deporte ya que activa el sistema nervioso disminuye la percepción del esfuerzo, 
                        disminuye el dolor y mejora el rendimiento.
                        </p>
                        <p className='psty'>
                        <b>Cuando suplementar</b><br/>
                        </p>
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
                            Esfuerzos únicos que impliquen fuerza o potencia como levantamiento de pesas.
                            </li>
                            <li>
                            Antes de entrenar si se siente fatigado.
                            </li>
                        </ul>
                        <p className='psty'>
                        <b>Recomendaciones al suplementar con cafeína</b><br/>
                        Existen diversos protocolos de ingesta de cafeína para mejorar el rendimiento pudiendo 
                        siniestrarse antes de la sesión de ejercicio, distribuida durante el ejercicio o al final 
                        del ejercicio cuando la fatiga comienza a ocurrir.
                        </p>
                        <p className='psty'>
                        Respecto al tiempo de consumo, los estudios ahora muestran que los beneficios de la cafeína ocurren poco 
                        después de la ingesta y no dependen del logro de las concentraciones máximas de cafeína en la sangre que 
                        generalmente ocurren alrededor de los 60 minutos, por lo cual puede ser igual de efectiva tomarla antes o 
                        durante el entrenamiento.
                        </p>
                        <p className='psty'>
                        <b>Consideraciones:</b><br/>
                        El hecho de abstenerse de tomar cafeína días antes de la competición, no potencia el efecto de la cafeína.
                        </p>
                        <p>
                        Una dosis alta puede tener efectos secundarios como malestar estomacal, falta de concentración, 
                        confusión, ansiedad y trastornos del sueño.
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