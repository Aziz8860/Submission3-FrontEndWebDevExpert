import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import RestaurantList from '../views/pages/restaurant-list';

const routes = {
    '/': RestaurantList,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};
 
export default routes;