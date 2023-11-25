import './Home.css';
import { useState, useContext } from "react";
import { Card, List, Row, Col, Divider } from 'antd';
import { RestaurantContext } from '../../App'
import ItemCard from './components/ItemCard';

const Home = () => {
    const { restaurantData, categories } = useContext(RestaurantContext);

    const [selectedCategory, setSelectedCategory] = useState(restaurantData[0].category);

    const getItemOfCategory = (category) => {
        return restaurantData.filter((item) => item.category === category);
    }

    console.log('restaurantData', restaurantData);
    return (
        <div className="Home">
            <Row gutter={[16, 16]}>
                <Col xs={19} sm={19} md={19} lg={19} xl={19}>
                    <Row>
                        <List
                            style={{
                                overflowX: 'auto',
                                maxHeight: '150px',
                            }}
                            // grid={{
                            //     gutter: 36,
                            //     column: categories.length,
                            // }}
                            dataSource={categories}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card style={{ width: '300px', marginRight: '100px' }} onClick={() => setSelectedCategory(item.category)} hoverable={true}>
                                        <Row gutter={[16, 5]}>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                                <div style={{ backgroundColor: 'pink', borderRadius: '10px', height: '50px', width: '50px' }}>

                                                </div>
                                            </Col>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                                <p style={{ fontWeight: 'bold' }}>{item.category}</p>
                                            </Col>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                                <p style={{ fontWeight: 'bold' }}>{item.count}</p>
                                            </Col>
                                        </Row>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>
                    <Divider type="vertical" style={{ height: '85%', borderInlineStartWidth: '3px' }} />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>

                    <Card hoverable={true}>
                        <Row gutter={[8, 8]}>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                <div style={{ backgroundColor: 'pink', borderRadius: '10px', height: '50px', width: '50px' }}>
                                </div>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                <p style={{ fontWeight: 'bold' }}>Orders</p>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                <p style={{ fontWeight: 'bold' }}>3</p>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Row gutter={[8, 8]}>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{ display: 'flex', alignItems: 'center' }}>
                            <h1>{selectedCategory}</h1>
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
                        dataSource={getItemOfCategory(selectedCategory)}
                        renderItem={(item) => (
                            <List.Item>
                                <ItemCard item={item} />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Home;
