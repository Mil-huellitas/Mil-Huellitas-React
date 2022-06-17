import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/*Páginas adopción*/
import Adopcion from './pages/adopcion/Adopcion';
import Form from './pages/adopcion/Formulario';
import FormAdoptantes from './pages/adopcion/FormAdoptantes';
import Mascota from './pages/adopcion/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
      <Routes>

        <Route path="/" element={<Adopcion/>}></Route>
        <Route path='/adopcion'  element={<Navigate replace to={"/"} />}></Route>
        <Route path='/form-adoptantes' element={<FormAdoptantes/>}></Route>
        <Route path='/formulario' element={<Form/>}></Route>
        <Route path='/:id' element={<Mascota/>}></Route>

      </Routes>
    
    </BrowserRouter>
);


