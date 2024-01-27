import Inicio from './Paginas/Pg_inicio';
import Servicios from './Paginas/PgServicios';
import AsesoriaNutPres from './Paginas/Pg_asesoriaNut';
import AsesoriaNutOnline from './Paginas/Pg_asesoriaNutOnline';
import EvFisica from './Paginas/Pg_evFisica';
import Nutricionistas from './Paginas/Pg_nutricionistas';
import Convenios from './Paginas/Pg_convenios';
import Articulos from './Paginas/Pg_articulos';
import Agendar from './Paginas/Pg_agendar';
import InstPDF from './Paginas/InstructivoPDF';
import Articulo1 from './Paginas/Articulos-blog/Articulo1';
import Articulo2 from './Paginas/Articulos-blog/Articulo2';
import Error404 from './Paginas/Pg_error404';
import { BrowserRouter, Route, Routes, HashRouter, Switch } from "react-router-dom";

// OJO ESTA PÁGINA NO SE ESTÁ OCUPANDO, NO LA BORRO POR SI LA LLEGO A NECESITAR EN UN FUTURO
// PERO LA QUE CUMPLE SU FUNCIÓN ES INDEX.JS

function App() {
  return (
    <div>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Servicioss' element={<Servicios />} />
            <Route path='/Asesoria-nutricional-presencial' element={<AsesoriaNutPres />} />
            <Route path='/Asesoria-nutricional-online' element={<AsesoriaNutOnline />} />
            <Route path='/Evaluacion-fisica' element={<EvFisica />} />
            <Route path='/Convenios' element={<Convenios />} />
            <Route path='/Nutricionistas' element={<Nutricionistas />} />
            <Route path='/Articulos' element={<Articulos />} />
            <Route path='/Agendar' element={<Agendar />} />
            <Route path='/Instructivo-mediciones' element={<InstPDF />} />
            <Route path='/Articulos/Articulo-1' element={<Articulo1 />} />
            <Route path='/Articulos/Suplementos-deportivos-con-mayor-efectividad-en-la-actualidad' element={<Articulo2 />} />
            <Route path="*" element={<Error404 />} /> {/* no funciona */}
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
