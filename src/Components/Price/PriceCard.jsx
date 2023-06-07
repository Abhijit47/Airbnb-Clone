import React from 'react';
import { PRICE_IMAGES } from '../../assets';
import './PriceCard.css';

// eslint-disable-next-line
const priceData = [
  {
    "id": 1,
    "priceImage": `${PRICE_IMAGES.priceImage1}`,
    "priceTitle": "3 Bedroom Flat in Bournemouth",
    "priceDescription": "Superhost with a stunning view of the beachside in Sunny Bournemouth",
    "price": "₹5130/night",
    "bgColor": "success",
  },
  {
    "id": 2,
    "priceImage": `${PRICE_IMAGES.priceImage2}`,
    "priceTitle": "Penthouse in London",
    "priceDescription": "Enjoy the amazing sights of London with this stunning penthouse.",
    "price": "₹4550/night",
    "bgColor": "warning",
  },
  {
    "id": 3,
    "priceImage": `${PRICE_IMAGES.priceImage3}`,
    "priceTitle": "1 Bedroom apartment",
    "priceDescription": "Superhost with great amenities and a fabolous shopping complex nearby.",
    "price": "₹8970/night",
    "bgColor": "danger",
  }
];
// eslint-disable-next-line
const cardStyle = {
  "width": "25rem"
};
// eslint-disable-next-line
const imageStyle = {
  "aspectRatio": "1/1"
};

const PriceCard = () => {
  return (
    <div className='p-4 row col col-lg-12 justify-content-center gap-4 gx-0'>
      {priceData.map((card, i) => {
        return (
          <div class="card shadow-sm" style={cardStyle} key={i}>
            <div className=''>
              <img src={card.priceImage} class="card-img-top" alt="" style={imageStyle} />
            </div>
            <div class="card-body">
              <h5 class="card-title">{card.priceTitle}</h5>
              <p class="card-text">{card.priceDescription}</p>
              <p class="card-text">
                <span class={`badge text-bg-${card.bgColor}`}>{card.price}</span>
              </p>
              <a href="#!" class="btn btn-primary">Show more</a>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default PriceCard;