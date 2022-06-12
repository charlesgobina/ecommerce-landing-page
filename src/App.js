import React from 'react';
import Header from './components/Header/Header';
import Card from './components/card/Card';
import ProductDescription from './components/productDescription/ProductDescription';
import CartContainer from './components/CartContainer/CartContainer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Card />
    <ProductDescription />
    <CartContainer />
  </div>
);

export default App;
