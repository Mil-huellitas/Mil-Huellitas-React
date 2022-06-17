//import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
//<Header />


import Pets from '../../components/adopcion/pets/Pets';
import Slides from '../../components/adopcion/slide/Slide';
import Requirement from '../../components/adopcion/requirement/Requirement';

function Adopcion(){
    return(
        <div>          
            <Slides />
            <Pets />
            <Requirement />
            <Footer />
        </div>
    )
}

export default Adopcion;


