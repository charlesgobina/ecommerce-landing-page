import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Card.css';
import images from './sneakerImages';

const Card = () => (
  <Carousel
    className="sneakerMobileCarousel"
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
  >

    {
      images.map((image) => (
        <div key={uuidv4()} className="card">
          <img src={image} alt={`sneaker-${uuidv4()}`} />
        </div>
      ))
    }

  </Carousel>
);
export default Card;
