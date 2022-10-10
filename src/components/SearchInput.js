import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsByQuery } from '../services/api';
import CategoryItem from './CategoryItem';
import Products from './Products';

export default class SearchInput extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      query: '',
      products: [],
    };
  }

  componentDidMount() {
    getCategories().then((results) => {
      this.setState({
        categories: results,
      });
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  };

  getProducts = () => {
    const { query } = this.state;
    getProductsByQuery(query).then((results) => {
      this.setState({
        products: results,
      });
    });
  };

  updateProducts = (result) => {
    this.setState({
      products: result,
    });
  };

  render() {
    const { categories, products, query } = this.state;
    return (
      <>
        <div>
          <input data-testid="query-input" type="text" onChange={ this.handleChange } />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.getProducts }
          >
            Buscar
          </button>
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
                  query={ query }
                  updateProducts={ this.updateProducts }
                />))
              : (<p>Carregando</p>)
          }
        </div>
        <div>
          {
            products.length > 0
              ? products.map((obj) => (
                <Products
                  title={ obj.title }
                  price={ obj.price }
                  thumbnail={ obj.thumbnail }
                  key={ obj.id }
                  products={ products }
                />))
              : (<p>Nenhum produto foi encontrado</p>)
          }
        </div>
      </>
    );
  }
}
