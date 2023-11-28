import { Card, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'


const OrdersCard = () => {
    return (
        <>
            <Card>
                <Row gutter={[8, 8]}>
                    <Col span={8}>
                        <div style={{ backgroundColor: 'pink', borderRadius: '10px', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faFileLines} />
                        </div>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                        <p style={{ fontWeight: 'bold' }}>Orders</p>
                    </Col>
                    <Col span={8} style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                        <p style={{ fontWeight: 'bold' }}>0</p>
                    </Col>
                </Row>
            </Card>
        </>
    )

}

export default OrdersCard;