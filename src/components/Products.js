import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <Link to={ `/details/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <img src={ thumbnail } alt={ title } />
          <p>{ title }</p>
          <p>{ `R$${price}` }</p>
        </div>
      </Link>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
