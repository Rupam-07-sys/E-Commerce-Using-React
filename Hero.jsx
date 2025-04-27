import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.svg'
import hero_image from '../assets/hero_image.jpg'
import right_arrow from '../assets/right_arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            
                <div className='hero-hand-icon'>
                
                    <p>new</p>
                    <img src = {hand_icon} alt ="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
             
                <div>Latest Collection</div>
                <img src={right_arrow}/>
            </div>
            
        </div>
        <div className='hero-right'>
        <img src = {hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero
