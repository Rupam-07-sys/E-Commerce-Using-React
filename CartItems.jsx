import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from './remove_icon.png';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format'>
                                <img src={e.image} alt={e.name} className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div className="cartitems-quantity-controls">
                                    <button 
                                        className="cartitems-quantity-btn"
                                        onClick={() => removeFromCart(e.id)}
                                    >-</button>
                                    <button className='carticons-quantity'>{cartItems[e.id]}</button>
                                    <button 
                                        className="cartitems-quantity-btn"
                                        onClick={() => addToCart(e.id)}
                                    >+</button>
                                </div>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img 
                                    src={remove_icon} 
                                    onClick={() => { removeFromCart(e.id) }}
                                    alt="Remove item"
                                    className="cartitems-remove-icon"
                                />
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}

            <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>cart Total</h1>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>

                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>

            </div>
            <div className='cartitems-promocode'>
                <p>If you have a promo code , Enter it here</p>
            </div>
            <div className='cartitems-promobox'>
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default CartItems;