const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
    I.seeElement('.posts');
    I.see('Lets add your favorite restaurant', '.catalogue__title');
});

Scenario('favorite one restaurant', async ({ I }) => {
    I.see('Lets add your favorite restaurant', '.catalogue__title');

    I.amOnPage('/');

    I.seeElement('.post-item__title a');

    const firstRestaurant = locate('.post-item__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');

    const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unfavorite restaurant', ({ I }) => {
    I.see('Lets add your favorite restaurant', '.catalogue__title');

    I.amOnPage('/');
    I.seeElement('.post-item__title a');

    const firstRestaurant = locate('.post-item__title a').first();
    I.click(firstRestaurant);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');

    I.click(firstRestaurant);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.see('Lets add your favorite restaurant', '.catalogue__title');
});