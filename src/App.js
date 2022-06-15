import React, { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/card/Card';
import ProductDescription from './components/productDescription/ProductDescription';
import Cart from './components/cart/Cart';
import './App.css';

const App = () => {
  const [detect, setDetect] = useState(false);

  return (
    <div className="App">
      <Header setDetect={setDetect} />
      <Cart detect={detect} />
      <Card />
      <ProductDescription />
    </div>
  );
};

export default App;
