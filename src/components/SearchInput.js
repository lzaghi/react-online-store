import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchInput extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            carrinho
          </button>
        </Link>
      </div>
    );
  }
}
