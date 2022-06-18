import React from 'react'
import Footer from'../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import MenuPerros from '../../../../components/blog/navegacion/Menu/MenuPerros'
import Sections from '../../../../components/blog/navegacion/Menu/Sections';
import DocNegro from '../../../../assets/blog/img/blog/doc_negro.png'
import DocBlanco from '../../../../assets/blog/img/blog/doc_blanco.png'
import Biagle from '../../../../assets/blog/img/blog/biagle.png'

function Cuidados() {
  return (
    <div>
      <Header/>
      <main>
        <div className="tittle">
          <h1>Aprende sobre tu mejor amigo Perruno ⬇</h1>
        </div>
        <Sections />


        <section id="nav-dog">
          <MenuPerros />

          <article className="learnkahoot">
            <h1 className="learn-kahoot">Algunos alimentos que no se deben dar a los perros</h1>
            <ul>
              <li>Chocolate</li>
              <li>Cebolla y Ajo</li>
              <li>Queso</li>
              <li>Aguacate</li>
              <li>Uvas</li>
            </ul>
            <img src={DocNegro} alt='cargando...' />

          </article>
        </section>



        <section className="kahoot">
          <article className="pitbull">

            <h2>Cómo convivir con tu mascota si tienes alergia a los perros. </h2>
            <div className="pitbull-text">
              <img src={DocBlanco} alt='cargando...' />
              <ol type='1'>
                <li>Aseo adecuado de tu mascota</li>
                <li>Higiene del hogar</li>
                <li>No utilices alfombras</li>
                <li>Purifica el aire</li>
                <li>Evita que tu perro entre en algunas zonas de tu casa</li>
              </ol>
              <img src={Biagle} alt='cargando...' />
            </div>

          </article>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}

export default Cuidados;
