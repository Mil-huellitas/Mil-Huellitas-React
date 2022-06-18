



import PerrosAdiest from '../src/components/blog/navegacion/Perros/Adiest';
import PerrosCuidados from '../src/components/blog/navegacion/Perros/Cuidados';
import PerrosMitos from '../src/components/blog/navegacion/Perros/Mitos';
import PerrosTamaños from '../src/components/blog/navegacion/Perros/Tamaños';

import GatosAdiest from '../src/components/blog/navegacion/Gatos/Adiest';
import GatosCuidados from '../src/components/blog/navegacion/Gatos/Cuidados';
import GatosMitos from '../src/components/blog/navegacion/Gatos/Mitos';
import GatosTamaños from '../src/components/blog/navegacion/Gatos/Tamaños';

import Blog from './pages/blog/Blog'




import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/home/Home';
import FormularioLogin from './pages/login/FormularioLogin';


import Aliados from './pages/aliados/Aliados'
import Accesorios from './pages/aliados/Accesorios';
import Comida from './pages/aliados/Comida'
import Cuidados from './pages/aliados/Cuidados'
import Juguetes from './pages/aliados/Juguetes'

import Adopcion from './pages/adopcion/Adopcion';
import Form from './pages/adopcion/Formulario';
import FormAdoptantes from './pages/adopcion/FormAdoptantes';
import Mascota from './pages/adopcion/Mascota';

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

      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Navigate to={"/"} />}></Route>
      <Route path='/formulario' element={<FormularioLogin/>}></Route> 

        
      <Route path="/aliados" element={<Aliados />}></Route>
      <Route path="/aliados/accesorios" element={<Accesorios />}></Route>
      <Route path="/aliados/comida" element={<Comida />}></Route>
      <Route path="/aliados/cuidados" element={<Cuidados />}></Route>
      <Route path="/aliados/juguetes" element={<Juguetes />}></Route>

      <Route path='/adopcion'  element={<Adopcion/>}></Route>
      <Route path='/form-adoptantes' element={<FormAdoptantes/>}></Route>
      <Route path='/formulario-pets' element={<Form/>}></Route>
      <Route path='/:id' element={<Mascota/>}></Route>

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





     

        <Route path='/blog' element={<Blog />}></Route>

        <Route path='/perros/adiest' element={<PerrosAdiest />}></Route>
        <Route path='/perros/cuidados' element={<PerrosCuidados />}></Route>
        <Route path='/perros/mitos' element={<PerrosMitos />}></Route>
        <Route path='/perros/tamyrazas' element={<PerrosTamaños />}></Route>

        <Route path='/gatos/adiest' element={<GatosAdiest />}></Route>
        <Route path='/gatos/cuidados' element={<GatosCuidados />}></Route>
        <Route path='/gatos/mitos' element={<GatosMitos />}></Route>
        <Route path='/gatos/tam' element={<GatosTamaños />}></Route>

    </Routes>
    </BrowserRouter>
);
