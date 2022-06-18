import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <div className="nav-dogmenu">
                <Link to="/gatos">
                    <h2 className="opciones"><i className="fa-solid fa-cat"></i>Aprende con nosotros</h2>
                </Link>
                <Link to="/gatos/mitos">
                    <h2 className="opciones"><i className="fa-solid fa-cat"></i>Mitos y Verdades</h2>
                </Link>
                <Link to="/gatos/cuidados">
                    <h2 className="opciones"><i className="fa-solid fa-cat"></i>Cuidados</h2>
                </Link>
                <Link to="/gatos/adiest">
                    <h2 className="opciones"><i className="fa-solid fa-cat"></i>Adiestramiento</h2>
                </Link>
                <Link to="/gatos/tam">
                    <h2 className="opciones"><i className="fa-solid fa-cat"></i>Tamaños y Razas</h2>
                </Link>
            </div>
        </div>
    )
}

export default Menu