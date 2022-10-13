import { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class Details extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const productId = match.url.split('/')[2];
    getProductById(productId).then((result) => (
      this.setState({ product: result })
    ));
  }

  render() {
    console.log(this.props);
    const { product } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Link to="/">
          <button type="button">Voltar pra home</button>
        </Link>
        {Object.keys(product).length > 0
          ? (
            <>
              <img
                data-testid="product-detail-image"
                src={ product.thumbnail }
                alt={ product.title }
              />
              <p data-testid="product-detail-name">{ product.title }</p>
              {product.shipping.free_shipping
                && <p data-testid="free-shipping">Frete Grátis!</p>}
              <p data-testid="product-detail-price">{`R$ ${product.price}`}</p>
              <p>{`Itens vendidos: ${product.sold_quantity}`}</p>
              <p>{`Quantidade disponível: ${product.available_quantity}`}</p>
              {product.pictures.length > 1
                && product.pictures.map((pic) => (
                  <img src={ pic.url } alt={ pic.id } key={ pic.id } />
                ))}
              <button
                data-testid="product-detail-add-to-cart"
                type="button"
                onClick={ () => addToCart(product) }
              >
                Adicionar ao carrinho
              </button>
            </>
          )
          : <p>Carregando</p>}
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
