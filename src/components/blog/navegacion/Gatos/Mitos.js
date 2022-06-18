import React from 'react'

import GatoNegro from '../../../../assets/blog/img/blog/242328-1600x1030-gato-negro-PhotoRoom 1-PhotoRoom.png'
import PhotoRoom2 from '../../../../assets/blog/img/blog/istockphoto-1316683775-612x612-PhotoRoom(1) 1.png';
import '../../../../css/blog/mitos-g.css'
import Footer from'../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import Sections from '../Menu/Sections';
import Menu from '../Menu/MenuGatos';

function Mitos() {
  return (
    <div>
      <Header />

      <main>
        <div className="tittle">
          <h1>Aprende sobre tu mejor amigo Gatuno ⬇</h1>
        </div>
        <Sections/>

        <div className="line-blue">
        </div>

        <div id="nav-dog">
          <Menu/>

          <div className="line-blue"></div>


          <div className="learnkahoot">
            <h1 className="learn-kahoot">Rompiendo mitos sobre los gatos negros</h1>
            <p>
              No hay una idea más equivocada que la supuesta mala suerte que se le ha atribuido a estos amigos del
              hombre solo por su color. Por el contrario, estos animalitos son muy tiernos y cariñosos, igual que
              cualquiera de sus congéneres.
              Como ya sabes, la mala fama hace que los gatos negros no sean muy apreciados y se queden en las
              casas de adopción. Algo muy injusto considerando que pueden ser una gran compañía y dar tanto o más
              que cualquier otra mascota.
              Si tienes pensado adoptar un gatito ¡anímate! Elige gatos negros y déjate llevar por la emoción, el
              amor y la compañía incondicional que te pueden dar. Incluso, puedes revisar los nombres de gatos y
              escoger el que más se adapte a su increíble y hermoso pelaje. Seguro encontrarás buenas y bonitas
              opciones para tus nuevos compañeros fieles.
              <br />
              <br />
              ¡Adoptar es dar amor!
            </p>
            <div className="gato--negro">
              <img src={GatoNegro} alt="gato-negro" /></div>
          </div>
        </div>



        <div className="kahoot">
          <div className="pitbull">

            <h2>Vidas del gato: conoce el origen del mito de sus siete vidas</h2>
            <div className="vidas-gato-container">
              <div className="vidas-gato-img">
                <img src={PhotoRoom2} alt="cargando..." /></div>
              <p>Los gatos en el antiguo Egipto En el antiguo Egipto se creía que los gatos podían observar el
                alma humana con sus grandes ojos. Además, eran los guardianes de las cosechas de cereales
                (Aguilar, 20218b).
                Al ser definido como un animal con cualidades sobrenaturales es probable que el mito de las
                siete vidas del gato se extendiera hasta llegar a nuestros días.
                <br />
                El gato es un animal con cualidades privilegiadas
                La creencia sobre las siete vidas del gato también guarda relación con sus habilidades físicas.
                Es un animal que tiene la capacidad de movilizarse en lugares poco accesibles. Puede saltar y
                caer sano y salvo desde lugares muy altos. Cae de pie en muchas ocasiones gracias a su capacidad
                de enderezarse en vuelo (Alfaro, s.f).
                Las piernas de los gatos son elásticas. Esto les permite desarrollar músculos que les permiten
                amortiguar el impacto al momento de las caídas (Nasaw, 2012).
                <br />
                ¿Siete vidas del gato o nueve? Desde la antigüedad el número siete se considera mágico (Clarín,
                2014). El siete es un número de la suerte, los días de la semana también son siete y existe la
                creencia que afirma que si rompes un espejo tendrás siete años de mala suerte. Las siete vidas
                del gato tienen relación con todo ese universo de supersticiones que rodean a este número
                (Aguilar, 2019).
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Mitos
