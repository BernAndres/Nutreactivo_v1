import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/styles.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import Inicio from './Paginas/Inicio';
import Servicios from './Paginas/PgServicios';
import AsesoriaNutPres from './Paginas/AsesoriaNutPres';
import AsesoriaNutOnline from './Paginas/AsesoriaNutOnline';
import EvFisica from './Paginas/EvFisica';
import AsesoriaDeportiva from './Paginas/AsesoriaDeportiva';
import Nutricionistas from './Paginas/Nutricionistas';
import Articulos from './Paginas/Articulos';
import Agendar from './Paginas/Agendar';
import InstPDF from './Paginas/InstructivoPDF';
import Articulo1 from './Paginas/Articulos-blog/Articulo1';
import Articulo2 from './Paginas/Articulos-blog/Articulo2';

const router = createHashRouter([
  {path: '/', element: <Inicio/>,},
  {path: 'Servicios', element: <Servicios/>,},
  {path: 'Asesoria-nutricional-presencial', element: <AsesoriaNutPres/>,},
  {path: 'Asesoria-nutricional-online', element: <AsesoriaNutOnline/>,},
  {path: 'Evaluacion-fisica', element: <EvFisica/>,},
  {path: 'Asesoria-deportiva', element: <AsesoriaDeportiva/>,},
  {path: 'Nutricionistas', element: <Nutricionistas/>,},
  {path: 'Articulos', element: <Articulos/>,},
  {path: 'Agendar', element: <Agendar/>,},
  {path: 'Instructivo-mediciones', element: <InstPDF/>,},
  {path: 'Articulos/Articulo-1', element: <Articulo1/>,},
  {path: 'Articulos/Suplementos-deportivos-con-mayor-efectividad-en-la-actualidad', element: <Articulo2/>,},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
