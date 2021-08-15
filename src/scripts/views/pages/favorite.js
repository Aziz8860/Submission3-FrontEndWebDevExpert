/* eslint-disable eqeqeq */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="hero">
        <div class="text__box">
            <h1>Hunger Apps</h1>
            <h2>Your Restaurant Finder</h2>
            <h3>Easy to use app</h3>
        </div>
        </div>
        <section class="content">
        <h1 class="catalogue__title">Your Favorite Restaurants</h1>        
        <div class="posts">

        </div>
        
        </section>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('.posts');
        const catalogueLabel = document.querySelector('.catalogue__title');
        
        if (restaurants.length == 0) {
            catalogueLabel.innerHTML = 'Lets add your favorite restaurant';
        }

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
        });
    },
};

export default Favorite;