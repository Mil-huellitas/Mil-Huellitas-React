import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes, } from "react-router-dom";
import './index.css';
import Donacion from './pages/donacion/Donacion';
import Donacionm from './pages/donacion/Donacionm';
import Apadrina from './pages/donacion/Apadrina';
import Pago from './pages/donacion/Pago';
import Cachorro from './pages/donacion/Cachorro';
import Abuelo from './pages/donacion/Abuelo';
import VidaFeliz from './pages/donacion/Vida_Feliz';
import Rehabilitacion from './pages/donacion/Rehabilitacion';
import NuevaHuella from './pages/donacion/Nueva_Huella';
import DobleHuella from './pages/donacion/Doble_Huella';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Routes>
  <Route path='/donacion' element={<Donacion/>}></Route>
  <Route path='/donacion_material' element={<Donacionm/>}></Route>
  <Route path='/apadrina' element={<Apadrina/>}></Route>
  <Route path='/pago' element={<Pago/>}></Route>
  <Route path='/plan/cachorro' element={<Cachorro/>}></Route>
  <Route path='/plan/abuelito' element={<Abuelo/>}></Route>
  <Route path='/plan/vida_feliz' element={<VidaFeliz/>}></Route>
  <Route path='/plan/rehabilitacion' element={<Rehabilitacion/>}></Route>
  <Route path='/plan/nueva_huella' element={<NuevaHuella/>}></Route>
  <Route path='/plan/doble_huella' element={<DobleHuella/>}></Route>
</Routes>
</BrowserRouter>
);

