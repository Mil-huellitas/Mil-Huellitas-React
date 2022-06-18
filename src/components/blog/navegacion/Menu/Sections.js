import React from 'react'
import { Link } from 'react-router-dom'
import BotonPerro from '../../../../assets/blog/img/blog/botonperro.png';
import BotonGato from '../../../../assets/blog/img/blog/botongato.png'

function Sections() {
  return (
    <div>
        <section id="sections">
          <article className="dog">
            <div className="button-dog">
              <Link to="/perros">
                <h3>Perros</h3>
                <img src={BotonPerro} alt="perrito" /></Link>
            </div>
          </article>

          <article className="cat">
            <div className="button-cat">
              <Link to="/gatos">
                <h3>Gatos</h3>
                <img src={BotonGato} alt="gatito" />
              </Link>
            </div>
          </article>
        </section>
    </div>
  )
}

export default Sections