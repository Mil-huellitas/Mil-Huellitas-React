import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
// import Adopcion from './pages/adopcion';
// import Aliados from './pages/aliados';
// import Blog from './pages/blog';
// import Donacion from './pages/donacion';
import Home from './pages/home/Home';
// import FormularioLogin from './pages/login/FormularioLogin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      {/* <Route path='/adopcion' element={<Adopcion />}></Route>
      <Route path='/donacion' element={<Donacion />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/aliados' element={<Aliados />}></Route>
      <Route path='/formulario' element={<FormularioLogin/>}></Route> */}

      <Route path='/home' element={<Navigate to={"/"} />}></Route>
    </Routes>
  </BrowserRouter>
);