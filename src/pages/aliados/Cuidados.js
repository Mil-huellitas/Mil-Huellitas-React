import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductList from '../../components/aliados/productList/ProductList'
import AffiliateWrapper from '../../components/aliados/affiliateWrapper/AffiliateWrapper'
import products from '../../js/aliados/products'
import Carousel from '../../components/aliados/carousel/Carousel'
import bannerImages from '../../js/aliados/bannerImages'

const Cuidados = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel images={bannerImages.cuidado} />
        <AffiliateWrapper title="¡Los mejores accesorios para tus mascotas!">
          <ProductList list={products.health.data} />
        </AffiliateWrapper>
      </main>
      <Footer />
    </>
  )
}

export default Cuidados
