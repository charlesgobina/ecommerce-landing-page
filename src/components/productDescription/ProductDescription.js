import React from 'react';
import './ProductDescription.css';
import { ReactComponent as IconMinus } from '../../images/icon-minus.svg';
import { ReactComponent as IconPlus } from '../../images/icon-plus.svg';

const ProductDescription = () => (
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
      <IconMinus />
      <input type="number" name="quantity" min="1" max="10" />
      <IconPlus />
    </div>
    <div className="productButton">
      <button type="button">Add to cart</button>
    </div>
  </section>
);

export default ProductDescription;
