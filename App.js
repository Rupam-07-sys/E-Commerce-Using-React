import React from 'react'
import './App.css';
import ShopContextProvider from '../Context/ShopContext';
import ShopCategory from './components/ShopCategory';

function App (){
  return (
    <div>
      <ShopContext.Provider>
      <ShopCategory banner="path/to/banner.jpg"/>
    </ShopContext.Provider>
    </div>
  )
}

export default App
