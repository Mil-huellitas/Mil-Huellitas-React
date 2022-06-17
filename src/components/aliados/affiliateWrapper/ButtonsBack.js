import React from 'react'
import LinkCustom from '../linkCustom/LinkCustom'
import affiliateLinks from '../../constants/affiliateLinks'

function ButtonsBack() {
  return (
    <section className="buttonsBack">
      {affiliateLinks.map((button, index) => (
        <LinkCustom key={index} className="link" to={button.to} activeclassName="link-select">
          {button.title}
        </LinkCustom>
      ))}
    </section>
  )
}

export default ButtonsBack
