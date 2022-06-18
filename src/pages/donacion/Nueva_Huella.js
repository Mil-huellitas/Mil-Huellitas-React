import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/donacion/img/plan_5nuevahuella.jpg";
import '../../css/donacion/Plan.css';
import Huella from '../../assets/donacion/img/Union.png';
import Boton from "../../components/donacion/boton/boton";
import React from 'react';

function  NuevaHuella() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}  
                desf={"PLAN NUEVA HUELLA "}/>
            <div>
            <InfoPlan
                nombre={"PLAN NUEVA HUELLA "}
                valor={"Aporte: $300.000"}
                descripcion={"Tu aporte permite cubrir los gastos veterinarios que se generan dentro de la fundación. Estos gastos abarcan cirugías, exámenes, vacunas y medicamentos necesarios para garantizar la buena salud de nuestros peludos."}
            />
            <Boton
                text={"Apadrinar"}
            />
            <img src={Huella} alt=''className="Huella__nuevahuella"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default NuevaHuella;     
