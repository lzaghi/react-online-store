import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default class Cart extends Component {
  // getFromLocal = () => {
  //   const list = JSON.parse(localStorage.getItem('cartItems'));
  //   return list;
  // };

  countItem = (id) => {
    const { cart } = this.props;
    const total = cart.reduce((acc, curr) => {
      if (curr.id === id) acc += 1;
      return acc;
    }, 0);
    return total;
  };

  // removeItem = (id) => {
  //   const list = this.getFromLocal();
  //   const newList = list.filter((item) => item.id !== id);
  //   console.log(newList);
  //   localStorage.setItem('cartItems', JSON.stringify(newList));
  // };

  filterCart = () => {
    const { cart } = this.props;
    const newCart = [];
    cart.forEach((product) => {
      if (!newCart.includes(product)) {
        newCart.push(product);
      }
    });
    console.log(cart);
    console.log(newCart);
    return newCart;
  };

  render() {
    // const list = this.getFromLocal();
    const { cart, removeAllFromCart, addToCart, removeItemFromCart } = this.props;
    console.log(cart);
    return (
      <>
        <Link to="/">
          <button type="button">Voltar pra home</button>
        </Link>
        <h1> Carrinho </h1>
        { cart.length > 0
          ? this.filterCart()
            .map((obj, index) => (
              <CartItem
                key={ index }
                id={ obj.id }
                price={ obj.price }
                title={ obj.title }
                thumbnail={ obj.thumbnail }
                counter={ this.countItem(obj.id) }
                // getFromLocal={ this.getFromLocal }
                // removeItem={ this.removeItem }
                removeAllFromCart={ removeAllFromCart }
                addToCart={ addToCart }
                item={ obj }
                removeItemFromCart={ removeItemFromCart }
              />))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  removeAllFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
};
