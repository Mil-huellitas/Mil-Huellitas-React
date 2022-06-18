import './Plan.css'

const FotoPlan=({foto,desf})=>{
    return(
        <div className="container__img">
            <div className="img_plan"><img src={foto} alt={desf} /></div>
        </div>
    );
}

export default FotoPlan;