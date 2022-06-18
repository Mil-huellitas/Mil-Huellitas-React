import Header from "../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/donacion/img/plan_2abuelito.jpg";
import '../../css/donacion/Plan.css';
import Huella from '../../assets/donacion/img/Union.png';
import Boton from "../../components/donacion/boton/boton";

function  Abuelo() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanAbuelito"}/>
            <div>
                <InfoPlan
                nombre={"PLAN ABUELITO"}
                valor={"Aporte: $120.000"}
                descripcion={"Tu aporte contribuye a cubrir los cuidados especiales de los abuelitos que tenemos en la fundación, tales como refuerzo de vacunas, alimento especifico para su edad y exámenes de control."}
            />
            <Boton
                text={"Apadrinar"}
            />
            <img src={Huella} alt=''className="Huella__abuelito"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default Abuelo;