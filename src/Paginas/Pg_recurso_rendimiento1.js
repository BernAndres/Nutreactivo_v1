import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';

function PgRecursoRendimiento1() {
    return (
        <>
            {/* Rendimiento en deportes explosivos de corta duración */}
            <Bar />
            <Navbar />
            <div style={{ height: '150px' }}></div>
            <div className='col-10 col-lg-9 m-auto d-flex flex-column justify-content-center'>
                <h4 className='textsty1 display-5 text-primary fw-bold mb-5'>
                    Fuentes de energía en deportes cortos de alta intensidad
                </h4>
                <iframe height="450px" className='col-12 col-md-10 col-lg-8 m-auto redondearSty mb-5'
                    src="https://youtube.com/embed/fyrDUOv2CWk">
                </iframe>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    Un aspecto clave en el rendimiento deportivo de cualquier atleta consiste en
                    mantener fuentes de energía del cuerpo bien abastecidas, en especial aquellas fuentes
                    utilizadas en la disciplina deportiva que practicamos.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    En deportes de corta duración y alta intensidad como lo es la halterofilia,
                    100 y 200 metros planos, además de deportes de combate como el karate, tenemos trabajando
                    dos sistemas energéticos.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    El primer sistema involucrado es el <b>sistema fosfágeno o sistema anaeróbico aláctico</b>,
                    cuyo sustrato energético corresponde a la fosfocreatina de nuestras musculares. Este sistema
                    inicia en el segundo cero, alcanzando su peack entre los primeros 6 a 8 segundos, para posteriormente
                    decaer, hasta finalizar aproximadamente a los 30 segundos. Su mecanismo de acción consiste en que
                    la molecula de fosfocreatina muscular es metabolizada, liberando un fosfato inorgánico y energía,
                    elementos que son utilizados para convertir las moleculas de ADP en ATP, la cual es la principal
                    molécula energética del cuerpo.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty text-primary'>
                    Una estrategia nutricional para favorecer esta sistema energético es la suplementación con
                    creatina, lo cual aumentará los depositos de fosfocreatina musculaar, aumentando la explosividad
                    del atleta.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    El segundo sistema involucrado es el <b>sistema sistema anaeróbico láctico</b>,
                    donde es producido el famoso acido láctico o lactato. Este sistema
                    inicia entre los primeros 6-8 segundos, alcanzando su peack entre los primeros 30 a 90 segundos,
                    posteriormente su aporte empieza a disminuir a medida que va aumentando el nivel de acidez corporal,
                    alcanzando su limite entre los 2 a 5 minutos dependiendo de la intensidad del ejercicio realizado.
                    Su mecanismo de acción consiste en que las moléculas de glucosa son metabolizadas en el proceso conocido
                    como glucolisis, en el cual liberan moleculas de ATP. Debido a que el cuerpo requiere una alta cantidad
                    de energía de rápido aporte, el cuerpo para agilizar la obtención de energía opta por el metabolismo
                    anaeróbico en lugar de la respiración celular, generando como concencuencia la acumulación de H+,
                    molecula que aumentará el nivel de acidez. El cuerpo intenta atenuar la acidez generada metabolizando el
                    H+ con el piruvato produciendo moleculas de lactato, lo cual permite extender la duración de este sistema
                    energético por un tiempo más.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty text-primary'>
                    Otra estrategia nutricional para favorecer esta sistema energético es la suplementación con
                    bicarbonato de sodio, el cual al tener un pH base ayuda a neutralizar el nivel de acidez
                    generado durante el ejercicio.
                </p>
            </div>
            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default PgRecursoRendimiento1;