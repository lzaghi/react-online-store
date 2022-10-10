import PropTypes from 'prop-types';
import { Component } from 'react';
import { getProductsByCategoryID } from '../services/api';
import Products from './Products';

export default class CategoryItem extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  // função chamada ao clicar numa categoria. Pega o ID dela e usa num endpoint, que retorna apenas os produtos da categora clicada. Atualiza o estado com eles para que a renderização condicional aconteça na div dentro de render() abaixo. -Lucca
  getProductsFromCategory = ({ target }) => {
    getProductsByCategoryID(target.id).then((results) => (
      this.setState({
        products: results,
      })
    ));
  };

  render() {
    const { id, name } = this.props;
    const { products } = this.state;
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

        <div>
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
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
