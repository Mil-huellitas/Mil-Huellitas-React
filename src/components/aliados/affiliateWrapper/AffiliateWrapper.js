import React from 'react'
import ButtonsBack from './ButtonsBack'
import Title from './Title'
import TitleBottom from './TitleBottom'
import './AffiliateWrapper.css'

function AffiliateWrapper({ children, title }) {
  return (
    <>
      <Title title={title} />
      <ButtonsBack />
      {children}
      <TitleBottom
        title="¡Síguenos ayudando!"
        text="¿Sabías que por cada compra que hagas en las marcas asociadas, éstas donan el 10% de lo
            recaudado a nuestra fundación?"
      />
    </>
  )
}

export default AffiliateWrapper
