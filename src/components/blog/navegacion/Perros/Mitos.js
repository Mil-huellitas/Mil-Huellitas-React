import React from 'react'
import Footer from'../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import MenuPerros from '../../../../components/blog/navegacion/Menu/MenuPerros'
import Sections from '../../../../components/blog/navegacion/Menu/Sections'
import DuoNegro from '../../../../assets/blog/img/blog/duo negro.png'
import Pitbull from '../../../../assets/blog/img/blog/pitbull.png'


function Mitos() {
  return (
    <div>
      <Header/>
      <main>

        <div class="tittle">
          <h1>Aprende sobre tu mejor amigo Perruno ⬇</h1>
        </div>
        <Sections />

        <section id="nav-dog">
          <MenuPerros />

          <article class="learnkahoot">
            <h1 class="learn-kahoot">Mitos y verdades sobre los criaderos de perros</h1>
            <h2>¿Qué debes tener en cuenta al momento de buscar un criadero de perros?</h2>
            <p>
              El lugar y la infraestructura

              El decreto 0780 prohíbe la explotación comercial e instalación de criaderos de animales dentro del
              perímetro urbano. De esta forma, deben ser lugares aptos para la crianza de animales que cuente con
              espacios adaptados a los servicios que ofrecen.
              <br />
              Personal especializado

              Servicios como adiestramiento, cuidados medicos, vacunación, boutique, cría y venta de cachorros son
              comunes en los criaderos de perros. Este tipo de establecimientos debe contar con profesionales en
              veterinaria y etología
              <br />

            </p>


          </article>
        </section>



        <section class="kahoot">
          <article class="pitbull">
            <div class="pitbull-text">
              <p>Infórmate

                Ya sea que busques adoptar o comprar un perro, es necesario que te informes con antelación.
                Visita más de un lugar, corrobora la higiene y ambiente en que viven los caninos. El apoyo
                económico a este tipo de espacios son la princpipal herramienta para su regulación
                <img class= "duonegro" src={DuoNegro} alt='cargando...' />

                Exige documentación

                Algunos de estos lugares venden cachorros por debajo de los tres meses de nacidos. En otras
                ocasiones, los entregan con un destete prematuro para alterar sus condiciones físicas. Por esta
                razón, es importante que solicites carné de vacunación.
              </p>
              <img class= "pitbull" src={Pitbull} alt='cargando...' />
            </div>

          </article>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}

export default Mitos
