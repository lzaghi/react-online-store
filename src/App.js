import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Details from './components/Details';
import Home from './components/Home';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  addToCart = (item) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, item],
    }));
  };

  render() {
    const { cart } = this.state;
    // console.log(cart);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              addToCart={ this.addToCart }
            />) }
          />
          <Route path="/cart" render={ () => <Cart cart={ cart } /> } />
          <Route
            path="/details/:slug"
            render={ (props) => (<Details
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
