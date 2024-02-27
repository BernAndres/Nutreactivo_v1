import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../src/styles.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import Inicio from './Paginas/Pg_inicio';
import Servicios from './Paginas/PgServicios';
import AsesoriaNutPres from './Paginas/Pg_asesoriaNut';
import AsesoriaNutOnline from './Paginas/Pg_asesoriaNutOnline';
import EvFisica from './Paginas/Pg_evFisica';
import Nutricionistas from './Paginas/Pg_nutricionistas';
import Convenios from './Paginas/Pg_convenios';
import Articulos from './Paginas/Pg_articulos';
import Antropometria from './Paginas/Pg_antropometria';
import Agendar from './Paginas/Pg_agendar';
import InstPDF from './Paginas/InstructivoPDF';
import Articulo1 from './Paginas/Articulos-blog/Articulo1';
import Articulo2 from './Paginas/Articulos-blog/Articulo2';
import Articulo3 from './Paginas/Articulos-blog/Articulo3';
import Articulo4 from './Paginas/Articulos-blog/Articulo4';
import ArticuloSuplementos from './Paginas/Articulos-blog/Articulo_suplementos';
import ArticuloTiming from './Paginas/Articulos-blog/Articulo_timing';
import ArticuloDefinicion from './Paginas/Articulos-blog/Articulo_definicion';
import ArticuloFuentesEnergia from './Paginas/Articulos-blog/Articulo_fuentes_energia';
import Calculadora from './Paginas/Pg_calculadora';
import CalculoPredictores from './Paginas/Pg_calculoPredictores';
import CalculoIMC from './Paginas/Pg_calculoIMC';
import ObjDep from './Paginas/Pg_objetivosDeportivos';
import Error404 from './Paginas/Pg_error404';

const router = createHashRouter([
  { path: '/', element: <Inicio />, },
  { path: 'Servicios', element: <Servicios />, },
  { path: 'Asesoria-nutricional-presencial', element: <AsesoriaNutPres />, },
  { path: 'Asesoria-nutricional-online', element: <AsesoriaNutOnline />, },
  { path: 'Evaluacion-fisica', element: <EvFisica />, },
  { path: 'Nutricionistas', element: <Nutricionistas />, },
  { path: 'Convenios', element: <Convenios />, },
  { path: 'Articulos', element: <Articulos />, },
  { path: 'Antropometria', element: <Antropometria />, },
  { path: 'Agendar', element: <Agendar />, },
  { path: 'Calculadora', element: <Calculadora />, },
  { path: 'Objetivos-deportivos', element: <ObjDep />, },
  { path: 'Instructivo-mediciones', element: <InstPDF />, },
  { path: 'Articulos/Articulo-1', element: <Articulo1 />, },
  { path: 'Articulos/Suplementos-indicados-para-cada-deporte', element: <ArticuloSuplementos />, },
  { path: 'Articulos/Timing-nutricional-como-estrategia-deportiva', element: <ArticuloTiming />, },
  { path: 'Articulos/Proceso-de-definicion', element: <ArticuloDefinicion />, },
  { path: 'Articulos/Fuentes-de-energia-segun-deporte', element: <ArticuloFuentesEnergia />, },
  { path: 'Articulos/Suplementos-deportivos-con-mayor-efectividad-en-la-actualidad', element: <Articulo2 />, },
  { path: 'Articulos/Sustancias-prohibidas-en-los-deportes-y-el-riesgo-de-contaminacion-en-los-suplementos', element: <Articulo3 />, },
  { path: 'Articulos/Alimentos-deportivos', element: <Articulo4 />, },
  { path: 'Antropometria/Predictores-talento-deportivo', element: <CalculoPredictores />, },
  { path: 'Antropometria/Indicadores-generales-salud', element: <CalculoIMC />, },
  { path: '*', element: <Error404 />, },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
