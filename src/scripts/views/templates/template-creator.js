import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="detail-title">${restaurant.restaurant.name}</h2>
    <div class="detail-card">
        <picture>
            <source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" class="detail-image">
        </picture>

        <div class="detail__info">
            <h3 class="detail-text">Information</h3>
            <p class="detail-text">${restaurant.restaurant.city}</p>
            <p class="detail-text">${restaurant.restaurant.address}</p>
            <p class="detail-text">Rating: ${restaurant.restaurant.rating}</p>
            <p>${restaurant.restaurant.description}</p>
        </div>
    </div>
    <h1 class="detail__menu__label">${restaurant.restaurant.name} Menu</h1>
`;

const createFoodCatalogueTemplate = (restaurant) => `
    <p class="food-list">${restaurant.name}</p>
`;

const createDrinkCatalogueTemplate = (restaurant) => `
    <p class="drink-list">${restaurant.name}</p>
`;

const createRestaurantListTemplate = (restaurant) => `
    <article class="post-item">
        <picture>
            <source type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" class="post-item__thumbnail lazyload">
            <img class="post-item__thumbnail lazyload"
            data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
            alt="${restaurant.name}">
        </picture>

        <div class="post-item__content">
            <h1 class="post-item__title"><a href="${`#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
            <p>City: ${restaurant.city} | Rating: ${restaurant.rating}</p>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </article>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createDeleteFavoriteButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (restaurant) => `
<div class="reviews__item">
    <form id="review-form" class="detail__form">
        <input type="text" placeholder="Name" id="review-name">
        <textarea placeholder="Review" id="review-review"></textarea>
        <button type="submit">Send Review</button>
    </form>
    
    <ul>
        ${restaurant.restaurant.customerReviews.map((review) => (`<li class="review__user">
        <div>
        <span class="avatar">${review.name ? review.name[0] : '-'}</span>
        </div>
        <div>
        <h3> ${review.name}</h3>
        <p> ${review.review}</p>
        <time> ${review.date}</time>
        </div>
        </li>`)).join(' ')}
    </ul>
</div>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantListTemplate,
    createFoodCatalogueTemplate,
    createDrinkCatalogueTemplate,
    createFavoriteButtonTemplate,
    createDeleteFavoriteButtonTemplate,
    createReviewTemplate,
};