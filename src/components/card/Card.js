import React from 'react';
import './Card.css';
import sneakerOne from '../../images/image-product-1.jpg';
import { ReactComponent as IconNext } from '../../images/icon-next.svg';
import { ReactComponent as IconPrevious } from '../../images/icon-previous.svg';

const Card = () => (
  <div className="card">
    <div className="cardBody">
      <div className="cardImage">
        <img src={sneakerOne} alt="sneaker" />
        <IconNext className="cardIconNext" />
        <IconPrevious className="cardIconPrevious" />
      </div>
    </div>
  </div>
);

export default Card;
