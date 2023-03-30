import Inicio from './Paginas/Inicio';
import Servicios from './Paginas/PgServicios';
import AsesoriaNutPres from './Paginas/AsesoriaNutPres';
import AsesoriaNutOnline from './Paginas/AsesoriaNutOnline';
import EvFisica from './Paginas/EvFisica';
import AsesoriaDeportiva from './Paginas/AsesoriaDeportiva';
import Nutricionistas from './Paginas/Nutricionistas';
import Convenios from './Paginas/Convenios';
import Articulos from './Paginas/Articulos';
import Agendar from './Paginas/Agendar';
import InstPDF from './Paginas/InstructivoPDF';
import Articulo1 from './Paginas/Articulos-blog/Articulo1';
import Articulo2 from './Paginas/Articulos-blog/Articulo2';
import { BrowserRouter, Route, Routes, HashRouter, Switch} from "react-router-dom";

function App() {
  return (
    <div>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Servicios' element={<Servicios/>}/>
          <Route path='/Asesoria-nutricional-presencial' element={<AsesoriaNutPres/>}/>
          <Route path='/Asesoria-nutricional-online' element={<AsesoriaNutOnline/>}/>
          <Route path='/Evaluacion-fisica' element={<EvFisica/>}/>
          <Route path='/Asesoria-deportiva' element={<AsesoriaDeportiva/>}/>
          <Route path='/Convenios' element={<Convenios/>}/>
          <Route path='/Nutricionistas' element={<Nutricionistas/>}/>
          <Route path='/Articulos' element={<Articulos/>}/>
          <Route path='/Agendar' element={<Agendar/>}/>
          <Route path='/Instructivo-mediciones' element={<InstPDF/>}/>
          <Route path='/Articulos/Articulo-1' element={<Articulo1/>}/>
          <Route path='/Articulos/Suplementos-deportivos-con-mayor-efectividad-en-la-actualidad' element={<Articulo2/>}/>
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
