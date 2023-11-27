import { Card, Row, Col } from 'antd';

const CategoryCard = ({ item, icon, color, selecteCategory }) => {
    return (
        <>
            <Card onClick={() => selecteCategory(item.category)} hoverable={true}>
                <Row gutter={[42, 5]}>
                    <Col span={8}>
                        <div style={{ backgroundColor: `${color}`, borderRadius: '10px', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {icon}
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
        </>
    )

}

export default CategoryCard;