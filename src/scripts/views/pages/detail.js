/* eslint-disable no-shadow */
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/no-cycle
import ReviewsInitiator from '../../utils/reviews-initiator';
import {
  createRestaurantDetailTemplate,
  createFoodCatalogueTemplate,
  createDrinkCatalogueTemplate,
  createReviewTemplate,
  } from '../templates/template-creator';
 
const Detail = {
  async render() {
    return `
    <h1 class="detail__label">Catalogue Detail</h1>
    <section class="content"></section>
    <div class="card-menu">         
        <div class="posts-detail">
            <article class="post-item">
                <h1 class="menu-item__title"><b>Foods Menu</b></h1>
                <div class="post-item__content food_menu">
                  <food-item></food-item>
                </div>
            </article>

            <article class="post-item">
                <h1 class="menu-item__title"><b>Drinks Menu</b></h1>
                <div class="post-item__content drink_menu">
                  <drink-item></drink-item>
                </div>
            </article>

            <article class="post-item">
              <h1 class="menu-item__title"><b>Customer Review</b></h1>
              <div class="post-item__content reviews">
                <reviews__item></reviews__item>
              </div>
            </article>
        </div>
    </div>
    <div id="favoriteButtonContainer"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detail(url.id);
    const menu = restaurant.restaurant.menus;

    const restaurantDetailContainer = document.querySelector('.content');
    restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    
    const foodsList = document.querySelector('food-item');
    menu.foods.forEach((restaurant) => {
      foodsList.innerHTML += createFoodCatalogueTemplate(restaurant);
    });

    const drinksList = document.querySelector('drink-item');
    menu.drinks.forEach((restaurant) => {
      drinksList.innerHTML += createDrinkCatalogueTemplate(restaurant);
    });
    
    const reviewsContainer = document.querySelector('reviews__item');
    reviewsContainer.innerHTML = createReviewTemplate(restaurant);
    
    FavoriteButtonPresenter.init({
      FavoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        city: restaurant.restaurant.city,
        address: restaurant.restaurant.address,
        pictureId: restaurant.restaurant.pictureId,
        foods: menu.foods,
        drinks: menu.drinks,
      },
    });

    ReviewsInitiator.init({
      id,
      name: document.querySelector('#review-name'),
      review: document.querySelector('#review-review'),
      form: document.querySelector('#review-form'),
    });
  },
};
 
export default Detail;