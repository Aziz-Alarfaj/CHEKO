import { apiUrl } from '../utils/constants';

// Fetch the restaurant data from the api
export const fetchRestaurantData = async () => {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        console.log('An error has occured while fetching data'); // for debugging
        return;
    } else {
        const restaurant = await response.json();
        return restaurant;
    }
}