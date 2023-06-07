import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { LOGO } from '../../assets';
import './Navbar.css';

const logoStyle = {
  "width": "14rem",
  "height": "4rem",
};

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg mb-2 bg-light border border-bottom-1 position-sticky top-0 z-1 shadow-lg">
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
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <div className=''>
            <form class="d-flex" role="search">
              <input class="form-control rounded-end-0" type="search" placeholder="Search" aria-label="Search" />
              <div class="input-group-text rounded-start-0">@</div>
            </form>

          </div>
          <ul class="navbar-nav mb-2 mb-lg-0 align-self-end">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Become a Host
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#!">Action</a></li>
                <li><a class="dropdown-item" href="#!">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#!">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='/' />
      </Routes>
    </nav>
  );
};

export default Navbar;