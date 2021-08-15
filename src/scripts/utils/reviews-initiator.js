import RestaurantDbSource from '../data/restaurantdb-source';
// eslint-disable-next-line import/no-cycle
import Detail from '../views/pages/detail';

const ReviewsInitiator = {
  init({
    id, form, name, review,
  }) {
    form.addEventListener('submit', (event) => {
      this._handleSubmit({
        id, event, name: name.value, review: review.value,
      });
    });
  },

  _validateInput({ name, review }) {
    if (name === '' || review === '') {
      return false;
    }
    return true;
  },
  
  async _handleSubmit({
    id, event, name, review,
  }) {
    event.preventDefault();
    if (this._validateInput({ name, review })) {
      const response = await RestaurantDbSource.addReview({
        id, name, review,
      });
      
      if (response === 200) {
        Detail.afterRender();
      }
    }
  },
};

export default ReviewsInitiator;