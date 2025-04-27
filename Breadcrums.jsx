import React from 'react'
import './Breadcrums.css';  // Should be in the same directory
import next_arrow from './next_arrow.png';

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={next_arrow} alt="" />
        Shop<img src={next_arrow} alt=""/>
        {product.category}
        <img src={next_arrow} alt=""/> 
        {product.name}
    </div>
  )
}

export default Breadcrums