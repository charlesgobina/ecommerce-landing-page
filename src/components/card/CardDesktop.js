import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './CardDesktop.css';
import images from './sneakerImages';

const CardDesktop = () => (
  <Carousel
    className="sneakerDesktopCarousel"
    showStatus={false}
    showIndicators={false}
    showThumbs
  >

    {
      images.map((image) => (
        <div key={uuidv4()} className="cardDesktop">
          <img src={image} alt={`sneaker-${uuidv4()}`} />
        </div>
      ))
    }

  </Carousel>
);
export default CardDesktop;
