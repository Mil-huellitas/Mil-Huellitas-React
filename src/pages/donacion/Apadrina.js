import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Info from "./../../components/donacion/Donacion_info";
import Gallerya from "../../components/donacion/Gallerya";
import Galleryp from "../../components/donacion/Galleryp";
import { getAllApadrina, getAllPlanes } from "../../js/donacion/Infodonacion";
import '../../components/donacion/Galery.css'

function Apadrina(){
    const gallerya=getAllApadrina();
    const galleryp=getAllPlanes();
    return(
        <section className="donacion">
            <Header/>
            <Info/>
            <div class="title_ap">
            <h2>APADRINA</h2>
            </div>
                <div className="galerry_doneco">
                    {
                        gallerya.map(p=>(
                            <Gallerya
                            image={p.image}
                            altimage={p.altimage}
                            title={p.title}
                            alttitle={p.alttitle}
                            value={p.value}
                            altvalue={p.altvalue}
                            text={p.text}
                            class={p.class}/>
                        ))
                    }
                </div>
            <div class="title_ap">
                <h2>PLANES</h2>
            </div>
            <div className="galerry_doneco">
                    {
                        galleryp.map(p=>(
                            <Galleryp
                            image={p.image}
                            altimage={p.altimage}
                            title={p.title}
                            alttitle={p.alttitle}
                            value={p.value}
                            altvalue={p.altvalue}
                            text={p.text}
                            link={p.link}
                            redir={p.redir}
                            class={p.class}/>
                        ))
                    }
            </div>
            <Footer/>
        </section>
    )
}

export default Apadrina;