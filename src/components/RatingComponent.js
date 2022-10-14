import { Component } from 'react';

export default class RatingComponent extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      // note: '',
      comment: '',
    };
  }

  render() {
    const { email, comment } = this.state;
    return (
      <form>
        <input
          type="text"
          id="email"
          placeholder="Email"
          data-testid="product-detail-email"
          value={ email }
        />
        <p>Nota:</p>
        <label htmlFor="1">
          1
          <input
            type="radio"
            id="1"
            name="nota"
            value="1"
            data-testid="1-rating"
          />
        </label>
        <label htmlFor="2">
          2
          <input
            type="radio"
            id="2"
            name="nota"
            value="2"
            data-testid="2-rating"
          />
        </label>
        <label htmlFor="3">
          3
          <input
            type="radio"
            id="3"
            name="nota"
            value="3"
            data-testid="3-rating"
          />
        </label>
        <label htmlFor="4">
          4
          <input
            type="radio"
            id="4"
            name="nota"
            value="4"
            data-testid="4-rating"
          />
        </label>
        <label htmlFor="5">
          5
          <input
            type="radio"
            id="5"
            name="nota"
            value="5"
            data-testid="5-rating"
          />
        </label>
        <label htmlFor="review">
          Comentário:
          <input
            type="textarea"
            data-testid="product-detail-evaluation"
            id="review"
            value={ comment }
          />
        </label>
        <button
          type="button"
          data-testid="submit-review-btn"
        >
          Enviar
        </button>
      </form>
    );
  }
}
