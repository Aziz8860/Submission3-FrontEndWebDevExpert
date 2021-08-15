Feature('Review Restaurant');

Scenario('Add Review for first restaurant in list', async ({ I }) => {
  const name = 'E2E Test by Codecept';
  const context = 'Hello from automation test by Codecept';

  I.amOnPage('/');
  I.seeElement('.post-item__title');
  I.click(locate('.post-item__title a').first());

  I.seeElement('#review-form');
  I.fillField('#review-name', name);
  I.fillField('#review-review', context);
  I.click('#review-form button');

  I.see(name, locate('.review__user h3').last());
  I.see(context, locate('.review__user p').last());
});