import { Link } from 'react-router-dom';
import '../../css/donacion/Galery.css'

function Galleryp (props){
    return(

        <div className="Container_Doneco">
            <div >
            <img src={props.image} alt={props.altimage} className="Card_Doneco"/>
            </div>
            <div className="Card_Doneco__text">
                <img src={props.title} alt={props.alttitle} className="Card_Doneco__text__plan"/>
                <img src={props.value} alt={props.altvalue} className={`${props.class}`}/>
            </div>
            <div className="Card_Doneco__hover">
            <p className="Card_Doneco__hover_textp" >{props.text}</p>
            <Link to={`/plan/${props.redir}`} className="Card_Doneco__hover_textl">{props.link}</Link>
            </div>
        </div>
    );
}
export default Galleryp;