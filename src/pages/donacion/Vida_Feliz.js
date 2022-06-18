import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/donacion/img/plan_3vidafeliz.jpg";
import '../../css/donacion/Plan.css';
import Huella from '../../assets/donacion/img/Union.png';
import Boton from "../../components/donacion/boton/boton";

function  VidaFeliz() {
    return (  
        <section>
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanVidaFeliz"}/>
            <div>
            <InfoPlan
                nombre={"PLAN VIDA FELIZ"}
                valor={"Aporte: $150.000"}
                descripcion={"Tu aporte contribuye con los gastos que conlleva un nuevo rescate, entre ellos el traslado, la estadía y chequeo médico del peludo con su respectivo  tratamiento. "}
            />
            <Boton
                text={"Apadrinar"}
            />
            <img src={Huella} alt=''className="Huella__vidafeliz"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default VidaFeliz;