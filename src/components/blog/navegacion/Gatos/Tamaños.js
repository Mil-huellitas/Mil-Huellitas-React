import React from 'react';
import Footer from'../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'

import '../../../../css/blog/tamaños-g.css';
import Foto from '../../../../assets/blog/img/blog/istockphoto-1305937455-612x612-PhotoRoom 1.png';
import Gato4 from '../../../../assets/blog/img/blog/gato 4-PhotoRoom 1.png'
import Foto2 from '../../../../assets/blog/img/blog/fff-PhotoRoom 1.png';
import Sections from '../../../../components/blog/navegacion/Menu/Sections'
import Menu from '../../../../components/blog/navegacion/Menu/MenuGatos';

function Tamaños() {
  return (
    <div>
      <Header />
      
      <main>
        <div className="tittle">
          <h1>Aprende sobre tu mejor amigo Gatuno ⬇</h1>
        </div>
        <Sections/>

        <div class="line-blue"></div>

        <section id="nav-dog">
          <Menu/>

          <div class="line-blue"></div>

          <article class="learnkahoot">
            <h1 class="learn-kahoot">Características que hacen del gato criollo la mejor mascota</h1>
            <p>
              El gato criollo y su amorosa relación con sus dueños
              <br />
              Por su carácter dócil y siempre amigable, estos fieles mininos son perfectos para los niños. Imagina
              que tienes otro cariñoso hijo que comparte con tus pequeños; más o menos así es la relación.
              Son los cómplices perfectos para los amantes de los animales: fieles y muy afectuosos, de naturaleza
              mansa y muy nobles. Nunca abandonan a sus dueños, a quienes consideran parte de su manada. Se
              compenetran tanto que se sabe de gatitos que, ante peligros inminentes, defendieron con garras y
              dientes a sus compañeros humanos.
              También son una excelente compañía para quienes viven solos. Un gato criollo siempre estará ahí para
              disfrutar de tus caricias. No hay nada más relajante que sentir el ronroneo de un minino y percibir
              su felicidad al máximo.
              Estos gatitos esperan con ansias el regreso de sus dueños, a quienes reciben con el típico
              acercamiento de su cuerpo. Es una forma muy especial de expresar el amor que sienten y lo demuestran
              con ternura.
              <br />
            </p>
            <img src={Foto} alt="cargando..." />
          </article>
        </section>

        <section class="kahoot">
          <article class="pitbull">
            <h2>¡Una genética muy especial!</h2>
            <div class="pitbull-text">
              <img src={Gato4} alt="cargando..."/>
              <p>Los motivos pueden ser muy variados: desde la alimentación hasta problemas de salud del gato.
                Antes de luchar contra el sobrepeso, habrá que valorar los motivos por los que está engordando.
                No es lo mismo el sobrepeso por castración, a tener un gato gordo por alimentación
                desequilibrada. Según el origen del problema, requerirá una acción diferente por tu parte.
                ¿Cómo puedo saber si está mi gato gordo?
                Se considera un gato gordo cuando supera su peso ideal en un 20%. Este índice de peso es
                orientativo, ya que puede variar notablemente según la raza del gato o su propia constitución.
                <br />
                El gato criollo tiene una muy especial ventaja sobre sus congéneres de raza pura: su increíble
                mestizaje. Gracias a los cruces a los que se ha sometido durante tantas generaciones, ha
                adquirido una genética muy particular. No sufre de esas raras enfermedades genéticas que tienen
                algunas razas de gatos ni experimenta degeneraciones por consanguinidad. Gracias a su alta
                resistencia inmunológica, rara vez padece alguna dolencia.
                Por lo tanto, el gato criollo es formidablemente fuerte y suele mantenerse muy sano. Sin
                embargo, no por ello hay que abandonar sus necesarios cuidados. Lo normal es estar siempre
                pendientes de sus habituales visitas al veterinario y darle siempre una buena alimentación.
                Entonces, si quieres un fiel compañero, amigable, tierno y amoroso, un gato criollo
                definitivamente es lo que estás buscando. Adoptar un gatito, criarlo y darle amor durante sus
                aproximadamente 12 años de vida es una experiencia que no deberías perderte. De seguro la
                disfrutarás mucho.
                <br />
              </p>
              <img src={Foto2} alt="cargando..."/>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Tamaños
