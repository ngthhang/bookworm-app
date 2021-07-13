import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Shop from "./containers/Shop";
import About from "./containers/About";
import Cart from "./containers/Cart";
import AppNavBar from "./general/AppNavBar";
import AppFooter from "./general/AppFooter";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
