import { useState, useContext } from "react";
import { RestaurantContext } from '../App'

const Home = () => {
    const restaurantData = useContext(RestaurantContext);
    return (
        <div>
            <h1>Home Componenet</h1>
            {console.log('restaurantDataContext', restaurantData)}
        </div>
    );
}

export default Home;
