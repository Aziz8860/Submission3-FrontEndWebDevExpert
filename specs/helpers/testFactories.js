import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
    await FavoriteButtonPresenter.init({
        FavoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant,
    });
};

export { createFavoriteButtonPresenterWithRestaurant };