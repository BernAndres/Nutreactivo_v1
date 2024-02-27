import React from 'react';
import { useState } from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import img1 from '../imgs/img_talla.png';
import img2 from '../imgs/img_tallaSentado.png';
import img3 from '../imgs/img_envergadura.png';
import Footer from '../componentes/Footer';

function CalculoPredictores() {

    const [calcu, setCalcu] = useState(true);
    const [talla, setTalla] = useState(0);
    const [tallaSentado, setTallaSentado] = useState(0);
    const [envergadura, setEnvergadura] = useState(0);
    const [indiceCormico, setIndiceCormico] = useState(0);
    const [indiceEsquelico, setIndiceEsquelico] = useState(0);
    const [envergaduraRelativa, setEnvergaduraRelativa] = useState(0);
    const [sexo, setSexo] = useState("Femenino");

    const handleSubmit = (event) => {
        event.preventDefault()
        setIndiceCormico(calc1(tallaSentado, talla))
        setIndiceEsquelico(calc2(talla, tallaSentado))
        setEnvergaduraRelativa(calc3(envergadura, talla))
        setSexo(document.getElementById("sexo").value);
        setCalcu((calcu) => !calcu)
    }
    function calc1(val1, val2) {
        if (val1 != 0 && val2 != 0) {
            let resultado = (val1 / val2) * 100
            return resultado;
        } else {
            return 0;
        }
    }
    function calc2(val1, val2) {
        if (val1 != 0 && val2 != 0) {
            let resultado = ((val1 - val2) / val2) * 100
            return resultado;
        } else {
            return 0;
        }
    }
    function calc3(val1, val2) {
        if (val1 != 0 && val2 != 0) {
            let resultado = (val1 / val2) * 100
            return resultado;
        } else {
            return 0;
        }
    }

    function interp1(indice) {
        if (sexo == "Masculino") {
            if (indice == 0) {
                return "";
            } else if (indice < 51) {
                return "Braquicórmico o tronco proporcionalmente corto.";
            } else if (indice < 53) {
                return "Metricórmico o tronco proporcionalmente medio."
            } else {
                return "Macrocórmico o tronco proporcionalmente grande."
            }
        } else {
            if (indice == 0) {
                return "";
            } else if (indice < 52) {
                return "Braquicórmico o tronco proporcionalmente corto.";
            } else if (indice < 54) {
                return "Metricórmico o tronco proporcionalmente medio."
            } else {
                return "Macrocórmico o tronco proporcionalmente grande."
            }
        }
    }
    function interp2(indice) {
        if (indice == 0) {
            return "";
        } else if (indice < 85) {
            return "Braquiesquélico o extremidades inferiores proporcionalmente cortas.";
        } else if (indice < 90) {
            return "Mesoesquélico o extremidades inferiores proporcionalmente medias."
        } else {
            return "Macroesquélico o extremidades inferiores proporcionalmente grandes."
        }
    }
    function interp3(indice) {
        if (indice == 0) {
            return "";
        } else if (indice < 99.5) {
            return "Envergadura inferior a la talla.";
        } else if (indice < 100.5) {
            return "Envergadura igual a la talla."
        } else {
            return "Envergadura superior a la talla."
        }
    }
    function interp4(indice) {
        if (sexo == "Masculino") {
            if (indice == 0) {
                return "";
            } else if (indice < 51) {
                return "En base a índice córmico se determina una posible ventaja para para deportes de combate como taekwando, así como levantaamiento de pesas.";
            } else if (indice < 53) {
                return ""
            } else {
                return ""
            }
        } else {
            if (indice == 0) {
                return "";
            } else if (indice < 52) {
                return "En base a índice córmico se determina una posible ventaja para para deportes de combate como taekwando, así como levantaamiento de pesas.";
            } else if (indice < 54) {
                return ""
            } else {
                return ""
            }
        }
    }
    function interp5(indice) {
        if (indice == 0) {
            return "";
        } else if (indice < 85) {
            return "";
        } else if (indice < 90) {
            return ""
        } else {
            return "En base a índice esquélico se determina una posible ventaja para deportes de combate como taekwando."
        }
    }
    function interp6(indice) {
        if (indice == 0) {
            return "";
        } else if (indice < 99.5) {
            return "";
        } else if (indice < 100.5) {
            return ""
        } else {
            return "En base a envergadura relativa se determina una posible ventaja para deportes como natación."
        }
    }



    return (
        <>
            <Bar />
            <Navbar />
            <div style={{ height: '200px' }} />

            {
                calcu ?

                    <div className='container-fluid'>
                        <div className='row d-flex'>
                            <form
                                onSubmit={handleSubmit}
                                className='col-10 col-md-6 col-lg-4 d-flex flex-column align-items-center 
                                py-5 m-auto bg-primary redondearSty'>
                                <h3 className='col-10 fw-bold text-center mb-4 text-white'>Calculo de predictores de talento deportivo</h3>

                                <label className='col-8 text-white psty mb-3 d-flex flex-column justify-content-start'>
                                    <div className='d-flex'>
                                        <p className='mb-0'>Talla (cm) &nbsp;</p>
                                        <div className=' rounded-circle bg-secondary d-flex align-items-center pointer justify-content-center fw-bold text-primary'
                                            data-bs-toggle="modal" data-bs-target="#info1"
                                            style={{ width: '20px', height: '20px' }}>
                                            i
                                        </div>
                                    </div>
                                    <input
                                        type='number'
                                        value={talla}
                                        onChange={(e) => setTalla(e.target.value)}
                                        className='col-12 rounded'></input>
                                </label>
                                <label className='col-8 text-white psty mb-3 d-flex flex-column justify-content-start'>
                                    <div className='d-flex'>
                                        <p className='mb-0'>Talla sentado (cm) &nbsp;</p>
                                        <div className=' rounded-circle bg-secondary d-flex align-items-center pointer justify-content-center fw-bold text-primary'
                                            data-bs-toggle="modal" data-bs-target="#info2"
                                            style={{ width: '20px', height: '20px' }}>
                                            i
                                        </div>
                                    </div>

                                    <input
                                        type='number'
                                        value={tallaSentado}
                                        onChange={(e) => setTallaSentado(e.target.value)}
                                        className='col-12 rounded'></input>
                                </label>
                                <label className='col-8 text-white psty mb-3 d-flex flex-column justify-content-start'>
                                    <div className='d-flex'>
                                        <p className='mb-0'>Envergadura (cm) &nbsp;</p>
                                        <div className=' rounded-circle bg-secondary d-flex align-items-center pointer justify-content-center fw-bold text-primary'
                                            data-bs-toggle="modal" data-bs-target="#info3"
                                            style={{ width: '20px', height: '20px' }}>
                                            i
                                        </div>
                                    </div>
                                    <input
                                        type='number'
                                        value={envergadura}
                                        onChange={(e) => setEnvergadura(e.target.value)}
                                        className='col-12 rounded'></input>
                                </label>
                                <label htmlFor="sexo" className='col-8 d-flex flex-column psty text-white mb-5'>Sexo
                                    <select name="sexo" id="sexo" className='rounded'>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                </label>
                                <input className='bg-secondary text-primary fw-bold rounded col-5 d-flex justify-content-center py-1 psty mb-3'
                                    value="Calcular" type="submit" />
                            </form>
                        </div>
                    </div>

                    :

                    <div className='container-fluir'>
                        <div className='row d-flex'>
                            <form
                                className='col-10 col-md-6 col-lg-4 m-auto py-5 redondearSty calcuSty1 d-flex flex-column align-items-center '>
                                <h3 className='col-10 text-center textsty1 fw-bold mb-4'>Resultados</h3>
                                <div className='col-10 mb-3'>
                                    <p className='psty fw-bold'>Indice córmico:</p>
                                    <div className='d-flex psty'>
                                        <p>Valor: &nbsp;</p>
                                        {indiceCormico.toFixed(1)}
                                    </div>
                                    <div className='d-flex psty'>
                                        <p>Interpretación:&nbsp; {interp1(indiceCormico)} </p>
                                    </div>
                                </div>
                                <div className='col-10 mb-3'>
                                    <p className='psty fw-bold'>Indice esquélico:</p>
                                    <div className='d-flex psty'>
                                        <p>Valor: &nbsp;</p>
                                        {indiceEsquelico.toFixed(1)}
                                    </div>
                                    <div className='d-flex psty'>
                                        <p>Interpretación:&nbsp; {interp2(indiceEsquelico)} </p>
                                    </div>
                                </div>
                                <div className='col-10 mb-3'>
                                    <p className='psty fw-bold'>Envergadura relativa:</p>
                                    <div className='d-flex psty'>
                                        <p>Valor: &nbsp;</p>
                                        {envergaduraRelativa.toFixed(1)}
                                    </div>
                                    <div className='d-flex psty'>
                                        <p>Interpretación:&nbsp; {interp3(envergaduraRelativa)}</p>
                                    </div>
                                </div>
                                <div className='col-10 rounded bg-secondary px-4 py-3' style={{ textAlign: "justify" }}>

                                    {interp4(indiceCormico)}
                                    {interp5(indiceEsquelico)}
                                    {interp6(envergaduraRelativa)}
                                    {interp4(indiceCormico) || interp5(indiceEsquelico) || interp6(envergaduraRelativa) ?
                                        ""
                                        :
                                        "No se han encontrado resultados que indiquen alguna ventaja biomecánica para algún deporte. Sin embargo, el talento deportivo depende de multiples factores, y la antropometría es solo uno de ellos."
                                    }
                                </div>
                            </form>

                        </div>
                    </div>

            }

            {/* MODAL TALLA */}
            <div className="modal fade" id="info1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Talla</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body psty2">
                            <p>
                                Corresponde a una medición antropométrica básica, útil para determinar indicadores como IMC,
                                índice córmico y muchos más.
                            </p>
                            <div className='d-flex justify-content-between'>
                                <p className='col-7 col-md-8'>
                                    Para realizar esta medición la persona debe estar paraada con los pies juntos
                                    ,la espalda apollada sobre alguna superficie como pared o tallímetro y
                                    la cabeza debe estar en plano de Frankfort. Además,
                                    previo a la medición el sujeto debe realizar una inspiración profunda, manteniendo la respiración
                                    en lo que dura la medición.
                                </p>
                                <img src={img1} className='col-4 col-md-3 '></img>
                            </div>
                            <p>
                                La medición se realiza midiendo la distancia entre el vertex, o parte superior de la cabeza, y el
                                punto inferior de los pies.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL TALLA SENTADO */}
            <div className="modal fade" id="info2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Talla sentado</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body psty2">
                            <p>
                                Corresponde a una medición antropométrica básica, útil para determinar indicadores como el índice
                                cormico e índice esquélico.
                            </p>
                            <div className='d-flex justify-content-between'>
                                <p className='col-7 col-md-8'>
                                    Para realizar esta medición la persona debe idealmente estar sentada sobre un cajón antropométrico
                                    con el tronco erguido en 90° y la espalda apollada sobre alguna superficie como pared o tallímetro.
                                    La cabeza debe estar en plano de Frankfort, las manos deben estar descansando sobre los muslos. Además,
                                    previo a la medición el sujeto debe realizar una inspiración profunda, manteniendo la respiración
                                    en lo que dura la medición.
                                </p>
                                <img src={img2} className='col-4 col-md-3 '></img>
                            </div>
                            <p>
                                La medición se realiza midiendo la distancia entre el vertex, o parte superior de la cabeza, y la región
                                inferior de los gluteos. También se puede medir la distancia entre el vertex y el piso y descontar
                                la altuera del cajón antropométrico, o la plataforma en que esté sentada la persona.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL ENVERGADURA */}
            <div className="modal fade" id="info3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Envergadura</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body psty2 d-flex flex-column align-items-center">
                            <p>
                                Corresponde a una medición antropométrica básica, útil para determinar la envergadura relativa
                                del individuo.
                            </p>
                            <p>
                                Para realizar esta medición la persona estar parada con los pies juntos. Talones, gluteos y
                                parte superior de la espalda deben estar apoyados contra la pared. Además, los brazos deben
                                estar levantados formando una linea horizontal.
                            </p>
                            <p>
                                La medición se realiza midiendo la distancia entre la punta del dedo medio de la mano izquierda
                                y la punta del dedo medio de la mano derecha.
                            </p>
                            <img src={img3} className='col-5 '></img>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default CalculoPredictores;