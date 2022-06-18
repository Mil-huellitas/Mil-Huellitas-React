import { Link } from 'react-router-dom';
import Icono from '../../../assets/donacion/img/huella_boton.svg';
import './boton.css';
import React from 'react';

function Boton(btn) {
    return(
    <section className='botonco'>
        <div className='btn--container'>
            <button className='btn__pago'><Link to="/pago" className='btn__pago_link'>{btn.text}</Link></button>
            <Link className="la__a" to="/pago"><img className='huella__btn' src={Icono} alt=""></img></Link>
        </div>
        <Link to='/apadrina' className='plan-l'><i class="fa-solid fa-caret-left"></i>Otros Planes</Link>
    </section>
    );
}

export default Boton;
