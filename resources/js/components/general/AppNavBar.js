import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Icon from '../../../assets/bookworm_icon.svg';

function AppNavBar({ cart }) {
  const { totalCart } = cart;
  return (
    <header className="sticky-top">
      <Navbar className="navbar-shadow pb-3" style={{ width: '100%' }}>
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
                Cart({totalCart})
              </Link>
            </Nav>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(AppNavBar);
