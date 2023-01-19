import React, { useState } from 'react';
import Header from './components/Header/Header';
import Products from './screen/Products/ProductScreen';
import Cart from './screen/Cart/Cart';
import './App.css';

function App() {
  const [activeScreen, setActiveScreen] = useState("ProdutsScreen");

  const onCartHandler = () => {
    setActiveScreen("CartScreen");
  }

  const onProductHandler = () => {
    setActiveScreen("ProdutsScreen");
  }
  
  return (
    <>
      <Header onCartHandler={onCartHandler} onProductHandler={onProductHandler}/>
      {activeScreen === "ProdutsScreen" && <Products />}
      {activeScreen === "CartScreen" && <Cart />}
    </>
  );
}
export default App;
