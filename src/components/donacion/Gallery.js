import { Link } from 'react-router-dom';
import './Galery.css'

function Gallery (props){
    return(

        <div className="Container_Doneco">
            <div >
            <img src={props.image} alt={props.altimage} className="Card_Doneco"/>
            </div>
            <div className="Card_Doneco__text">
                <img src={props.title} alt={props.alttitle} className="Card_Doneco__text__donar"/>
                <img src={props.value} alt={props.altvalue} className={`${props.class}`}/>
            </div>
            <div className="Card_Doneco__hover">
            <Link to='/pago' className="Card_Doneco__hover_text" >{props.text}</Link>
            </div>
        </div>
    );
}
export default Gallery;