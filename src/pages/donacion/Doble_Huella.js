import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/donacion/img/plan_6doblehuella.jpg";
import '../../css/donacion/Plan.css';
import Huella from '../../assets/donacion/img/Union.png';
import Boton from "../../components/donacion/boton/boton";
import React from 'react';


function  DobleHuella() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"Plan Doble Huella"}/>
            <div>
            <InfoPlan
                nombre={"PLAN DOBLE HUELLA"}
                valor={"Aporte: $500.000"}
                descripcion={"Tu aporte permite cubrir la estadía de los peludos dentro de la fundación, incluye alimentación, control veterinario con examenes, baños, tambien contribuye con el mantenimiento de las instalaciones."}
            />
            <Boton
                text={"Apadrinar"}
            />
            <img src={Huella} alt=''className="Huella__doblehuella"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default DobleHuella; 
