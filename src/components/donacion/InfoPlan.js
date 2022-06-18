import './Plan.css'

const InfoPlan=({nombre,valor,descripcion})=>{
    return(
        <section className='plan__container'>
        <h1 className='plan__title'>{nombre}</h1>
        <div className='container__plan__subtitle'>
            <h3 className='plan__subtitle'>{valor}</h3>
        </div>
        <p className='plan__text'>{descripcion}</p>
        </section>
    );
}

export default InfoPlan;