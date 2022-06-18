import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ProductList from '../../components/aliados/productList/ProductList'
import AffiliateWrapper from '../../components/aliados/affiliateWrapper/AffiliateWrapper'
import products from '../../js/aliados/products'
import Carousel from '../../components/aliados/carousel/Carousel'
import bannerImages from '../../js/aliados/bannerImages'
import ProductTypeList from '../../components/aliados/productTypeList/ProductTypeList'

const Accesorios = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel images={bannerImages.affiliate} />

        <AffiliateWrapper title="¡Los mejores accesorios para tus mascotas!">
          <ProductList list={products.accessories.data} />
          <ProductTypeList />
        </AffiliateWrapper>
      </main>
      <Footer />
    </>
  )
}

export default Accesorios
