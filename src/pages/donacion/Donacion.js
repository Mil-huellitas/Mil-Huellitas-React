import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Info from "./../../components/donacion/Donacion_info";
import Gallery from "../../components/donacion/Gallery";
import { getAllEconomica } from "../../js/donacion/Infodonacion";
import '../../css/donacion/Galery.css'
import React from 'react';

function Donacion(){
    const gallery=getAllEconomica();
    return(
        <section className="donacion">
            <Header/>
            <Info/>
            <div >
            <div>
                <div className="galerry_doneco">
                    {
                        gallery.map(p=>(
                            <Gallery 
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
            </div> 
        </div>
            <Footer/>
        </section>
    )
}

export default Donacion;
