import PropTypes from 'prop-types';
import { Component } from 'react';

export default class CartItem extends Component {
  render() {
    const { id, price, title, thumbnail } = this.props;
    return (
      <>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-name">
          {title}
        </span>
        <span>
          {price}
        </span>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          Quantidade: 1
        </span>
        <span>
          ID:
          {id}
        </span>
      </>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
