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

  addToLocal = () => {
    const { cart } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cart));
  };

  addToCart = (item) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, item],
    }), this.addToLocal);
  };

  removeAllFromCart = (id) => {
    const { cart } = this.state;
    const newCart = cart.filter((products) => products.id !== id);
    this.setState(({
      cart: newCart,
    }), this.addToLocal);
  };

  removeItemFromCart = (item) => {
    const { cart } = this.state;
    const indexExists = -1;
    const index = cart.lastIndexOf(item);
    if (index > indexExists) cart.splice(index, 1);
    this.setState(({
      cart,
    }), this.addToLocal);
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
          <Route
            path="/cart"
            render={ () => (<Cart
              cart={ cart }
              addToCart={ this.addToCart }
              removeAllFromCart={ this.removeAllFromCart }
              removeItemFromCart={ this.removeItemFromCart }
            />) }
          />
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
