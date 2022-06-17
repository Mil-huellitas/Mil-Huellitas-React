import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ProductList from '../../components/productList/ProductList'
import AffiliateWrapper from '../../components/affiliateWrapper/AffiliateWrapper'
import products from '../../constants/products'
import Carousel from '../../components/carousel/Carousel'
import bannerImages from '../../constants/bannerImages'
import ProductTypeList from '../../components/productTypeList/ProductTypeList'

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
