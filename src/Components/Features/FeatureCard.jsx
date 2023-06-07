import React, { useState } from 'react';
import { FEATURE_IMAGES } from '../../assets';
import './FeatureCard.css';

const data = [
  {
    "id": 1,
    "title": "Online Experiences",
    "description": "Unique activities we can do together, led by a world of hosts.",
    "featureImage": `${FEATURE_IMAGES.featureImage1}`
  },
  {
    "id": 2,
    "title": "Unique stays",
    "description": "Spaces that are more than just a place to sleep.",
    "featureImage": `${FEATURE_IMAGES.featureImage2}`
  },
  {
    "id": 3,
    "title": "Entire homes",
    "description": "Comfortable private places, with room for friends or family.",
    "featureImage": `${FEATURE_IMAGES.featureImage3}`
  }
];


// eslint-disable-next-line
const cardStyle = {
  "width": "24rem"
};

const imageStyle = {
  "aspectRatio": "1/1"
};

const FeatureCard = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const cardHoverStyle = {
    "cursor": isHover ? "pointer" : "none",
    // "transform": isHover ? "scale(1)" : "scale(.9)",
    "width": "25rem",
  };

  return (
    <div className='p-4 row col col-lg-12 justify-content-center gap-4 gx-0'>
      {data.map((card, i) => {
        return (
          <div class="card shadow-sm" style={cardHoverStyle} key={i}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className=''>
              <img src={card.featureImage} class="card-img-top" alt="" style={imageStyle} />
            </div>
            <div class="card-body">
              <h5 class="card-title">{card.title}</h5>
              <p class="card-text">{card.description}</p>
              <a href="#!" class="btn btn-primary">Show more</a>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default FeatureCard;