import React from 'react';
import { useState } from 'react';
import Bar from '../componentes/Bar2';
import Navbar from '../componentes/Navbar2';
import imgPeso from '../imgs/img_peso1.JPG';
import imgTalla from '../imgs/img_talla1.JPG';
import imgCintura from '../imgs/img_cint1.JPG';
import imgCadera from '../imgs/img_cade1.JPG';
import Footer from '../componentes/Footer';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

function CalculoIMC() {

    const [calcu, setCalcu] = useState(1);
    const [peso, setPeso] = useState(0);
    const [talla, setTalla] = useState(0);
    const [cintura, setCintura] = useState(0);
    const [imc, setIMC] = useState(0);
    const [sexo, setSexo] = useState("Femenino");

    const handleSubmit = (event) => {
        event.preventDefault()
        setIMC(calcIMC(peso, talla))
        setSexo(document.getElementById("sexo").value);
        setCalcu(0)
    }

    function calcIMC(val1, val2) {
        if (val1 != 0 && val2 != 0) {
            let resultado = val1 / ((val2 / 100) * (val2 / 100))
            return resultado;
        } else {
            return 0;
        }
    }

    function interpIMC(indice) {
        if (indice == 0) {
            return "";
        } else if (indice < 18.5) {
            return "Estado nutricional bajo peso en base a proporcionalidad corporal.";
        } else if (indice < 25) {
            return "Estado nutricional normal en base a proporcionalidad corporal."
        } else if (indice < 30) {
            return "Estado nutricional sobrepeso en base a proporcionalidad corporal."
        } else if (indice < 35) {
            return "Estado nutricional obesidad grado I en base a proporcionalidad corporal."
        } else if (indice < 40) {
            return "Estado nutricional obesidad grado II en base a proporcionalidad corporal."
        } else {
            return "Estado nutricional obesidad grado III en base a proporcionalidad corporal."
        }
    }

    function interpIMC2(indice) {
        if (indice == 0) {
            return "";
        } else if (indice >= 25) {
            return "Un IMC de 25 o mayor no necesariamente implica un sobrepeso real. Valores altos pueden estar dados por altos niveles de masa muscular del individuo. Para sensibilizar este indicador y obtener un diagnóstico más acertado debemos considerar otros indicadores, como circunferencia de cintura y grasa corporal. ";
        } else {
            return ""
        }
    }


    function interpCint(indice) {
        if (sexo == "Masculino") {
            if (indice == 0) {
                return "";
            } else if (indice < 90) {
                return "Resultados normales en base a circunferencia de cintura.";
            } else if (indice < 94) {
                return "Usuario presenta obesidad abdominal en base a circunferencia de cintura."
            } else if (indice < 102) {
                return "Usuario presenta obesidad abdominal y un riesgo aumentado de sufrir a futuro alguna enfermedad cardiovascular según su circunferencia de cintura."
            } else {
                return "Usuario presenta obesidad abdominal y un riesgo muy aumentado de sufrir a futuro alguna enfermedad cardiovascular según su circunferencia de cintura."
            }

        } else {
            if (indice == 0) {
                return "";
            } else if (indice < 80) {
                return "Resultados normales en base a circunferencia de cintura.";
            } else if (indice < 88) {
                return "Usuario presenta obesidad abdominal y un riesgo aumentado de sufrir a futuro alguna enfermedad cardiovascular según su circunferencia de cintura."
            } else {
                return "Usuario presenta obesidad abdominal y un riesgo muy aumentado de sufrir a futuro alguna enfermedad cardiovascular según su circunferencia de cintura."
            }
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
                                <h3 className='col-10 fw-bold text-center mb-4 text-white'>Calculo indicadores generales de salud</h3>
                                <label className='col-8 text-white psty mb-3 d-flex flex-column justify-content-start'>
                                    <div className='d-flex'>
                                        <p className='mb-0'>Peso (kg) &nbsp;</p>
                                        <div className=' rounded-circle bg-secondary d-flex align-items-center pointer justify-content-center fw-bold text-primary'
                                            data-bs-toggle="modal" data-bs-target="#info1"
                                            style={{ width: '20px', height: '20px' }}>
                                            i
                                        </div>
                                    </div>
                                    <input
                                        type='number'
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                        className='col-12 rounded'></input>
                                </label>
                                <label className='col-8 text-white psty mb-3 d-flex flex-column justify-content-start'>
                                    <div className='d-flex'>
                                        <p className='mb-0'>Talla (cm) &nbsp;</p>
                                        <div className=' rounded-circle bg-secondary d-flex align-items-center pointer justify-content-center fw-bold text-primary'
                                            data-bs-toggle="modal" data-bs-target="#info2"
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
                                        <p className='mb-0'>*Circunferencia cintura (cm)&nbsp;</p>
                                        <div className=' rounded-circle bg-secondary d-flex align-items-center pointer justify-content-center fw-bold text-primary'
                                            data-bs-toggle="modal" data-bs-target="#info3"
                                            style={{ width: '20px', height: '20px' }}>
                                            i
                                        </div>
                                    </div>
                                    <input
                                        type='number'
                                        value={cintura}
                                        onChange={(e) => setCintura(e.target.value)}
                                        className='col-12 rounded'>
                                    </input>
                                </label>
                                <label htmlFor="sexo" className='col-8 d-flex flex-column psty text-white mb-3'>Sexo
                                    <select name="sexo" id="sexo" className='rounded'>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                </label>
                                <div className='col-8 mb-3'>
                                    <p className='my-0 py-0 text-center text-white'>*opcional</p>
                                </div>
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
                                    <p className='psty fw-bold'>IMC:</p>
                                    <div className='d-flex psty'>
                                        <p>Valor: &nbsp;</p>
                                        {imc.toFixed(1)}
                                    </div>
                                    <div className='d-flex psty'>
                                        <p>Interpretación:&nbsp;  {interpIMC(imc)}</p>

                                    </div>
                                </div>
                                <div className='col-10 mb-3'>
                                    <p className='psty fw-bold'>Cintura:</p>
                                    <div className='d-flex psty'>
                                        <p>Valor: &nbsp;</p>
                                        {cintura}
                                    </div>
                                    <div className='d-flex psty'>
                                        <p className=''>Interpretación:&nbsp; {interpCint(cintura)} </p>

                                    </div>
                                </div>

                                <div className='col-10 rounded bg-secondary px-4 py-3 psty2' style={{ textAlign: "justify" }}>
                                    {interpIMC2(imc)}
                                </div>
                            </form>

                        </div>
                    </div>

            }

            {/* MODAL PESO */}
            <div className="modal fade" id="info1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Peso</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body psty2">
                            <p>
                                El peso corporal es un indicador que por sí solo no es suficiente para realizar un diagnóstico.
                                Sin embargo, es muy útil para estimar otros indicadores como el IMC, el cual es un indicador de
                                proporcionalidad corporal, utilizado usualmente para determinar el estado nutricioanal.
                            </p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='col-7 col-md-6'>
                                    Para realizar esta medición la persona se debe parar sobre la pesa, erguido, con el
                                    peso distribuido igual entre ambos pies, y sin apoyarse en ninguna otra superficie.
                                </p>
                                <img src={imgPeso} className='col-4 rounded'></img>
                            </div>
                            <p className='mt-3'>
                                Como recomendación, y para una medición más exacta, el sujeto puede tomar esta medida
                                durante la mañana, en ayuno, y luego de orinar. También es importante
                                posicionar la pesa sobre una superficie sólida, ya que
                                superficies huecas pueden afectar el cálculo del valor final.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL TALLA */}
            <div className="modal fade" id="info2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Talla</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body psty2">
                            <p>
                                Corresponde a una medición antropométrica básica, útil para estimar una serie de indicadores como
                                el IMC, además de muchos otros parámetros corporales.
                            </p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='col-7 col-md-6'>
                                    Para realizar esta medición la persona debe estar parada con los pies juntos,
                                    la espalda apollada sobre alguna superficie como pared o tallímetro y
                                    la cabeza debe estar en plano de Frankfort. Además,
                                    previo a la medición, el sujeto debe realizar una inspiración profunda, manteniendo la respiración
                                    en lo que dura la medición.
                                </p>
                                <img src={imgTalla} className='col-4 rounded'></img>
                            </div>
                            <p className='mt-3'>
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

            {/* MODAL CINTURA */}
            <div className="modal fade" id="info3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cintura</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body psty2">
                            <p>
                                Este indicador por muy simple que parezca, es de gran utilidad para evaluar el estado nutricional
                                de la persona, e incluso identiciar el riesgo de sufrir compliciones metabólicas a futuro.
                            </p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='col-7 col-md-6'>
                                    Para tomar esta medición vamos a requerir una cinta metrica, idealmente metálica e inextensible.
                                    Para realizar la medición vamos a utilizar la técnica que consiste en medir la cintura en
                                    el punto medio entre la última costilla y el borde superior de la cresta iliaca. También, otras
                                    técnicas más simples consideran medir el abdomen en su punto más estrecho.
                                </p>
                                <img src={imgCintura} className='col-4 rounded'></img>
                            </div>
                            <p className='mt-3'>
                                Como recomendación, el sujeto debe respirar con normalidad, y la medición se debe realizar al
                                final de una espiración normal, y con la musculatura abdominal relajada.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL CINTURA */}
            <div className="modal fade" id="info4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cadera</h5>
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
                                <img src={imgCadera} className='col-4 col-md-3 '></img>
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

            <div style={{ height: '100px' }} />
            <Footer />
        </>
    )
}

export default CalculoIMC;