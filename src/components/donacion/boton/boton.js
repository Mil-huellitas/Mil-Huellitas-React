import { Link } from 'react-router-dom';
import Icono from '../../../assets/donacion/img/huella_boton.svg';
import './boton.css';
import React from 'react';

function Boton(btn) {
    return(
    <section className='botonc'>
        <div className='btn-container'>
            <button className='btn_pago'><Link to="/pago" className='btn_pago_link'>{btn.text}</Link></button>
            <Link className="la_a" to="/pago"><img className='huella_btn' src={Icono} alt=""></img></Link>
        </div>
        <Link to='/apadrina' className='plan'><i class="fa-solid fa-caret-left"></i>Otros Planes</Link>
    </section>
    );
}

export default Boton;
