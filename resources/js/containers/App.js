import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import {
  Home,
  Shop,
  About,
  Cart,
  Product,
  PageSuccessOrder,
  PageStatus404
} from '../pages';
import { AppNavBar, AppFooter } from '../components/general';

const store = createStore(rootReducer);

export default function App() {
  console.warn = () => {};
  console.error = () => {};
  console.log = () => {};
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
          <Route exact path="/success-order" component={PageSuccessOrder} />
          <Route component={PageStatus404} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
