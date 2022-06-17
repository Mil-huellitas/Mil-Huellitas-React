import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

import ProductList from '../../components/productList/ProductList'
import AffiliateWrapper from '../../components/affiliateWrapper/AffiliateWrapper'
import products from '../../constants/products'
import Carousel from '../../components/carousel/Carousel'
import bannerImages from '../../constants/bannerImages'

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
