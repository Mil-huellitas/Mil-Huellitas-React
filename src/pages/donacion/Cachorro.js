import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import FotoPlan from "../../components/donacion/Fotoplan";
import InfoPlan from "../../components/donacion/InfoPlan";
import Foto from "../../assets/img/donacion/plan_1cachorro.jpg";
import '../../components/donacion/Plan.css';
import Huella from '../../assets/img/donacion/Union.png';
import Boton from "../../components/boton/boton";

function  Cachorro() {
    return (  
        <section className="container__page">
            <Header/>
            <div className="bodyplan">
            <FotoPlan
                foto={Foto}
                desf={"PlanCachorro"}/>
            <div>
            <InfoPlan
                nombre={"PLAN CACHORRO"}
                valor={"Aporte: $100.000"}
                descripcion={"Tu aporte permite cubrir necesitades básicas de los cachorros tal como desparasitación, vacunas, y alimento apto para su edad."}
            />
            <Boton
                text={"Apadrinar"}
            />
            <img src={Huella} alt=''className="Huella__cachorro"/>
            </div>
            </div>
            <Footer/>
        </section>
    );           
}

export default Cachorro;