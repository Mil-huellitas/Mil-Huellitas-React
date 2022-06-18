import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/donacion/img/plan_4rehabilitacion.jpg";
import '../../css/donacion/Plan.css';
import Huella from '../../assets/donacion/img/Union.png';
import Boton from "../../components/donacion/boton/boton";
import React from 'react';

function  Rehabilitacion() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanRehabilitación"}/>
            <div>
            <InfoPlan
                nombre={"PLAN REHABILITACIÓN "}
                valor={"Aporte: $200.000"}
                descripcion={"Tu aporte contribuye con el proceso de rehabilitación para aquellos peludos rescatados que han sufrido fracturas u otras condiciones que afectan su salud y han tenido intervenciones quirúrgicas."}
            />
            <Boton
                text={"Apadrinar"}
            />
            <img src={Huella} alt=''className="Huella__rehabilitacion"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default Rehabilitacion;
