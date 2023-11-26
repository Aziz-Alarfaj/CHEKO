import { API_URL } from '../utils/constants';

// Fetch the restaurant data from the api
export const fetchRestaurantData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            console.log('An error has occured while fetching data'); // for debugging
            return;
        } else {
            const restaurantData = await response.json();
            return restaurantData;
        }
    } catch {
        console.log('catch error'); // for debugging
    }
}