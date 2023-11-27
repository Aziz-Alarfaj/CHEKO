import './Home.css';
import { useState, useContext } from "react";
import { Card, List, Row, Col, Divider } from 'antd';
import { RestaurantContext } from '../../App'
import ItemCard from './components/ItemCard';
import { getItemsByCategory } from '../../utils/functions';

const Home = () => {
    const { restaurantData, categories, filteredRestaurantData } = useContext(RestaurantContext);

    console.log('restaurantData', restaurantData);
    const [selectedCategory, setSelectedCategory] = useState();

    const getItemOfSpacificCategory = (category) => {
        return restaurantData.filter((item) => item.category === category);
    }

    return (
        <div className="Home">
            <Row gutter={[16, 16]}>
                <Col xs={19} sm={19} md={19} lg={19} xl={19}>
                    <Row>
                        <List
                            style={{
                                overflowX: 'auto',
                                overflowY: 'hidden',
                                maxHeight: '150px',
                                whiteSpace: 'nowrap',
                            }}

                            dataSource={categories}
                            renderItem={(item) => (
                                <List.Item style={{ display: 'inline-block', marginRight: '16px' }}>
                                    <Card style={{ width: '300px' }} onClick={() => setSelectedCategory(item.category)} hoverable={true}>
                                        <Row gutter={[16, 5]}>
                                            <Col span={8}>
                                                <div style={{ backgroundColor: 'pink', borderRadius: '10px', height: '50px', width: '50px' }}>

                                                </div>
                                            </Col>
                                            <Col span={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                                <p style={{ fontWeight: 'bold' }}>{item.category}</p>
                                            </Col>
                                            <Col span={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                                <p style={{ fontWeight: 'bold' }}>{item.count}</p>
                                            </Col>
                                        </Row>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Col>
                <Col span={1} style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>
                    <Divider type="vertical" style={{ height: '85%', borderInlineStartWidth: '3px' }} />
                </Col>
                <Col span={4} style={{ display: 'grid', alignItems: 'center' }}>

                    <Card hoverable={true}>
                        <Row gutter={[8, 8]}>
                            <Col span={8}>
                                <div style={{ backgroundColor: 'pink', borderRadius: '10px', height: '50px', width: '50px' }}>
                                </div>
                            </Col>
                            <Col span={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                <p style={{ fontWeight: 'bold' }}>Orders</p>
                            </Col>
                            <Col span={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                                <p style={{ fontWeight: 'bold' }}>3</p>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
