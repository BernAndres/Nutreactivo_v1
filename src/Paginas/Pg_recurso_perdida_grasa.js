import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';

function PgRecursosPerdidaGrasa() {
    return (
        <>
            {/* Rendimiento en deportes explosivos de corta duración */}
            <Bar />
            <Navbar />
            <div style={{ height: '150px' }}></div>
            <div className='col-10 col-lg-9 m-auto d-flex flex-column justify-content-center'>
                <h4 className='textsty1 display-5 text-primary fw-bold mb-5'>
                    3 aspectos clave en la pérdida de grasa corporal
                </h4>
                <iframe height="450px" className='col-12 col-md-10 col-lg-8 m-auto redondearSty mb-5'
                    src="https://youtube.com/embed/omaAywzSIGY">
                </iframe>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    Si nuestro objetivo es la disminución de nuestro nivel de grasa corporal, entonces
                    debemos tener en consideración 3 factores importantes que jugarán un papel clave.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    <b>1) Cantidad de energía ingerida: </b> Para que el cuerpo pueda degradar
                    sus depositos de grasa corporal, es necesario que el gasto energético del cuerpo sea
                    superior a la energía que nos aportan los alimentos. De esta forma, el cuerpo al no
                    obtener toda la energía requerida, empezará a degradar sus reservas de grasa para obtener
                    energía, proceso conocido como lipolisis.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    <b>1) Calidad de los alimentos: </b> Otro aspecto importante es la calidad de los alimentos
                    que consumimos. No es lo mismo consumir alimentos ricos en fibra como frutas y verduras, que
                    alimentos procesados altos en azucar como pan blanco o azucar, incluso si estos aportan la
                    misma cantidad de energía. Esto se debe a que los alimentos procesados son digeridos mucho
                    más rápidos, lo cual eleva el nivel de insulina del cuerpo de forma abrupta, generando un ambiente
                    favorable para la acumulación de grasa, al tratarse la insulina de una hormona
                    que favorece la lipogénesis. Por tal motivo es recomendado consumir mayormente alimentos
                    sin procesar, como frutas, verduras, frutos secos y legumbres.
                </p>
                <p className='col-12 col-md-10 m-auto mb-3 psty'>
                    <b>3) Ejercicio físico: </b> Debemos considerar que al estar con un déficit energético, nuestro
                    cuerpo está funcionando con menos energía de la habitual, por lo que es facil sentirse cansados y tener
                    una menor adherencia al régimen alimenticio,
                    condición que el ejercicio mal implementado podría incrementar. Para evitar esto, es necesario que
                    los días que hagamos entrenamientos de alta intensidad, como pesas, acompañemos la sesión de ejercicio
                    con una colación previa o un jugo isotónico que nos aporte energía. De esta manera, evitamos agotar las
                    reservas de energía interna del organismo, previniendo la fatiga. Esta estrategia no afectará la pérdida
                    de grasa corporal, ya que en ejercicios intensos la principal fuente de energía del cuerpo es el glucógeno
                    (reservas de carbohidratos del cuerpo) y no la grasa, y llevar esta fuente de energía a niveles muy bajos
                    favorecerá la fatiga y el cansancio, haciendo más dificil de conseguir nuestro objetivo.
                </p>
            </div>
            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default PgRecursosPerdidaGrasa;