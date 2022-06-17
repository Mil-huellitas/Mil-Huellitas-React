import React from 'react'
import '../../css/aliados/aliados.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Huellita from '../../assets/img/aliados/huellita.png'
import Carousel from '../../components/carousel/Carousel'
import ProductTypeList from '../../components/productTypeList/ProductTypeList'
import BrandList from '../../components/brandList/BrandList'
import products from '../../constants/products'
import brands from '../../constants/brands'
import bannerImages from '../../constants/bannerImages'

const Aliados = () => {
  return (
    <>
      <Header />
      <main>
        <section className="fondo">
          <Carousel images={bannerImages.home} />

          <section className="titleAllies">
            <h2>En la fundacion Mil Huellitas sabemos lo importante que es ayudar.</h2>
            <h2>¡Todos los productos que verás son de pequeños grandes emprendimientos!</h2>
          </section>

          <ProductTypeList products={products} />
        </section>

        <section className="title-Allied-Brands">
          <img src={Huellita} className="huellita" alt="huellita" />
          <h1 className="marcas">Nuestras marcas</h1>
          <img src={Huellita} className="huellita2" alt="huellita2" />
        </section>

        <section className="brands__container">
          <BrandList brands={brands} />
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Aliados
