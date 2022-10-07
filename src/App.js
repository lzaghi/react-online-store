import { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  render() {
    // Estou chamando a função aqui, para dar o console.log do array voltado para a requisição da API -Miguel
    getCategories();
    getProductsFromCategoryAndQuery('MLB1743', 'biz');
    return (
      <div className="Site">
        <p>Site</p>
      </div>
    );
  }
}
