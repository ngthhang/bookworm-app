import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Home, Shop, About, Cart, Product } from '../pages';
import { AppNavBar, AppFooter } from '../components/general';

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppNavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/product/:id"
            render={(props) => <Product id={props.match.params.id} />}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
