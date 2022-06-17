import React from 'react'
import ProductTypeCard from '../productTypeCard/ProductTypeCard'
import './ProductTypeList.css'

function ProductTypeList({ products }) {
  return (
    <section className="product-type-list">
      {products &&
        Object.keys(products).map((key) => {
          const product = products[key]
          return (
            <ProductTypeCard key={key} title={product.title} img={product.img} to={product.to} />
          )
        })}
    </section>
  )
}

export default ProductTypeList
