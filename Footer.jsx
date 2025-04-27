import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'
import whatsapp_logo from '../assets/whatsapp_logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src = {logo} alt = "" />
            <p>FASHIONZ</p>
        </div>
        <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt=""/>
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest_icon} alt=""/>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_logo} alt=""/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p className='copyright-text'>copyright @ 2025 - All Right Reserved.</p>
        </div>
            
        
    </div>
  )
}

export default Footer