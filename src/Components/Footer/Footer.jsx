import React from 'react';
import './Footer.css';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer class="footer mt-auto py-3 bg-body-tertiary border border-top-1">
        <div class="container ">
          <div className='hstack justify-content-center gap-1'>
            <p class="text-body-secondary">&copy; {date}</p>
            <p>Airbnb clone! No rights reserved.</p>
          </div>
          <div className='hstack justify-content-center gap-1'>
            <span className='fs-6 display-6'>Privacy</span>
            <div class="vr"></div>
            <span className='fs-6 display-6'>Terms</span>
            <div class="vr"></div>
            <span className='fs-6 display-6'>Sitemap</span>
            <div class="vr"></div>
            <span className='fs-6 display-6'>Company</span>
            <div class="vr"></div>
            <span className='fs-6 display-6'>Details</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;