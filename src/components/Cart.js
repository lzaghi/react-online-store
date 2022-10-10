import { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      { cart.length === 0
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : ()
      }
    );
  }
}
