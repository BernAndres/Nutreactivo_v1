import Inicio from './Paginas/Inicio';
import AsesoriasGeneral from './Paginas/AsesoriasGeneral';
import AsesoriaNut from './Paginas/AsesoriaNut';
import AsesoriaDep from './Paginas/AsesoriaDep';
import AsesoriaOnline from './Paginas/AsesoriaOnline';
import EvFisica from './Paginas/EvFisica';
import Nutricionistas from './Paginas/Nutricionistas';
import Blog from './Paginas/Blog';
import Agendar from './Paginas/Agendar';
import SobreNosotros from './Paginas/SobreNosotros';
import InstPDF from './Paginas/InstructivoPDF';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Asesorias-general' element={<AsesoriasGeneral/>}/>
          <Route path='/Asesoria-nutricional' element={<AsesoriaNut/>}/>
          <Route path='/Asesoria-nutricional-deportistas' element={<AsesoriaDep/>}/>
          <Route path='/Asesoria-nutricional-online' element={<AsesoriaOnline/>}/>
          <Route path='/Evaluacion-fisica' element={<EvFisica/>}/>
          <Route path='/Nutricionistas' element={<Nutricionistas/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Agendar' element={<Agendar/>}/>
          <Route path='/Sobre-nosotros' element={<SobreNosotros/>}/>
          <Route path='/Instructivo-mediciones' element={<InstPDF/>}/>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
