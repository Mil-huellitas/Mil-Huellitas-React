import Btn_gato from '../../../assets/adopcion/img/btongato.svg'
import '../../../css/adopcion/Buttoncat.css';

const Buttoncat=({name})=>{

    return(
        <div className="cat-bton">
        <button className="bton-cat"> Sigue mirando más gatitos
            <img src={Btn_gato} alt="Imagen de botón de gato"></img>
        </button></div>
    );
}

export default Buttoncat;