import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './ProductDescription.css';
import { ReactComponent as IconMinus } from '../../images/icon-minus.svg';
import { ReactComponent as IconPlus } from '../../images/icon-plus.svg';
import { ReactComponent as IconCart } from '../../images/icon-cart.svg';
import image from '../../images/image-product-1-thumbnail.jpg';
import { addItem } from '../../redux/sneakStore';
import Message from '../message/Message';

const ProductDescription = () => {
  const [increase, setIncrease] = useState({
    id: '',
    title: 'Fall Limited edition trainers',
    quantity: 1,
    price: 125,
    oldPrice: 250,
    imageUrl: image,
  });
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const increment = () => {
    if (increase.quantity >= 0) {
      setIncrease({ ...increase, quantity: increase.quantity + 1 });
    }
  };

  const decrement = () => {
    if (increase.quantity !== 1) {
      setIncrease({ ...increase, quantity: increase.quantity - 1 });
    }
  };

  const addToCart = () => {
    dispatch(addItem({ ...increase, id: uuidv4() }));
    setClick(true);
    setTimeout(() => setClick(false), 2000);
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
      <div className="productY">
        <div className="productQuantity">
          <button type="button" className="quantityBtn quantityBtnMinus">
            <IconMinus onClick={decrement} className="quantityBtnMinus" />
          </button>
          <span>{increase.quantity}</span>
          <button type="button" className="quantityBtn quantityBtnPlus">
            <IconPlus onClick={increment} className="quantityBtnPlus" />
          </button>
        </div>
        <div className="productButton">
          <button onClick={addToCart} className="productButton" type="button">
            <IconCart id="cartBtn" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
      <Message click={click} />
    </section>
  );
};

export default ProductDescription;
