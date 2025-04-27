import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='description-nav-box fade'>Reviews(122)</div>

        </div>
        <div className='descriptionbox-description'>
        <p>
        E-commerce, or electronic commerce, refers to the buying 
        and selling of goods and services over the internet.
         It involves the exchange of products or services between businesses, 
         consumers, or both, often facilitated by websites, mobile apps, or online marketplaces. 
        </p>
        </div>

    </div>
  )
}

export default DescriptionBox