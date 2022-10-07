import PropTypes from 'prop-types';
import { Component } from 'react';

export default class CategoryItem extends Component {
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
          name={ name }
          value={ id }
        />
      </label>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
