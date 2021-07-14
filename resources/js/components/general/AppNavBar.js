import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Link } from 'react-router-dom';
import Icon from '../../../assets/bookworm_icon.svg';

function AppNavBar() {
  return (
    <header>
      <Navbar className="navbar-shadow pb-3">
        <div className="w-100 mx-3 d-flex flex-row align-items-center justify-content-between">
          <Navbar.Brand>
            <img src={Icon} alt="React Logo" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav>
              <Link to={'/'} className="nav-link">
                Home
              </Link>
              <Link to={'/shop'} className="nav-link">
                Shop
              </Link>
              <Link to={'/about'} className="nav-link">
                About
              </Link>
              <Link to={'/cart'} className="nav-link">
                Cart(0)
              </Link>
            </Nav>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
}

export default AppNavBar;
