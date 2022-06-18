import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Adopcion from './pages/adopcion/Adopcion';
import Form from './pages/adopcion/Formulario';
import FormAdoptantes from './pages/adopcion/FormAdoptantes';
import Mascota from './pages/adopcion/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
      <Routes>

        <Route path='/adopcion'  element={<Adopcion/>}></Route>
        <Route path='/form-adoptantes' element={<FormAdoptantes/>}></Route>
        <Route path='/formulario' element={<Form/>}></Route>
        <Route path='/:id' element={<Mascota/>}></Route>

      </Routes>
    </BrowserRouter>
);


