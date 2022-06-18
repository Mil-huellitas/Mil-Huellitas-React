import './Footer.css'
import iconPhone from './img/phone.svg'
import iconLocate from './img/locate.svg'
import iconClock from './img/clock.svg'
import iconFacebook from './img/facebook.svg'
import iconInstagram from './img/instagram.svg'
import iconYoutube from './img/youtube.svg'
import iconGmail from './img/gmail.svg'

function Footer(){
 return(
    /*Características del componente*/
        <footer>
            <div className="footer__information">
                
                <div className="information-piece primary">
                    
                    <div className="information">
                        <img src={iconLocate} alt="Icono de ubicación"></img>
                        <div>
                            <p>Sede Chapinero</p>
                            <p>Kra 12 #34-56, Rosales</p>
                        </div>
                    </div>

                    <div className="information">
                        <img src={iconPhone} alt="Icono de teléfono"></img>
                        <div>
                            <p>(+57) 312 456 7890</p>
                        </div>
                    </div>
                </div>

                <div className="information-piece secondary">
                    <div className="information">
                        <img src={iconGmail} alt="Icono de gmail"></img>
                        <div>
                            <p>milhuellitas@correo. com</p>
                        </div>
                    </div>
            
                    <div className="information">
                        <img src={iconClock} alt="Icono de reloj"></img>
                        <div>
                            <p>Todos los días</p> 
                            <p> 8:00am - 7:00pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__loyal-text">
                <p><strong>Textos legales</strong></p>
                <p>Políticas de privacidad</p>
                <p>Política de cookies</p>
            </div>
        
            <div className="footer__social-media">
                <p><strong>Síguenos en redes sociales</strong></p>
                <div>
                <a href="https://instagram.com/milhuellitas5?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><img src={iconInstagram} alt="Icono de Instagram"></img></a> 
                <a href="https://www.facebook.com/profile.php?id=100079394081794" target='_blank' rel="noreferrer"><img src={iconFacebook} alt="Icono de Facebook"></img></a> 
                <a href="https://youtube.com/channel/UCrf9Xj2T4oYp5MYyUfpPE3A" target='_blank' rel="noreferrer"><img src={iconYoutube} alt="Icono de Youtube"></img></a>
                </div>
            </div>
    </footer>
 );
}

export default Footer;