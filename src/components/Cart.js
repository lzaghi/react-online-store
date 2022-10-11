import PropTypes from 'prop-types';
import { Component } from 'react';
import CartItem from './CartItem';

export default class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <>
        <h1> Carrinho </h1>
        { cart.length > 0
          ? cart.map((obj) => (
            <CartItem
              key={ obj.id }
              id={ obj.id }
              price={ obj.price }
              title={ obj.title }
              thumbnail={ obj.thumbnail }
            />))
          : <p> Não há nenhum item no seu carrinho. </p>}
      </>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
