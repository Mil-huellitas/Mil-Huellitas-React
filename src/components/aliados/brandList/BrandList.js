import React from 'react'
import Brand from '../brand/Brand'

function BrandList({ brands }) {
  return (
    <div className="list-group-items">
      {brands.map((brand) => (
        <Brand key={brand.name} {...brand} />
      ))}
    </div>
  )
}

export default BrandList
