import React, { useState } from 'react';
import './ProductDescription.css';
import { ReactComponent as IconMinus } from '../../images/icon-minus.svg';
import { ReactComponent as IconPlus } from '../../images/icon-plus.svg';
import { ReactComponent as IconCart } from '../../images/icon-cart.svg';

const ProductDescription = () => {
  const [increase, setIncrease] = useState(0);
  // const [decrease, setDecrease] = useState(0);

  const increment = () => {
    setIncrease((prev) => prev + 1);
  };

  const decrement = () => {
    setIncrease((prev) => prev - 1);
  };

  return (
    <section className="productDescription">
      <h4>sneaker company</h4>
      <h2>Fall Limited Edition Trainers</h2>
      <p>
        These low-profile sneakers are your perfect
        casual wear companion. Featuring a durable rubber
        outer sole, they will withstand everything the
        weather can offer.
      </p>
      <div className="productPrice">
        <div className="productPriceNew">
          <span className="newPrice">$125.00</span>
          <span className="pricePercentage">50%</span>
        </div>
        <div className="productPriceOld">
          <span className="oldPrice">$250.00</span>
        </div>
      </div>
      <div className="productQuantity">
        <button type="button" className="quantityBtn quantityBtnMinus">
          <IconMinus onClick={decrement} className="quantityBtnMinus" />
        </button>
        <input value={increase} type="number" name="quantity" minimum="0" min="1" max="10" />
        <button type="button" className="quantityBtn quantityBtnPlus">
          <IconPlus onClick={increment} className="quantityBtnPlus" />
        </button>
      </div>
      <div className="productButton">
        <button className="productButton" type="button">
          <IconCart id="cartBtn" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;
