import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Button, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import AppNavBarLink from './AppNavBarLink';
import { useLocation } from 'react-router-dom';
import Icon from '../../../assets/bookworm_icon.svg';

function AppNavBar({ cart }) {
  const location = useLocation();
  const { totalCart } = cart;
  let currentLocation = null;
  const { pathname } = location;
  switch (true) {
    case pathname === '/':
      currentLocation = 'home';
      break;
    case pathname.includes('shop') || pathname.includes('product'):
      currentLocation = 'shop';
      break;
    case pathname.includes('about'):
      currentLocation = 'about';
      break;
    case pathname.includes('cart'):
      currentLocation = 'cart';
      break;
    default:
      break;
  }

  const menuDropdown = (
    <Menu>
      <Menu.Item key="home">
        <AppNavBarLink
          currentLocation={currentLocation}
          route="/"
          typeLocation="home"
        />
      </Menu.Item>
      <Menu.Item key="shop">
        <AppNavBarLink
          currentLocation={currentLocation}
          route="/shop"
          typeLocation="shop"
        />
      </Menu.Item>
      <Menu.Item key="about">
        <AppNavBarLink
          currentLocation={currentLocation}
          route="/about"
          typeLocation="about"
        />
      </Menu.Item>
      <Menu.Item key="cart">
        <AppNavBarLink
          currentLocation={currentLocation}
          route="/cart"
          typeLocation="cart"
          totalCart={totalCart}
        />
      </Menu.Item>
    </Menu>
  );
  return (
    <header className={currentLocation !== 'about' ? 'nav-bar-sticky' : null}>
      <Navbar className="navbar-shadow pb-3" style={{ width: '100%' }}>
        <Row className="w-100 mx-3 d-flex flex-row align-items-center justify-content-between">
          <Col span={22} sm={12} md={12} xl={12} lg={12}>
            <Navbar.Brand>
              <img src={Icon} alt="React Logo" />
            </Navbar.Brand>
          </Col>
          <Col span={0} sm={12} md={12} xl={12} lg={12}>
            <Nav className="justify-content-end">
              <Nav>
                <AppNavBarLink
                  className="nav-link"
                  currentLocation={currentLocation}
                  route="/"
                  typeLocation="home"
                />
                <AppNavBarLink
                  className="nav-link"
                  currentLocation={currentLocation}
                  route="/shop"
                  typeLocation="shop"
                />
                <AppNavBarLink
                  className="nav-link"
                  currentLocation={currentLocation}
                  route="/about"
                  typeLocation="about"
                />
                <AppNavBarLink
                  className="nav-link"
                  currentLocation={currentLocation}
                  route="/cart"
                  typeLocation="cart"
                  totalCart={totalCart}
                />
              </Nav>
            </Nav>
          </Col>
          <Col span={2} sm={0} md={0} xl={0} lg={0} className="mt-2">
            <Dropdown
              trigger="click"
              overlay={menuDropdown}
              arrow
              placement="bottomRight"
              overlayStyle={{ width: 150, position: 'fixed', top: 0 }}
            >
              <Button
                size="large"
                type="link"
                style={{
                  color: '#32325D'
                }}
                className="d-flex align-items-center justify-content-center"
                icon={<MenuOutlined />}
              ></Button>
            </Dropdown>
          </Col>
        </Row>
      </Navbar>
    </header>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(AppNavBar);
