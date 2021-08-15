import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createFavoriteButtonTemplate, createDeleteFavoriteButtonTemplate } from '../views/templates/template-creator';
 
const FavoriteButtonPresenter = {
  async init({ FavoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = FavoriteButtonContainer;
    this._restaurant = restaurant;
 
    await this._renderButton();
  },
 
  async _renderButton() {
    const { id } = this._restaurant;
 
    if (await this._isRestaurantExist(id)) {
      this._renderDeleteFavorite();
    } else {
      this._renderFavorite();
    }
  },
 
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },
 
  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();
 
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
 
  _renderDeleteFavorite() {
    this._favoriteButtonContainer.innerHTML = createDeleteFavoriteButtonTemplate();
 
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};
 
export default FavoriteButtonPresenter;