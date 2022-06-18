import React from 'react'
import './ProductTypeCard.css'

function ProductTypeCard({ title, img, to }) {
  return (
    <div className="product-type-card">
      <div className="product-type-card__content">
        <div className="product-type-card__image">
          <img src={img} alt={title} />
        </div>
        <h2 className="product-type-card__title">{title}</h2>
      </div>
      <a className="product-type-card__button button-primary" href={to}>
        Mirar Productos
      </a>
    </div>
  )
}

export default ProductTypeCard
