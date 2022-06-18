import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './ProductList.css'

function ProductList({ list }) {
  return (
    <section className="alliedFood">
      {list && list.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          path={product.path}
          image={product.image}
        />
      ))}
    </section>
  )
}

export default ProductList
