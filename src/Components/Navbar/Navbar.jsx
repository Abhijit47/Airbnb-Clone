import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../../assets';
import './Navbar.css';

const logoStyle = {
  "width": "13rem",
  "height": "4rem",
};

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg mb-2 bg-light border border-bottom-1 position-sticky top-0 z-1 shadow-sm">
      <div class="container-fluid">
        <div>
          <Link class="navbar-brand" to='/'>
            <img src={LOGO.logo} alt="logo" style={logoStyle} />
          </Link>
        </div>
        <div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">


          <form class="from-group row col col-lg-4" role="search">
            <div class="input-group ">
              <input type="text" class="form-control rounded-start-pill p-2" id="autoSizingInputGroup" placeholder="Username" />
              <div class="input-group-text rounded-end-pill">
                <i class="bi bi-search"></i>
              </div>
            </div>
          </form>


          <button className='btn btn-outline-secondary rounded-pill'> Airbnb your Home</button>
          <div class="dropdown ms-5">
            <button class="btn btn-light border border-1 rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-list me-2 fs-4"></i>
              <i class="bi bi-person-circle fs-4"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" type="button">Action</button></li>
              <li><button class="dropdown-item" type="button">Another action</button></li>
              <li><button class="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </div>


          {/* <ul class="navbar-nav">
            <li class="nav-item dropdown bg-danger">
              <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-list"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/about" class="dropdown-item">About</Link>
                </li>
                <li>
                  <Link to="/about" class="dropdown-item">Contact</Link>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <Link to="/about" class="dropdown-item">Action</Link>
                </li>
              </ul>
            </li>
          </ul> */}



        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
<div>
            <Link class="navbar-brand" to='/'>
              <img src={LOGO.logo} alt="logo" style={logoStyle} />
            </Link>
          </div>
*/