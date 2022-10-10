import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Products extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{ price ? `R$${price}` : 'Sem valor' }</p>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
