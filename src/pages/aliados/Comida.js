import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import AffiliateWrapper from '../../components/aliados/affiliateWrapper/AffiliateWrapper'
import ProductList from '../../components/aliados/productList/ProductList'
import products from '../../js/aliados/products'
import bannerImages from '../../js/aliados/bannerImages'
import Carousel from '../../components/aliados/carousel/Carousel'

const Comida = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel images={bannerImages.food} />
        <AffiliateWrapper title="¡La mejor y más saludable comida para tu mascota!">
          <ProductList list={products.foods.data} />
        </AffiliateWrapper>
      </main>

      <Footer />
    </>
  )
}

export default Comida
