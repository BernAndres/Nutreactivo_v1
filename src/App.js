import Inicio from './Paginas/Inicio';
import Asesorias from './Paginas/Asesorias';
import AsesoriaNut from './Paginas/AsesoriaNut';
import AsesoriaDep from './Paginas/AsesoriaDep';
import AsesoriaOnline from './Paginas/AsesoriaOnline';
import EvFisica from './Paginas/EvFisica';
import Nutricionistas from './Paginas/Nutricionistas';
import SobreNosotros from './Paginas/SobreNosotros';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Asesorias' element={<Asesorias/>}/>
          <Route path='/Asesoria-nutricional' element={<AsesoriaNut/>}/>
          <Route path='/Asesoria-nutricional-deportistas' element={<AsesoriaDep/>}/>
          <Route path='/Asesoria-nutricional-online' element={<AsesoriaOnline/>}/>
          <Route path='/Evaluacion-fisica' element={<EvFisica/>}/>
          <Route path='/Nutricionistas' element={<Nutricionistas/>}/>
          <Route path='/Sobre-nosotros' element={<SobreNosotros/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
