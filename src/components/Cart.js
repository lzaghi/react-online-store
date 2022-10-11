// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default class Cart extends Component {
  getFromLocal = () => {
    const list = JSON.parse(localStorage.getItem('cartItems'));
    return list;
  };

  countItem = (id) => {
    const list = this.getFromLocal();
    const total = list.reduce((acc, curr) => {
      if (curr.id === id) acc += 1;
      return acc;
    }, 0);
    return total;
  };

  removeItem = (id) => {
    const list = this.getFromLocal();
    const newList = list.filter((item) => item.id !== id);
    console.log(newList);
    localStorage.setItem('cartItems', JSON.stringify(newList));
  };

  render() {
    console.log(this.getFromLocal());
    const list = this.getFromLocal();
    // const { cart } = this.props;
    return (
      <>
        <Link to="/">
          <button type="button">Voltar pra home</button>
        </Link>
        <h1> Carrinho </h1>
        { list.length > 0
          ? list
            .map((obj, index) => (
              <CartItem
                key={ index }
                id={ obj.id }
                price={ obj.price }
                title={ obj.title }
                thumbnail={ obj.thumbnail }
                counter={ this.countItem(obj.id) }
                // getFromLocal={ this.getFromLocal }
                removeItem={ this.removeItem }
              />))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </>
    );
  }
}

// Cart.propTypes = {
//   cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };
