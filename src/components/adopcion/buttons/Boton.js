import '../../../css/adopcion/boton.css';

function Boton() {
    return(
    <section className='botonc'>

        <div className='btn-container'>
            <button className='btn_pago'> Enviar datos </button>
            <a className="la_a" href='/formulario'><i class="fa-solid fa-paper-plane"></i></a>
        </div>
   
    </section>
    );
}

export default Boton;