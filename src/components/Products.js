import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render() {
    const { title, price, thumbnail, id, addToCart, item } = this.props;
    return (
      <>
        <Link to={ `/details/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>{ price ? `R$${price}` : 'Sem valor' }</p>
            {item.shipping.free_shipping
                && <p data-testid="free-shipping">Frete Grátis!</p>}
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(item) }
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.shape().isRequired,
};
