import React from 'react'
import { Link } from 'react-router-dom'

function MenuPerros() {
    return (
        <div>
            <article className="nav-dogmenu">
                <Link to="/perros">
                    <h2 className="opciones"><i className="fa-sliid fa-dog"></i>Aprende con nosotros</h2>
                </Link>
                <Link to="/perros/mitos">
                    <h2 className="opciones"><i className="fa-sliid fa-dog"></i>Mitos y Verdades</h2>
                </Link>
                <Link to="/perros/cuidados">
                    <h2 className="opciones"><i className="fa-sliid fa-dog"></i>Cuidados</h2>
                </Link>
                <Link to="/perros/adiest">
                    <h2 className="opciones"><i className="fa-sliid fa-dog"></i>Adiestramiento</h2>
                </Link>
                <Link to="/perros/tamyrazas">
                    <h2 className="opciones"><i className="fa-sliid fa-dog"></i>Tamaños y Razas</h2>
                </Link>
            </article>
        </div>
    )
}

export default MenuPerros