import PropTypes from 'prop-types';
import { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class CategoryItem extends Component {
  // função chamada ao clicar numa categoria. Pega o ID dela e usa num endpoint, que retorna apenas os produtos da categora clicada. Atualiza o estado com eles para que a renderização condicional aconteça na div dentro de render() abaixo. -Lucca
  getProductsFromCategory = ({ target }) => {
    const { query, updateProducts } = this.props;
    getProductsFromCategoryAndQuery(target.id, query)
      .then((result) => updateProducts(result.results));
  };

  render() {
    const { id, name } = this.props;
    return (
      <div>

        <label
          htmlFor={ id }
          data-testid="category"
        >
          {name}
          <input
            type="radio"
            id={ id }
            name="category"
            value={ id }
            onClick={ this.getProductsFromCategory }
          />
        </label>

        {/* <div>
          {
            products.length > 0
              && products.map((obj) => (
                <Products
                  title={ obj.title }
                  price={ obj.price }
                  thumbnail={ obj.thumbnail }
                  key={ obj.id }
                />))
          }
        </div> */}
      </div>
    );
  }
}

CategoryItem.defaultProps = {
  query: '',
};

CategoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  query: PropTypes.string,
  updateProducts: PropTypes.func.isRequired,
};
