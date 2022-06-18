import React, { useState, useEffect, useCallback } from 'react'
import './Carousel.css'

function Carousel({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const next = useCallback(() => {
    const newIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0
    setSelectedIndex(newIndex)
    setSelectedImage(images[newIndex])
  }, [selectedIndex, images])

  useEffect(() => {
    setTimeout(next, 3000)
  }, [selectedIndex, images, next])

  return (
    <div className="carousel">
      <div className="carousel__img">
        <img src={selectedImage} alt="img" />
      </div>
    </div>
  )
}

export default Carousel
