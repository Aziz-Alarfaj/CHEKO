import './Home.css';
import { useState, useContext } from "react";
import { Card, List, Row, Col, Divider } from 'antd';
import { RestaurantContext } from '../../App'

const Home = () => {
    const restaurantData = useContext(RestaurantContext);

    // needs refactoring to prevent rerendering
    const getCategories = () => {
        const categories = restaurantData.map((item) => item.category);
        return [...new Set(categories)].map(value => ({ value }));
    }

    const categories2 = restaurantData.reduce((acc, item) => {
        const category = item.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    console.log('categories2', categories2);

    const categories = getCategories();

    console.log('categories', categories);
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
                            grid={{
                                gutter: 13000,
                                column: categories.length,
                            }}
                            dataSource={categories}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card style={{ width: '300px' }}>
                                        <Row gutter={[16, 5]}>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                                <div style={{ backgroundColor: 'pink', borderRadius: '10px', height: '50px', width: '50px' }}>

                                                </div>
                                            </Col>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                                <p style={{ fontWeight: 'bold' }}>{item.value}</p>
                                            </Col>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                                <p style={{ fontWeight: 'bold' }}>Number</p>
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

                    <Card>
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
                <Col>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
