import React from 'react'
import './offer.css'
import exclusive_women_image from '../assets/exclusive_women_image.webp'

const Offer = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_women_image} alt="Exclusive Offer"/>
      </div>
    </div>
  )
}

export default Offer