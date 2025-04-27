import React, { useContext } from 'react'; // Added useContext import
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { getTotalCartItems } = useContext(ShopContext); 
    
    const getMenuName = () => {
        if (currentPath === "/") return "shop";
        if (currentPath === "/mens") return "mens";
        if (currentPath === "/womens") return "womens";
        if (currentPath === "/kids") return "kids";
        return "";
    };

    const menu = getMenuName();

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <p>Fashionz</p>
            </div>

            <ul className='nav-menu'>
                <li>
                    <Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" && <hr />}
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to='/womens'>Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>
                    {menu === "kids" && <hr />} 
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="cart" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div> 
            </div>
        </div>
    );
}

export default Navbar;