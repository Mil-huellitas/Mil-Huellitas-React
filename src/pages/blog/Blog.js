import React from 'react'
import BotonPerro from '../../assets/blog/img/blog/botonperro.png';
import BotonGato from '../../assets/blog/img/blog/botongato.png'
import IconoGato from '../../assets/blog/img/blog/sistema-de-iconos-con-los-gatos-vector-plano-del-diseño-80944213 5-PhotoRoom.png';
import Bullblan from '../../assets/blog/img/blog/bullblan-PhotoRoom.png';
import Rayado from '../../assets/blog/img/blog/rayado-PhotoRoom.png';
import Patas from '../../assets/blog/img/blog/patas 1 1.png';
import { Link } from 'react-router-dom';
import '../../css/blog/estilosblog.css'

import Header from '../../components/header/header.txt'
import Footer from '../../components/footer/footer.txt'

function Blog() {
  return (
    <div>
      <Header />
      <main>
        <div className="tittle">
          <h1>¡Bienvenidos a nuestro blog!</h1>
        </div>
        <section id="sections">

          <article className="dog">
            <div className="button-dog">
              <Link to="/perros">
                <h3>Perros</h3>
                <img src={BotonPerro} alt="perrito" />
              </Link>
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
        <div className="line-blue"></div>
        <h1 className="subt-section">Datos que no sabías de tu mascota</h1>

        <section id="services">
          <article className="date-services">
            <img
              src={IconoGato} alt="icono" />

            <p>Gatos y perros, utilizan la misma técnica para beber agua seguro que es algo que nunca te habías
              cuestionado. Ambos doblan la punta de la lengua y elevan el agua en vertical hasta la boca.</p>

          </article>

          <article className="date-services">
            <img src={Bullblan} alt="bullban" />
            <p> Tienen las glándulas sudoríparas en las patas, exactamente, entre las almohadillas de las patas. Es
              por eso, no es extraño que vayan dejando un rastro húmedo con sus patas los días más calurosos.</p>

          </article>

          <article className="date-services">
            <img src={Rayado} alt="rayado" />
            <p>Sus bigotes le ayudan a ver en la oscuridad
              No se trata de visión nocturna, claro está. Pero es cierto que gracias a sus bigotes pueden detectar
              cambios sutiles en las corrientes de aire, lo que les da información sobre el tamaño, la forma y la
              velocidad de las cosas cercanas. Así, pueden percibir mejor la proximidad de algún peligro, aunque
              sea de noche</p>
          </article>
        </section>
      </main>
      <div className="shoes">
        <img src={Patas} alt="patas" />
      </div>
      <Footer />
    </div>
  )
}

export default Blog