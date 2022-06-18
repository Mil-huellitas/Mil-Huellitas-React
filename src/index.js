import React from 'react'
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Adopcion from '../src/pages/blog/Adopcion';
import Donacion from '../src/pages/blog/Donacion';
import Blog from '../src/pages/blog/Blog';
import Aliado from '../src/pages/blog/Aliados';

import Inicio from '../src/pages/blog/Inicio';
import Perros from '../src/components/blog/navegacion/Perros';
import Gatos from '../src/components/blog/navegacion/Gatos';

import PerrosAdiest from '../src/components/blog/navegacion/Perros/Adiest';
import PerrosCuidados from '../src/components/blog/navegacion/Perros/Cuidados';
import PerrosMitos from '../src/components/blog/navegacion/Perros/Mitos';
import PerrosTamaños from '../src/components/blog/navegacion/Perros/Tamaños';

import GatosAdiest from '../src/components/blog/navegacion/Gatos/Adiest';
import GatosCuidados from '../src/components/blog/navegacion/Gatos/Cuidados';
import GatosMitos from '../src/components/blog/navegacion/Gatos/Mitos';
import GatosTamaños from '../src/components/blog/navegacion/Gatos/Tamaños';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Inicio />} ></Route>
        <Route path='/adopcion' element={<Adopcion />}></Route>
        <Route path='/donacion' element={<Donacion />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/aliado' element={<Aliado />}></Route>

        <Route path='/perros' element={<Perros />}></Route>
        <Route path='/perros/adiest' element={<PerrosAdiest />}></Route>
        <Route path='/perros/cuidados' element={<PerrosCuidados />}></Route>
        <Route path='/perros/mitos' element={<PerrosMitos />}></Route>
        <Route path='/perros/tamyrazas' element={<PerrosTamaños />}></Route>

        <Route path='/gatos' element={<Gatos />}></Route>
        <Route path='/gatos/adiest' element={<GatosAdiest />}></Route>
        <Route path='/gatos/cuidados' element={<GatosCuidados />}></Route>
        <Route path='/gatos/mitos' element={<GatosMitos />}></Route>
        <Route path='/gatos/tam' element={<GatosTamaños />}></Route>

        <Route path='/*' element={<Navigate to={"/"} />}></Route>
        <Route path='/home' element={<Navigate to={"/"} />}></Route>
    </Routes>
  </BrowserRouter>
  );

