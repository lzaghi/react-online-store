import PropTypes from 'prop-types';
import { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    const { handleChange, getProducts } = this.props;
    return (
      <div>
        <input data-testid="query-input" type="text" onChange={ handleChange } />
        <button
          data-testid="query-button"
          type="button"
          onClick={ getProducts }
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};
