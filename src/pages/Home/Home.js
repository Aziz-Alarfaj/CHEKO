import './Home.css';
import { useState, useContext } from "react";
import { List, Row, Col, Divider } from 'antd';
import { RestaurantContext } from '../../App'
import { getItemsByCategory } from '../../utils/functions';
import ItemCard from './components/ItemCard';
import CategoryList from './components/CategoryList';
import OrdersCard from './components/OrdersCard';

const Home = () => {
    const { restaurantData, categories, filteredRestaurantData } = useContext(RestaurantContext);

    console.log('restaurantData', restaurantData);
    const [selectedCategory, setSelectedCategory] = useState();

    const getItemOfSpacificCategory = (category) => {
        return restaurantData.filter((item) => item.category === category);
    }

    const selecteCategory = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div className="Home">
            <Row gutter={[16, 16]}>
                <Col span={19}>
                    <Row>
                        <CategoryList categories={categories} selecteCategory={selecteCategory} />
                    </Row>
                </Col>
                <Col span={1} style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>
                    <Divider type="vertical" style={{ height: '85%', borderInlineStartWidth: '3px' }} />
                </Col>
                <Col span={4} style={{ display: 'grid', alignItems: 'center' }}>
                    <OrdersCard />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    {!selectedCategory ? getItemsByCategory(filteredRestaurantData ? filteredRestaurantData : restaurantData).map((item) => {
                        return (
                            <>
                                {console.log('filteredRestaurantData', filteredRestaurantData)}

                                <Row gutter={[8, 8]}>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{ display: 'flex', alignItems: 'center' }}>
                                        <h1>{item.category}</h1>
                                    </Col>
                                    <Col xs={22} sm={22} md={22} lg={22} xl={22} style={{ display: 'flex', alignItems: 'center' }}>
                                        <Divider style={{ margin: '12px' }} />
                                    </Col>
                                </Row>
                                <List
                                    grid={{
                                        gutter: 16,
                                        xs: 1,
                                        sm: 1,
                                        md: 1,
                                        lg: 2,
                                        xl: 3,
                                        xxl: 3,
                                    }}
                                    dataSource={item.items}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <ItemCard item={item} />
                                        </List.Item>
                                    )}
                                />
                            </>
                        )
                    }) : (
                        <>
                            <Row gutter={[8, 8]}>
                                <Col span={2} style={{ display: 'flex', alignItems: 'center' }}>
                                    <h1>{selectedCategory}</h1>
                                </Col>
                                <Col span={22} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Divider style={{ margin: '12px' }} />
                                </Col>
                            </Row>
                            <List
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 1,
                                    md: 1,
                                    lg: 2,
                                    xl: 3,
                                    xxl: 3,
                                }}
                                dataSource={getItemOfSpacificCategory(selectedCategory)}
                                renderItem={(item) => (
                                    <List.Item>
                                        <ItemCard item={item} />
                                    </List.Item>
                                )}
                            />
                        </>)}
                </Col>
            </Row>
        </div>
    );
}

export default Home;
