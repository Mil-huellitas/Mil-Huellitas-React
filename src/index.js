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
      <Route path='/formulario' element={<Form/>}></Route>
      <Route path='/:id' element={<Mascota/>}></Route>
    </Routes>
    </BrowserRouter>
);
