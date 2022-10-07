import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchInput from './components/SearchInput';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  render() {
    // Estou chamando a função aqui, para dar o console.log do array voltado para a requisição da API -Miguel
    getCategories();
    getProductsFromCategoryAndQuery('MLB1743', 'biz');
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchInput } />
        </Switch>
      </BrowserRouter>
    );
  }
}
