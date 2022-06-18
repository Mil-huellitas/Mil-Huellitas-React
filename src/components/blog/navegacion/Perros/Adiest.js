import React from 'react'
import Footer from'../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import MenuPerros from '../../../../components/blog/navegacion/Menu/MenuPerros'
import Sections from '../../../../components/blog/navegacion/Menu/Sections'
import Arriba from '../../../../assets/blog/img/blog/arriba.png'
import Izquierda from '../../../../assets/blog/img/blog/izquierda.png'

function Adiest() {
  return (
    <div>
      <Header />
      <main>

        <div class="tittle">
          <h1>Aprende sobre tu mejor amigo Perruno ⬇</h1>
        </div>
        <Sections />

        <section id="nav-dog">
          <MenuPerros />

          <article class="learnkahoot">
            <h1 class="learn-kahoot">¿Cómo educar un perro? Todo lo que debes saber para entrenarlo</h1>
            <h2>Enseñando a mi cachorro a ir al baño</h2>
            <ol type='1'>
              <li>Premia a tu cachorro y evita los castigos</li>
              <li>Interpreta las señales que te indican cuándo quiere ir al baño.</li>
              <li>Deshazte de los malos olores para que no se confunda</li>
              <li>Mantén tu tono de voz suave y evita gritarle.</li>
            </ol>
          </article>
        </section>

        <section class="kahoot">
          <article class="pitbull">
            <h2>Por qué los perros mueven la cola: cómo se comunican en su lenguaje </h2>
            <div class="pitbull-text">
              <img  class="up" src={Arriba} alt='cargando...' />
              <p>1. ¿A qué edad puedes empezar a educar un perro?

                Según los expertos, la edad ideal para comenzar a entrenarlos es a partir de los cuatro meses. Esta es una etapa donde el cachorro cuenta con un estado cognitivo perfecto para adiestrarlo.
                3. ¿Cómo evitar que tu perro rompa las cosas de la casa?

                Muchos canes sufren de ansiedad y por ello rompen las cosas en la casa, como: cojines, muebles zapatos y otros. La otra razón es en la etapa donde pierden sus dientes de l3. ¿Cómo evitar que tu perro rompa las cosas de la casa?

                Muchos canes sufren de ansiedad y por ello rompen las cosas en la casa, como: cojines, muebles zapatos y otros. La otra razón es en la etapa donde pierden sus dientes de leche y tienen molestias que quieren aliviar.eche y tienen molestias que quieren aliviar.
                2. ¿Cómo educar un perro para hacer sus necesidades en el lugar correcto?

                Desde que el cachorro llega a casa es el momento correcto para ir enseñándole donde va a hacer sus necesidades. Ahora bien, un perro a las 7 semanas no está listo fisiológicamente para controlarse de hacer sus necesidades.
                4. Cómo evitar ladridos compulsivos de tu perro

                Otro motivo de preocupación para los dueños de los cachorros suelen ser los ladridos excesivos. ¿Cómo hacer para evitarlo?</p>
              <img class="up" src={Izquierda} alt='cargando...' />
            </div>

          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Adiest
