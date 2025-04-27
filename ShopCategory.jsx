import React from 'react';
import './CSS/ShopCategory.css'; 
import all_product from '../components/assets/all_product';
import Item from '../components/Items/Item';
import dropdown from '../components/assets/dropdown-1.png'; // Make sure the filename matches exactly

const ShopCategory = (props) => {
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="Banner"/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown} alt="dropdown" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category === item.category) {
            return <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          }
          return null;
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;