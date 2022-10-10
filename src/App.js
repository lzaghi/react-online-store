import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Details from './components/Details';
import SearchInput from './components/SearchInput';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchInput } />
          <Route path="/cart" component={ Cart } />
          <Route path="/details/:slug" render={ (props) => <Details { ...props } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}
