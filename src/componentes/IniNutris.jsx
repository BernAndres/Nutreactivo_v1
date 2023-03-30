import '../App.css';
import Alvaro from '../imgs/img_nutricionista_alvaro_1.png'
import Diego from '../imgs/img_nutricionista_diego.png'


function IniConsulta(){
    return(
        <div className="container-fluid">
            <div className='row mb-5'>
                <div className='col-1'></div>
                <div className='col-10'>
                    <h2 className='textsty1 display-4 fw-bold'>
                        Nutricionistas
                    </h2>
                </div>
                <div className='col-1'></div>
            </div>
            <div className='row d-flex flex-column flex-lg-row justify-content-evenly'>
                {/* alvaro */}
                <div className='col-10 col-md-8 col-lg-4 mx-auto mx-lg-0 mb-3 mb-lg-0 px-5 py-5 boxNutSty'>
                    <div className='row d-flex align-items-center mb-4'>
                        <img src={Alvaro} className='w-50 rounded-circle'></img>
                        <h4 className='w-50 text-start'>Álvaro Cañete Nutricionista</h4>
                    </div>
                    <hr/>
                    <div className='row psty' style={{textAlign: 'justify'}}>
                        Nutricionista titulado con distinción de la Universidad de Valparaíso. Diplomado en Nutrición
                        Deportiva y Fitness Universidad de los Andes. Antropometrista ISAK nivel 1. Certificado en Nutrición, Ejercicio y Rendimiento Deportivo, 
                        certificado en Alimentación y Nutrición Vegetariana Instituto Universitario Vive Sano.
                    </div>
                </div>
                {/* alvaro */}
                <div className='col-10 col-md-8 col-lg-4 mx-auto mx-lg-0 px-5 py-5 boxNutSty'>
                    <div className='row d-flex align-items-center mb-4'>
                        <img src={Diego} className='w-50 rounded-circle'></img>
                        <h4 className='w-50 text-start'>Diego Hernandez Nutricionista</h4>
                    </div>
                    <hr/>
                    <div className='row psty' style={{textAlign: 'justify'}}>
                        Nutricionista titulado con distinción de la Universidad de Valparaíso. Antropometrista
                        ISAK nivel I. Estudiante de cuarto año de Pedagogía en Educación Física PUCV.
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default IniConsulta;