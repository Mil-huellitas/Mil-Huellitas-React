import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Form from "./../../components/donacion/Form_pago";
import '../../components/donacion/form.css'

function Pago(){
    return(
        <section className="donacion">
            <Header/>
            <Form/>
            <Footer/>
        </section>
    )
}

export default Pago;