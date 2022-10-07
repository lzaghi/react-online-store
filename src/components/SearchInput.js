import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import CategoryItem from './CategoryItem';

export default class SearchInput extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((results) => {
      this.setState({
        categories: results,
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <div>
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div>
          <Link to="/cart">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              carrinho
            </button>
          </Link>
        </div>
        <div>
          {
            categories.length > 0
              ? categories.map((obj) => (
                <CategoryItem
                  id={ obj.id }
                  name={ obj.name }
                  key={ obj.id }
                />))
              : (<p>Carregando</p>)
          }
        </div>
      </>
    );
  }
}
