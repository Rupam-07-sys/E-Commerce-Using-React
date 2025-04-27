import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';

import ShopContextProvider from './Context/ShopContext'; // Correct import for the provider

import mens_banner_1 from './components/assets/mens_banner_1.jpg';
import women_banner from './components/assets/women_banner.avif';
import kids_banner_1 from './components/assets/kids_banner_1.webp';

function App() {
  return (
    <ShopContextProvider> {/* Remove the value prop here - it's handled inside the provider */}
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={mens_banner_1} category="mens" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner_1} category="kids" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ShopContextProvider>
  );
}

export default App;