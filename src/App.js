import { Component } from 'react';
import {
  getCategories,
  getProductById,
  getProductsFromCategoryAndQuery,
} from './services/api';

export default class App extends Component {
  render() {
    // Estou chamando a função aqui, para dar o console.log do array voltado para a requisição da API -Miguel
    getCategories().then();
    getProductsFromCategoryAndQuery('MLB1743', 'biz').then();
    getProductById('MLB2784514906').then();
    return (
      <div className="Site">
        <p>Site</p>
      </div>
    );
  }
}
