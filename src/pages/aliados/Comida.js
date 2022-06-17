import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import AffiliateWrapper from '../../components/affiliateWrapper/AffiliateWrapper'
import ProductList from '../../components/productList/ProductList'
import products from '../../constants/products'
import bannerImages from '../../constants/bannerImages'
import Carousel from '../../components/carousel/Carousel'

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
