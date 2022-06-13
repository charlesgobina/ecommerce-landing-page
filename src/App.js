import React, { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/card/Card';
import ProductDescription from './components/productDescription/ProductDescription';
import Cart from './components/cart/Cart';
import './App.css';

const App = () => {
  const [detectClick, setDetectClick] = useState(false);

  return (
    <div className="App">
      <Header setDetectClick={setDetectClick} />
      <Cart detectClick={detectClick} />
      <Card />
      <ProductDescription />
    </div>
  );
};

export default App;
