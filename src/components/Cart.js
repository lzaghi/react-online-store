import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default class Cart extends Component {
  getFromLocal = () => {
    const list = JSON.parse(localStorage.getItem('cartItems'));
    return list;
  };

  render() {
    const { cart } = this.props;
    console.log(cart);
    console.log(this.getFromLocal());
    return (
      <>
        <Link to="/">
          <button type="button">Voltar pra home</button>
        </Link>
        <h1> Carrinho </h1>
        { this.getFromLocal().length > 0
          ? this.getFromLocal().map((obj, index) => (
            <CartItem
              key={ index }
              id={ obj.id }
              price={ obj.price }
              title={ obj.title }
              thumbnail={ obj.thumbnail }
            />))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
