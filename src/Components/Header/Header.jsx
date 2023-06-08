import React from 'react';
import { Link } from 'react-router-dom';
import { HEADER_IMAGES } from '../../assets';
import './Header.css';


const headerStyle = {
  "backgroundImage": `url(${HEADER_IMAGES.headerBanner})`,
  "backgroundPosition": "center"
};

const Header = () => {
  return (
    <>
      <div className='d-lg-flex d-md-flex d-sm-flex d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-center flex-lg-nowrap flex-md-nowrap flex-sm-wrap flex-wrap gap-lg-4 gap-md-3 gap-sm-2 gap-2'>
        <div className='bg-dark row col-lg-4 col-md-4 col-sm-12 col-12 p-5'>
          <h1 className='text-light'>Go Near</h1>
          <p className='text-light'>plan a different kind of getaway to uncover hidden gems near you.</p>
          <div>
            <Link to="/search" className='btn btn-danger'>Explore Nearby stays</Link>
          </div>
        </div>
        <div className='row col-lg-8 col-md-8 col-sm-12 col-12 p-5' style={headerStyle}></div>
      </div>

    </>
  );
};

export default Header;