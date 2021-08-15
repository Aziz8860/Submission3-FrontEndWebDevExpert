import API_ENDPOINT from '../globals/api-enpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
    static async restaurantList() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async addReview({ id, name, review }) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.ADD_REVIEW_KEY,
        },
        body: JSON.stringify({
          id, name, review,
        }),
      };
      const request = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const responseStatus = await request.status;
      return responseStatus;
    }
}

export default RestaurantDbSource;
