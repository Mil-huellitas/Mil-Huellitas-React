import { Link } from 'react-router-dom';
import './Donacion_info.css';
import Principal from'./img/principal.jpg';

function Info(){
    return (
        <main>
            <section class="banner_Donacion">
                <h3>Tu puedes ser</h3>
                <h2> parte de la</h2>
                <h1>solución</h1>
            </section>
            <div class="title_information"><h2>CON TU AYUDA</h2></div>
            <section class="information">
                <div class="img_information"><img src={Principal} alt="Unión" /></div>
                <div class="information__text general_text">
                        <p>Protegemos y transformamos la vida de los peludos que han sido rescatados y no tienen un hogar.</p>
                        <p>Con tus aportes podremos cubrir los procesos de rescate, traslado, recuperación, tratamientos veterinarios, transportes, medicamentos, recuperación de traumas y terapias de conducta. Así mismo cubrirán gastos de alimentación, esterilizaciones, insumos médicos, servicios de guardería, empleados, manutención en sus hogares de paso.</p>
                </div>
                <div class="information__text data_text">
                        <h4>Medios de Donación</h4>
                        <p>Cuenta ahorros Bancolombia: 19000141234</p>
                        <p>Cuenta ahorros Davivienda 9870123456 </p>
                        <p>Nequi / Daviplata: 300 2112345</p>
                        <p>Paypal: milhuellitas@correo.com </p>
                </div>
            </section>

            <section class="buttons">
                <button class="button_active"><Link to="/donacion">Donación Económica</Link></button>
                <button><Link to="/donacion_material">Donación Material</Link></button>
                <button><Link to="/apadrina">Apadrinamiento</Link></button>
            </section>
        </main>
    )
}

export default Info;