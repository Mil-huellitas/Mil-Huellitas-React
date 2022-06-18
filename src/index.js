import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  BrowserRouter,Route, Routes } from 'react-router-dom'
import Aliados from './pages/aliados/Aliados'
import Accesorios from './pages/aliados/Accesorios';
import Comida from './pages/aliados/Comida'
import Cuidados from './pages/aliados/Cuidados'
import Juguetes from './pages/aliados/Juguetes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/aliados" element={<Aliados />}></Route>
      <Route path="/aliados/accesorios" element={<Accesorios />}></Route>
      <Route path="/aliados/comida" element={<Comida />}></Route>
      <Route path="/aliados/cuidados" element={<Cuidados />}></Route>
      <Route path="/aliados/juguetes" element={<Juguetes />}></Route>
    </Routes>
    </BrowserRouter>
);


