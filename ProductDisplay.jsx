import React, { useContext } from 'react'; 
import './Productdisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext); 
    
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_dull_icon} alt="dull star icon" />
                    <p>(122)</p>
                </div>
                <div className='ProductDisplay-right-prices'>
                    <div className='ProductDisplay-right-prices-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    {product.description || `Elevate your formals by matching fit tailored trousers for men with a fitted sweater. 
                    Neutral-tone trousers may work well with jewel-tone or patterned sweaters adding to 
                    the festive mood. Use it for formal office parties and dinner functions.`}
                </div>
                <div className='productdisplay-right-sizes'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes-options'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category:</span> {product.category || 'Women, T-Shirt, Crop Top'}
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags:</span> {product.tags || 'Modern, Latest'}
                </p>
            </div>
        </div>
    );
}

export default ProductDisplay;