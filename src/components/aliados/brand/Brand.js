import React from 'react'
import './Brand.css'

function Brand({ name, description, img, to }) {
  return (
    <div className="brand">
      <div className="brand__header">
        <img className="brand__header--img" src={img} alt={name} />
      </div>
      <div className="brand__content">
        <h2 className="brand__content--title">{name}</h2>
        <p className="brand__content--description">{description}</p>
        <a href={to} className="button-primary">
          Más información
        </a>
      </div>
    </div>
  )
}

export default Brand
