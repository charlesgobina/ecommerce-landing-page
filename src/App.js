import React from 'react';
import Header from './components/Header/Header';
import Card from './components/card/Card';
import ProductDescription from './components/productDescription/ProductDescription';
import Cart from './components/cart/Cart';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Card />
    <ProductDescription />
    <Cart />
  </div>
);

export default App;
