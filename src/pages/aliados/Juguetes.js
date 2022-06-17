import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

import ProductList from '../../components/aliados/productList/ProductList'
import AffiliateWrapper from '../../components/aliados/affiliateWrapper/AffiliateWrapper'
import products from '../../js/aliados/products'
import Carousel from '../../components/aliados/carousel/Carousel'
import bannerImages from '../../js/aliados/bannerImages'

const Juguetes = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Carousel images={bannerImages.toys} />
        <AffiliateWrapper title="¡Los mejores accesorios para tus mascotas!">
          <ProductList list={products.toys.data} />
        </AffiliateWrapper>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Juguetes
