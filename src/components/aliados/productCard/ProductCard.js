import React from 'react'
import './ProductCard.css'

const styles = (img) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
})

function ProductCard({ name, path, image }) {
  return (
    <div className="card" style={styles(image)}>
      <div className="contente">
        <h2>{name}</h2>
        <a href={path}>Ver Tienda</a>
      </div>
    </div>
  )
}

export default ProductCard
