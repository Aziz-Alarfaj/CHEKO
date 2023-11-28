import './Home.css';
import { useState, useContext } from "react";
import { Row, Col, Divider } from 'antd';
import { RestaurantContext } from '../../App'
import { getItemsByCategory } from '../../utils/functions';
import CategoryList from './components/CategoryList';
import OrdersCard from './components/OrdersCard';
import ItemsList from './components/ItemsList';

const Home = () => {
    const { restaurantData, categories, filteredRestaurantData, setFilteredRestaurantData } = useContext(RestaurantContext);

    const [selectedCategory, setSelectedCategory] = useState(restaurantData[0].category);

    const getItemOfSpacificCategory = (category) => {
        return restaurantData.filter((item) => item.category === category);
    }

    const selectCategory = (category) => {
        setSelectedCategory(category);
        setFilteredRestaurantData(null);
    }

    return (
        <div className="Home">
            <Row gutter={[16, 16]}>
                <Col span={19}>
                    <Row>
                        <CategoryList categories={categories} selectCategory={selectCategory} />
                    </Row>
                </Col>

                <Col span={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px' }}>
                    <Divider type="vertical" style={{ height: '85%', borderInlineStartWidth: '3px' }} />
                </Col>

                <Col span={4} style={{ display: 'grid', alignItems: 'center' }}>
                    <OrdersCard />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    {getItemsByCategory(filteredRestaurantData ? filteredRestaurantData : getItemOfSpacificCategory(selectedCategory)).map((item) => {
                        return (
                            <ItemsList item={item} />
                        )
                    })}
                </Col>
            </Row>
        </div>
    );
}

export default Home;
