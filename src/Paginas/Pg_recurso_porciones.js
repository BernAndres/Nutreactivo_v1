import React from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import Footer from '../componentes/Footer';
import { useState } from 'react';
import imgInfo from '../imgs/icon_info.png';
import imgCereal from '../imgs/icon_pan.png';
import imgVerduras from '../imgs/icon_verdura.png';
import imgFrutas from '../imgs/icon_fruta.png';
import imgProte1 from '../imgs/icon_prote1.png'
import imgProte2 from '../imgs/icon_prote2.png';
import imgLacteos from '../imgs/icon_lacteos.png';
import imgLipidos from '../imgs/icon_lipidos.png';
import imgAceites from '../imgs/icon_aceite.png';
import imgAzucar from '../imgs/icon_azucar.png';
import imgAlcohol from '../imgs/icon_alcohol.png';

function TituloPorcion(props) {
    const open = props.open;
    const texto = props.texto;
    return (
        <div>
            {
                open ?
                    <p className='h4' style={{ color: '#4E07E3' }}>{texto}</p>
                    :
                    <p className='h4'>{texto}</p>
            }
        </div>
    )
}

function PgRecursosPerdidaGrasa() {
    const [recomedaciones, setRecomendaciones] = useState(false);
    const [cereales, setCereales] = useState(false);
    const [verduras, setVerduras] = useState(false);
    const [frutas, setFrutas] = useState(false);
    const [proteina1, setProteina1] = useState(false);
    const [proteina2, setProteina2] = useState(false);
    const [lacteos, setLacteos] = useState(false);
    const [lipidos, setLipidos] = useState(false);
    const [aceites, setAceites] = useState(false);
    const [azucar, setAzucar] = useState(false);
    const [alcohol, setAlcohol] = useState(false);
    return (
        <>
            {/* Rendimiento en deportes explosivos de corta duración */}
            <Bar />
            <Navbar />
            <div style={{ height: '150px' }}></div>
            <div className='col-10 col-lg-9 m-auto d-flex flex-column justify-content-center'>
                <h4 className='textsty1 display-5 text-primary fw-bold mb-5'>
                    Porciones de alimentos
                </h4>

                {/* Recomendaciones */}
                <div onClick={() => { setRecomendaciones(!recomedaciones) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgInfo} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={recomedaciones} texto='Recomendaciones' />
                    </div>

                    {
                        recomedaciones &&
                        <div className='d-flex flex-column col-12'>
                            <div className=' col-12 px-3 py-2 mb-3 mt-2 rounded d-flex flex-column flex-md-row' style={{ backgroundColor: '#FAD985' }}>
                                A continuación tenemos muchos alimentos con sus respectivas porciones, sin embargo, en la practica no
                                vamos a utilizar todas las porciones de cada grupo, ni tampoco todos los grupos de alimentos. Por este motivo,
                                es recomendado aprender aquellas porciones de los alimentos que más consumimos en el día a día, empezando por
                                aquellos grupos que más influyen en nuestros resultados: cereales, proteínas, lácteos, y ricos en grasas.
                            </div>
                            {/* <div className=' col-12 px-3 py-2 rounded d-flex flex-column flex-md-row' style={{ backgroundColor: '#FAD985' }}>
                                Si bien en tu plan nutricional tienes algunos ejemplos de preparaciones, puedes darle más variedad
                                a tus comidas utilizando las porciones de alimento a continuación.
                            </div> */}
                            <div className=' col-12 px-3 py-2 mb-3 rounded d-flex flex-column flex-md-row' style={{ backgroundColor: '#F4F1EC' }}>
                                Ejemplo de como elaborar nuestras comidas en base a diversos alimentos y sus porciones:
                            </div>

                            <iframe height="450px" className='col-12 col-md-10 col-lg-8 m-auto redondearSty mb-5'
                                src="https://youtube.com/embed/dar2hTIdXo8">
                            </iframe>
                        </div>
                    }
                </div>
                {/* Cereales */}
                <div onClick={() => { setCereales(!cereales) }}
                    className='col-12 col-md-10 col-lg-9 m-auto px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center mb-2'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgCereal} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={cereales} texto='Cereales' />
                    </div>
                    {
                        cereales &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 140 - Proteina: 3g - Carbohidratos: 30g - Lípidos: 1g
                            </p>
                        </div>
                    }
                    {
                        cereales &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Arroz cocido 3/4 taza (100g)</li>
                                <li>Arroz crudo 1/4 taza (40g)</li>
                                <li>Fideos cocidos 3/4 taza (110g)</li>
                                <li>Fideos crudo 1/2 taza (40g)</li>
                                <li>Papa 1 unidad regulaar (150g)</li>
                                <li>Quinoa cocida 3/4 taza (100gr)</li>
                                <li>Quinoa cruda 1/4 taza (40gr)</li>
                                <li>Cuscús cocido: 3/4 taza (100gr)</li>
                                <li>Cuscús crudo: 1/2 taza (40gr)</li>
                                <li>Choclo cocido 1 taza (160gr)</li>
                                <li>Chuchoca cruda 1/4 taza (40gr)</li>
                                <li>Harina tostada 1/4 taza (40gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Pan hallulla 1/2 unidad (50gr)</li>
                                <li>Pan marraqueta 1/2 unidad (50gr)</li>
                                <li>Pan molde 2 rebanadas (50gr)</li>
                                <li>Pan de masa madre 1/2 unidad (50gr)</li>
                                <li>Avena 1/2 taza (40gr)</li>
                                <li>Granola 1/2 taza (40gr)</li>
                                <li>Galletas de soda 8 unidades (40gr)</li>
                                <li>Galletas de agua 8 unidades (40gr)</li>
                                <li>Sémola cruda 1/4 taza (40gr)</li>
                                <li>Chuño crudo 1/4 taza (40gr)</li>
                                <li>Maicena cruda 1/4 taza (30gr)</li>

                            </ul>
                        </div>
                    }
                </div>

                {/* Verduras */}
                <div onClick={() => { setVerduras(!verduras) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgVerduras} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={verduras} texto='Verduras' />
                    </div>
                    {
                        verduras &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 30 - Proteina: 2g - Carbohidratos: 5g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        verduras &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Acelga cocida 1/2 taza (110gr)</li>
                                <li>Brócoli 1 taza (100gr)</li>
                                <li>Repollitos de bruselas 1/2 taza (100gr)</li>
                                <li>Coliflor 1 taza (110gr)</li>
                                <li>Alcachofa 1 unidad chica (50gr)</li>
                                <li>Champiñones cocidos 3/4 taza (100gr)</li>
                                <li>Zanahoria cruda 1 taza (50gr)</li>
                                <li>Espinaca cocida 1/2 taza (130gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Zapallo italiano cocido 1 taza (150gr)</li>
                                <li>Tomate 1 unidad mediana (120gr)</li>
                                <li>Cebolla cruda 3/4 taza (60gr)</li>
                                <li>Berenjena cocida 1/2 taza (100gr)</li>
                                <li>Betarraga cocida 1/2 taza (90gr)</li>
                                <li>Espárragos cocidos 5 unidades (100gr)</li>
                                <li>Porotos verdes cocidos 3/4 taza (70gr)</li>
                                <li>Zapallo cocido 1/2 taza (70gr)</li>
                            </ul>
                        </div>
                    }
                    {
                        verduras &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 10 - Proteina: 0g - Carbohidratos: 2.5g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        verduras &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Achicoria 1 taza (50gr)</li>
                                <li>Apio 1 taza (70gr)</li>
                                <li>Lechuga 1 taza (50gr)</li>
                                <li>Repollo 1 taza (50gr)</li>
                                <li>Repollo morado 1 taza (50gr)</li>
                                <li>Endivia 1 taza (50gr)</li>
                                <li>Dientes de ajo 8 unidades</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Pimentón 1/2 taza (60gr)</li>
                                <li>Chochayuyo 2 ramas de 25x4cm (25gr)</li>
                                <li>Espinaca cruda 1 taza (50gr)</li>
                                <li>Acelga cruda 1 taza (50gr)</li>
                                <li>Pepino 1 taza (100gr)</li>
                                <li>Zapallo italiano crudo 1 taza (100gr)</li>
                                <li>Rabanitos 5 unidades (50gr)</li>
                            </ul>
                        </div>
                    }
                </div>

                {/* Frutas */}
                <div onClick={() => { setFrutas(!frutas) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgFrutas} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={frutas} texto='Frutas' />
                    </div>
                    {
                        frutas &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 65 - Proteina: 1g - Carbohidratos: 15g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        frutas &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Manzana 1 unidad chica (100gr)</li>
                                <li>Durazno 1 unidad regular (130gr)</li>
                                <li>Palta 1 1/2 cucharada (40gr)</li>
                                <li>Frutillas 1 taza (200gr)</li>
                                <li>Plátano 1/2 unidad (60gr)</li>
                                <li>Sandía 1 taza (200gr)</li>
                                <li>Melón 1 taza (180gr)</li>
                                <li>Ciruelas 3 unidades (110gr)</li>
                                <li>Higos frescos 2 unidades (80gr)</li>
                                <li>Moras 1/2 taza (120gr)</li>
                                <li>Papaya 3 unidades (400gr)</li>
                                <li>Piña 1 rodela de 20x2cm (120gr)</li>

                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Cerezas 15 unidades (90gr)</li>
                                <li>Damascos 3 unidades (120gr)</li>
                                <li>Kiwi 2 unidades chicas (100gr)</li>
                                <li>Naranja 1 unidad regular (120gr)</li>
                                <li>Uvas 10 unidades (90gr)</li>
                                <li>Pera 1 unidad chica (100gr)</li>
                                <li>Chirimoya 1/4 unidad (90gr)</li>
                                <li>Frambuesas 1 taza (130gr)</li>
                                <li>Membrillo 1 unidad chica (100gr)</li>
                                <li>Caqui 1 unidad chica (90gr)</li>
                                <li>Níspero 7 unidades (120gr)</li>
                                <li>Pepino dulce 1 unidad grande (240gr)</li>

                            </ul>
                        </div>
                    }
                </div>

                {/* Proteina animal */}
                <div onClick={() => { setProteina1(!proteina1) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgProte1} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={proteina1} texto='Proteina animal' />
                    </div>
                    {
                        proteina1 &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Altas en grasas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 120 - Proteina: 11g - Carbohidratos: 1g - Lípidos: 8g
                            </p>
                        </div>
                    }
                    {
                        proteina1 &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Atún en aceite 1/3 taza (50gr)</li>
                                <li>Jurel en aceite 1/3 taza (50gr)</li>
                                <li>Sardinas en aceite 1/3 taza (50gr)</li>
                                <li>Choritos en aceite 14 unidades (60gr)</li>
                                <li>Mortadela 3 tajadas (60gr)</li>
                                <li>Guachalomo trozo de 6x6x1 cm (50gr)</li>
                                <li>Lomo vetado trozo de 6x6x1 cm (50gr)</li>
                                <li>Plateada trozo de 6x6x1 cm (50gr)</li>
                                <li>Chuleta de cordero trozo de 6x6x1 cm (50gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Chuleta de cerdo trozo de 6x6x1 cm (50gr)</li>
                                <li>Hígado cocido trozo de 6x6x2 cm (60gr)</li>
                                <li style={{ color: '' }}>**Jamón 1 tajada (40gr)</li>
                                <li style={{ color: '' }}>**Longaniza 1 rodela de 4 cm (45gr)</li>
                                <li style={{ color: '' }}>**Salame 1 tajada (20gr)</li>
                                <li style={{ color: '' }}>**Prieta 1 unidad de 4 cm (100gr)</li>
                                <li style={{ color: '' }}>**Vienesa 1 unidad (40gr)</li>
                                <li style={{ color: '' }}>**Vienesa pavo 1 unidad (40gr)</li>
                                <li style={{ color: '#F55753' }}>**Carnes ultra procesadas, carcinogénicas</li>
                            </ul>
                        </div>
                    }
                    {
                        proteina1 &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Bajas en grasas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 65 - Proteina: 11g - Carbohidratos: 1g - Lípidos: 2g
                            </p>
                        </div>
                    }
                    {
                        proteina1 &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Asiento picana trozo de 6x6x1 cm (50gr)</li>
                                <li>Filete trozo de 6x6x1 cm (50gr)</li>
                                <li>Lomo liso trozo de 6x6x1 cm (50gr)</li>
                                <li>Pollo ganso trozo de 6x6x1 cm (50gr)</li>
                                <li>Posta negra trozo de 6x6x1 cm (50gr)</li>
                                <li>Posta rosada trozo de 6x6x1 cm (50gr)</li>
                                <li>Cordero pulpa trozo de 6x6x1 cm (50gr)</li>
                                <li>Cerdo filete trozo de 6x6x1 cm (50gr)</li>
                                <li>Cerdo pulpa trozo de 6x6x1 cm (50gr)</li>
                                <li>Pollo pechuga trozo de 6x6x1 cm (50gr)</li>
                                <li>Pollo pierna trozo de 6x6x1 cm (50gr)</li>
                                <li>Pavo pierna trozo de 6x6x1 cm (50gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Jamón de pavo 1 tajada (50gr)</li>
                                <li>Huevo 1 unidad (50gr)</li>
                                <li>Huevo de codorniz 2 unidades (25gr)</li>
                                <li>Atún en agua 1/3 taza o 1/2 lata (60gr)</li>
                                <li>Jurel trozo de 10x6x1 cm (80gr)</li>
                                <li>Merluza trozo de 10x6x1 cm (80gr)</li>
                                <li>Reineta trozo 10x6x1 cm (80gr)</li>
                                <li>Choritos 6 unidades (60gr)</li>
                                <li>Jaiva 1/3 taza (60gr)</li>
                                <li>Almejas 6 unidades (60gr)</li>
                                <li>Piure 6 lenguas (100gr)</li>
                                <li>Loco 1 unidad chica (60gr)</li>
                            </ul>
                        </div>
                    }

                </div>

                {/* Proteina vegetal */}
                <div onClick={() => { setProteina2(!proteina2) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgProte2} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={proteina2} texto='Proteina vegetal' />
                    </div>
                    {
                        proteina2 &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Altas en proteínas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 125 - Proteina: 9.5g - Carbohidratos: 20g - Lípidos: 1.5g
                            </p>
                        </div>
                    }
                    {
                        proteina2 &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Poroto cocido 3/4 taza (100gr)</li>
                                <li>Garbanzo cocido 3/4 taza (130gr)</li>
                                <li>Lentejas cocidas 3/4 taza (140gr)</li>
                                <li>Carne de soya cocida 3/4 taza (100gr)</li>
                                <li>Hamburguesa vegetal 1/2 U (50gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Porotos crudos 1/4 taza (50gr)</li>
                                <li>Garbanzo crudo 1/4 taza (50gr)</li>
                                <li>Lenteja cruda 1/4 taza (50gr)</li>
                                <li>Carne de soya seca 1/4 taza (30gr)</li>
                            </ul>
                        </div>
                    }
                    {
                        proteina2 &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Bajas en proteínas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 75 - Proteina: NA - Carbohidratos: NA - Lípidos: NA
                            </p>
                        </div>
                    }
                    {
                        proteina2 &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Tofu 1 rebanada de 3cm (70gr)</li>
                                <li>Crema de maní 1 cdta (25gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Hummus 2 cdtas (30gr)</li>
                            </ul>
                        </div>
                    }
                </div>

                {/* Lacteos */}
                <div onClick={() => { setLacteos(!lacteos) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgLacteos} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={lacteos} texto='Lácteos' />
                    </div>
                    {
                        lacteos &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Altos en grasas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 110 - Proteina: 5g - Carbohidratos: 9g - Lípidos: 6g
                            </p>
                        </div>
                    }
                    {
                        lacteos &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Leche fluida entera 1 taza (200gr)</li>
                                <li>Yogurt natural 1 unidad (150gr)</li>
                                <li>Queso chanco o gauda 1/2 tajada
                                    laminada (20gr)</li>
                                <li>Queso parmesano 1/2 tajada (15gr)</li>
                                <li>Queso untable 2 cucharadas (25gr)</li>
                                <li>Queso crema 3 cucharadas (18gr)</li>
                                <li>Queso suizo 1/2 tajada (20gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Leche cruda de vaca 1 taza (200gr)</li>
                                <li>Leche en polvo 26% grasa 2 cdas
                                    colmadas o 3 cdas rasas (20gr)</li>
                                <li>Queso chedar 1/2 tajada (20gr)</li>
                                <li>Queso de cabra 1/2 tajada (25gr)</li>
                                <li>Queso holandes 1/2 tajada (20gr)</li>

                            </ul>
                        </div>
                    }
                    {
                        lacteos &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Medios en grasas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 85 - Proteina: 5g - Carbohidratos: 9g - Lípidos: 3g
                            </p>
                        </div>
                    }
                    {
                        lacteos &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Leche en polvo 18% grasa 2 cdas
                                    colmadas o 3 cdas rasas (20gr)</li>
                                <li>Leche fluida saborizada 1 taza (200gr)</li>
                                <li>Yogurt batido light 1 unidad (150gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Leche en polvo 12% grasa 2 cdas
                                    colmadas o 3 cdas rasas (20gr)</li>
                                <li>Quesillo rodela de 3 cm (60gr)</li>
                            </ul>
                        </div>
                    }
                    {
                        lacteos &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Bajos en grasas
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 70 - Proteina: 7g - Carbohidratos: 10g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        lacteos &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Leche fluida descremada 1 taza (200gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Leche en polvo descremada 2 cdas
                                    colmadas o 3 cdas rasas (20gr)</li>
                            </ul>
                        </div>
                    }
                </div>

                {/* Grupo */}
                <div onClick={() => { setLipidos(!lipidos) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgLipidos} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={lipidos} texto='Ricos en grasas/lipidos' />
                    </div>
                    {
                        lipidos &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 175 - Proteina: 5g - Carbohidratos: 5g - Lípidos: 15g
                            </p>
                        </div>
                    }
                    {
                        lipidos &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Almendras 26 unidades (25gr)</li>
                                <li>Avellana 50 unidades (30gr)</li>
                                <li>Maní 30 unidades o 1 puñado (30gr)</li>
                                <li>Nuez 5 unidades (25gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Pistacho 40 unidades (30gr)</li>
                                <li>Aceituna 11 unidades (115gr)</li>
                                <li>Palta 3 cucharadas o 1/2 unidad(90gr)</li>
                            </ul>
                        </div>
                    }
                </div>

                {/* Aceite y grasas */}
                <div onClick={() => { setAceites(!aceites) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgAceites} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={aceites} texto='Aceites y grasas' />
                    </div>
                    {
                        aceites &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 180 - Proteina: 0g - Carbohidratos: 0g - Lípidos: 20g
                            </p>
                        </div>
                    }
                    {
                        aceites &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Aceite de maravilla 4 cdtas (20gr)</li>
                                <li>Aceite de maíz 4 cdtas (20gr)</li>
                                <li>Aceite de soja 4 cdtas (20gr)</li>
                                <li>Aceite de oliva 4 cdtas (20gr)</li>
                                <li>Aceite de colza 4 cdtas (20gr)</li>
                                <li>Aceite de canola 4 cdtas (20gr)</li>
                                <li>Manteca 2 cdas (20gr)</li>
                                <li>Mantequilla 4 cdtas (24gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Margarina 4 cdtas (24gr)</li>
                                <li>Margarina diet 4 cdtas (30gr)</li>
                                <li>Mayonesa 1 cda (28gr)</li>
                                <li>Crema nestle 4 cdtas (70gr)</li>
                                <li>Crema chantilly 4 cdas (50gr)</li>
                                <li>Tocino 1 1/2 tajadas (30gr)</li>
                                <li>Pate 2 cdas (40gr)</li>
                            </ul>
                        </div>
                    }
                </div>

                {/* Azucar */}
                <div onClick={() => { setAzucar(!azucar) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgAzucar} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={azucar} texto='Azúcar' />
                    </div>
                    {
                        azucar &&
                        <div className='col-12 d-flex my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 20 - Proteina: 0g - Carbohidratos: 5g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        azucar &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Azucar 1 cdta (5gr)</li>
                                <li>Miel de abeja 1 cdta (6gr)</li>
                                <li>Miel de palma 1 cdta (6gr)</li>
                                <li>Mermeladas 1 cdta (10gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Membrillo dulce 1 cdta (10gr)</li>
                                <li>Manjar 1 cdta (10gr)</li>
                                <li>Jalea en polvo 1 porción reg (5gr)</li>
                                <li>Jugo 1 cdta (5gr)</li>
                            </ul>
                        </div>
                    }
                </div>

                {/* Alcohol */}
                <div onClick={() => { setAlcohol(!alcohol) }}
                    className='col-12 col-md-10 col-lg-9 m-auto mb-2 px-3 py-2 sombra2 rounded pointer d-flex flex-column align-items-center'>
                    <div className='col-12 d-flex align-items-center'>
                        <img src={imgAlcohol} className='me-3' style={{ width: '30px' }}></img>
                        <TituloPorcion open={alcohol} texto='Alcohol' />
                    </div>
                    {
                        alcohol &&

                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Altos en carbohidratos
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 140 - Proteina: 0g - Carbohidratos: 20g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        alcohol &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Licor de cafe 1/3 vaso (40gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Licor de menta 1/3 vaso (40gr)</li>
                            </ul>
                        </div>
                    }
                    {
                        alcohol &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Medios en carbohidratos
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 140 - Proteina: 0g - Carbohidratos: 3.5g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        alcohol &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Champagna 1 vaso (180gr)</li>
                                <li>Vino tinto 1 vaso (180gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Vino blanco 1 vaso (180gr)</li>
                                <li>Cerveza 300cc (300gr)</li>
                            </ul>
                        </div>
                    }
                    {
                        alcohol &&
                        <div className='col-12 d-flex flex-column my-1'>
                            <p className='psty text-primary mb-0 ps-3 text-start fw-bold'>
                                Sin alcohol
                            </p>
                            <p className='psty text-primary mb-0 ps-3 text-start'>
                                Calorías: 140 - Proteina: 0g - Carbohidratos: 0g - Lípidos: 0g
                            </p>
                        </div>
                    }
                    {
                        alcohol &&
                        <div className=' col-12 d-flex flex-column flex-md-row'>
                            <ul className='col-12 col-md-6 psty mb-0'>
                                <li>Martini 1/2 vaso (60gr)</li>
                                <li>Pisco 1/2 vaso (60gr)</li>
                                <li>Whisky 1/3 vaso (50gr)</li>
                            </ul>
                            <ul className='col-12 col-md-6 psty'>
                                <li>Ron 1/3 vaso (50gr)</li>
                                <li>Vodka 1/3 vaso (50gr)</li>
                            </ul>
                        </div>
                    }
                </div>

            </div>
            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default PgRecursosPerdidaGrasa;