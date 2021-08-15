import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const RestaurantList = {
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
        <h1 class="catalogue__title">Restaurant Catalogue</h1>        
        <div class="posts">

        </div>
        </section>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurantList();
        const restaurantsContainer = document.querySelector('.posts');
        
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
        });
    },
};

export default RestaurantList;