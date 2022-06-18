import React from 'react';
import Footer from '../../../../components/footer/Footer'
import Header from '../../../../components/header/Header'
import '../../../../css/blog/cuidados-g.css';
import CuidadoGatuno from '../../../../assets/blog/img/blog/cuidado gato-PhotoRoom 1.png';
import Garrapatas from '../../../../assets/blog/img/blog/gato 2-PhotoRoom 1.png'
import Sections from '../../../../components/blog/navegacion/Menu/Sections';
import Menu from '../../../../components/blog/navegacion/Menu/MenuGatos';

function Cuidados() {
    return (
        <>
            <div>
                <Header />

                <div>
                    <div className="tittle">
                        <h1>Aprende sobre tu mejor amigo Gatuno ⬇</h1>
                    </div>
                    <Sections />

                    <div className="line-blue"></div>

                    <div id="nav-dog">
                        <Menu />

                        <div className="line-blue"></div>


                        <div className="learnkahoot">
                            <h1 className="learn-kahoot">Aprende sobre el cuidado de las huellas de gatos</h1>
                            <p>
                                Aunque los gatos dedican gran parte de su tiempo al aseo, a veces necesitan un cuidado extra. Generalmente, no le damos atención a esa parte del cuerpo, pero es considerada una de las más importantes, entre otras razones porque ahí se pueden alojar las garrapatas.

                                Las garrapatas son parásitos que entierran la cabeza en la piel de tu gato para poder succionar su sangre. Según la Organización Panamericana de la Salud (OPS, 2014): “Mosquitos, garrapatas, moscas y otros insectos pueden ser mucho más que una molestia”.
                                <br />
                                <br />
                            </p>
                            <img src={Garrapatas} alt="cargando..." />
                        </div>
                    </div>
                </div>



                <div className="kahoot">
                    <div className="pitbull">

                        <h2>Gato gordo: actúa para combatir su obesidad</h2>
                        <div className="pitbull-text">

                            <img src={CuidadoGatuno} alt="cargando..." />

                            <p>Los motivos pueden ser muy variados: desde la alimentación hasta problemas de salud del gato. Antes de luchar contra el sobrepeso, habrá que valorar los motivos por los que está engordando. No es lo mismo el sobrepeso por castración, a tener un gato gordo por alimentación desequilibrada. Según el origen del problema, requerirá una acción diferente por tu parte.
                                <br />¿Cómo puedo saber si está mi gato gordo?
                                <br /> Se considera un gato gordo cuando supera su peso ideal en un 20%. Este índice de peso es orientativo, ya que puede variar notablemente según la raza del gato o su propia constitución.
                                ¿Cómo conseguir que tu mascota deje de ser un gato gordo?
                                El primer paso que hay que dar siempre es consultar al veterinario, quien determinará qué está provocando el sobrepeso. En el caso de las mascotas, el motivo más frecuente es la sobrealimentación o la nutrición desequilibrada. Analiza su alimentación: infórmate sobre si su pienso es el más adecuado y equilibrado posible. Algunas marcas adicionan cereales en exceso para hacer su pienso más sabroso. Esto incide en que sea menos saludable.
                                Anímale a ejercitarse: el ejercicio favorito y más indicado para un felino es el juego. A los gatos les encanta jugar, así que aprovecha esto para mantenerlo activo. Proporciónale juguetes, como pelotas, sonajeros o muñecos.
                                Controla los horarios: controla las comidas que hace y las cantidades. Colócale el pienso, espera a que coma y después retira el comedero.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cuidados
