import PropTypes from 'prop-types';
import { Component } from 'react';
import { getProductsByCategoryID } from '../services/api';

export default class CategoryItem extends Component {
  getProductsFromCategory = ({ target }) => {
    console.log(target.id);
    getProductsByCategoryID(target.id).then(console.log());
  };

  render() {
    const { id, name } = this.props;
    return (
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
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
