import React from 'react';
import { HOTEL_IMAGES } from '../../assets';
import Footer from '../Footer/Footer';
import Icon from './Icon';

const data = [
  {
    "id": 1,
    "location": "Private room in center of Pune",
    "hotelName": "Independant luxury studio apartment",
    "guestRoom": "2",
    "bedRoom": "3",
    "bed": "1",
    "bathRoom": "1.5 shared",
    "wifi": "available",
    "kitchen": "available",
    "parking": "null",
    "washing": "null",
    "dryCleaning": "null",
    "pricePerNight": "4340",
    "totalPrice": "8547",
    "rating": "4.5",
    "favoriteIcon": "",
    "hotelImage": `${HOTEL_IMAGES.hotelImage1}`
  },
  {
    "id": 2,
    "location": "Private room in center of Manali",
    "hotelName": "Manali Studio Apartments",
    "guestRoom": "4",
    "bedRoom": "4",
    "bed": "4",
    "bathRoom": "2",
    "wifi": "null",
    "kitchen": "null",
    "parking": "available",
    "washing": "available",
    "dryCleaning": "null",
    "pricePerNight": "3340",
    "totalPrice": "5547",
    "rating": "3.8",
    "favoriteIcon": "",
    "hotelImage": `${HOTEL_IMAGES.hotelImage2}`
  },
  {
    "id": 3,
    "location": "Private room in center of Goa",
    "hotelName": "30 mins to Panji Street, Excel Goa",
    "guestRoom": "1",
    "bedRoom": "1",
    "bed": "1",
    "bathRoom": "1.5 shared",
    "wifi": "available",
    "kitchen": "available",
    "parking": "available",
    "washing": "available",
    "dryCleaning": "null",
    "pricePerNight": "5340",
    "totalPrice": "6547",
    "rating": "4.1",
    "favoriteIcon": "",
    "hotelImage": `${HOTEL_IMAGES.hotelImage3}`
  },
  {
    "id": 4,
    "location": "Private room in center of Bengaluru",
    "hotelName": "Spacious Peaceful Modern Bedroom",
    "guestRoom": "3",
    "bedRoom": "1",
    "bed": "1",
    "bathRoom": "1.5 shared",
    "wifi": "available",
    "kitchen": "null",
    "parking": "available",
    "washing": "null",
    "dryCleaning": "available",
    "pricePerNight": "5340",
    "totalPrice": "5547",
    "rating": "5",
    "favoriteIcon": "",
    "hotelImage": `${HOTEL_IMAGES.hotelImage4}`
  },
  {
    "id": 5,
    "location": "Private room in center of Kullu",
    "hotelName": "Spacious Peaceful Modern Bedroom",
    "guestRoom": "3",
    "bedRoom": "1",
    "bed": "1",
    "bathRoom": "1.5 shared",
    "wifi": "available",
    "kitchen": "null",
    "parking": "available",
    "washing": "null",
    "dryCleaning": "available",
    "pricePerNight": "6340",
    "totalPrice": "9547",
    "rating": "5",
    "favoriteIcon": "",
    "hotelImage": `${HOTEL_IMAGES.hotelImage5}`
  },
  {
    "id": 6,
    "location": "Private room in center of Manali",
    "hotelName": "5 Star Luxury Apartment",
    "guestRoom": "3",
    "bedRoom": "1",
    "bed": "1",
    "bathRoom": "1.5 shared",
    "wifi": "available",
    "kitchen": "available",
    "parking": "available",
    "washing": "available",
    "dryCleaning": "null",
    "pricePerNight": "6340",
    "totalPrice": "8547",
    "rating": "3.85",
    "favoriteIcon": "",
    "hotelImage": `${HOTEL_IMAGES.hotelImage6}`
  }
];

// eslint-disable-next-line
const cardStyle = {
  "maxWidth": "540px"
};

const Search = () => {

  // Printing starts
  function printStars(count) {
    const starList = [];
    for (let i = 0; i < count; i++) {
      starList.push(<i className='bi bi-star-fill' key={i} ></i>);
    }
    return starList;
  };

  return (
    <>
      <div className='p-3'>
        <p>80 stays. 3 January to 6 january. 2 Guests</p>
        <h1 className='fw-bold'>Stays Nearby</h1>
        <div className='d-flex flex-wrap gap-3'>
          <button className='btn btn-light shadow-sm rounded-pill'>Cancellation Flexibility</button>
          <button className='btn btn-light shadow-sm rounded-pill'>Type of place</button>
          <button className='btn btn-light shadow-sm rounded-pill'>Price</button>
          <button className='btn btn-light shadow-sm rounded-pill'>Rooms and beds</button>
          <button className='btn btn-light shadow-sm rounded-pill'>More filters</button>
        </div>
      </div>

      {data.map((card, i) => {
        return (
          <div className='p-2' key={i}>
            <div class="card mb-3 p-2">
              <div class="row g-0 align-items-center">
                <div class="col-md-4">
                  <img src={card.hotelImage} class="img-fluid rounded-2" alt="..." />
                </div>
                <div class="col-md-8 bg-tranparent">
                  <div class="card-body vstack gap-3">
                    <div className='hstack justify-content-between'>
                      <h6 className='fs-6 display-6'>{card.location}</h6>
                      <div>
                        <Icon />
                      </div>
                    </div>
                    <h5 class="card-title">{card.hotelName}</h5>
                    <div className='d-flex flex-wrap gap-1'>
                      <span class="badge rounded-pill text-bg-secondary">{`${card.guestRoom} guest`}</span>
                      <div className='vr'></div>
                      <span class="badge rounded-pill text-bg-secondary">{`${card.bedRoom} bedroom`}</span>
                      <div className='vr'></div>
                      <span class="badge rounded-pill text-bg-secondary">{`${card.bed} bed`}</span>
                      <div className='vr'></div>
                      <span class="badge rounded-pill text-bg-secondary">{`${card.bathRoom} bathrooms`}</span>
                      <div className='vr'></div>
                      <span class="badge rounded-pill text-bg-secondary">
                        {card.wifi === "available" ? "Wifi" : ""}
                      </span>
                      {card.wifi === "available" ? <div className='vr'></div> : ""}

                      <span class="badge rounded-pill text-bg-secondary">
                        {card.kitchen === "available" ? "Kitchen" : ""}
                      </span>
                      {card.kitchen === "available" ? <div className='vr'></div> : ""}

                      <span class="badge rounded-pill text-bg-secondary">
                        {card.parking === "available" ? "Parking" : ""}
                      </span>
                      {card.parking === "available" ? <div className='vr'></div> : ""}

                      <span class="badge rounded-pill text-bg-secondary">
                        {card.washing === "available" ? "Washing" : ""}
                      </span>
                      {card.washing === "available" ? <div className='vr'></div> : ""}

                      <span class="badge rounded-pill text-bg-secondary">
                        {card.dryCleaning === "available" ? "Dry Cleaning" : ""}
                      </span>
                    </div>
                    <div className='hstack gap-2'>
                      <div className=''>
                        {printStars(card.rating)}
                      </div>
                      <h6 className='fs-6 display-6 mb-0'>{card.rating}</h6>
                    </div>
                    <div className='hstack gap-2'>
                      <div>
                        <span class="badge rounded-pill text-bg-primary">
                          {`₹${card.pricePerNight} / Night`}</span>
                      </div>
                      <div>
                        <span class="badge rounded-pill text-bg-danger">
                          {`₹${card.totalPrice} total`}</span>
                      </div>
                    </div>
                    <p class="card-text text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default Search;