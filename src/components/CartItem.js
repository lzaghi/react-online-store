import PropTypes from 'prop-types';
import { Component } from 'react';

export default class CartItem extends Component {
  // removeItem = (id) => {
  //   const { getFromLocal } = this.props;
  //   const list = getFromLocal();
  //   console.log(list);
  //   const newList = list.filter((item) => item.id !== id);
  //   console.log(newList);
  //   localStorage.setItem('cartItems', JSON.stringify(newList));
  // };

  render() {
    const { id, price, title, thumbnail, counter, removeItem } = this.props;
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
          {`Quantidade: ${counter}`}
        </span>
        <span>
          {`ID: ${id}`}
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          data-testid="remove-product"
          onClick={ () => removeItem(id) }
        >
          Remove do Carrinho
        </button>
      </>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};
