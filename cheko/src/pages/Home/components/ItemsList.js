import { Row, Col, List, Divider } from 'antd';
import ItemCard from './ItemCard';

const ItemsList = ({ item }) => {

    return (
        <>
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

}

export default ItemsList;