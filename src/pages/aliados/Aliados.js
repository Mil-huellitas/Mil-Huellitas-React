import React from 'react'
import '../../css/aliados/aliados.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/aliados/carousel/Carousel'
import ProductTypeList from '../../components/aliados/productTypeList/ProductTypeList'
import products from '../../js/aliados/products'
import bannerImages from '../../js/aliados/bannerImages'

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


      </main>
      <Footer></Footer>
    </>
  )
}

export default Aliados
