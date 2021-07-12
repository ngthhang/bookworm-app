import React from "react";
import ReactDOM from 'react-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./containers/Home";
import Shop from "./containers/Shop";
import About from "./containers/About";
import Cart from "./containers/Cart";
import Icon from "../../assets/bookworm_icon.svg";


function App() {
  return (
  <Router>
    <div className="App">
        <header className="App-header">
          <Navbar className='navbar-shadow pb-3'>
            <div className="w-100 mx-3 d-flex flex-row align-items-center justify-content-between">
              <Navbar.Brand>
                <img src={Icon} alt="React Logo" />
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                  <Link to={"/shop"} className="nav-link">
                    Shop
                  </Link>
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                  <Link to={"/cart"} className="nav-link">
                    Cart(0)
                  </Link>
                </Nav>
              </Nav>
            </div>
        </Navbar>
      </header>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </div>
    <footer className='d-flex flex-row align-items-center bg-light py-3 px-4'>
        <img src={Icon} alt="React Logo" style={{width: 70, height: 20}} className=' img-fluid' />
      <div className='d-flex flex-column ml-4'>
        <span>BOOKWORM</span>
        <span>Address</span>
        <span>Code</span>
      </div>
    </footer>
  </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'))
