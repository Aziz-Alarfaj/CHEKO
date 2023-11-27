import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from 'antd';

const Tooltip = ({ item }) => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
                </Col>
                <Col span={16}>
                    <p style={{ fontWeight: 'bold' }}>
                        {item.name}
                    </p>
                    <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ color: 'grey' }}>
                            menu list
                        </p>
                        <Button
                            style={{ margin: '0px 15px' }}
                            onClick={navigateToHome}
                        ></Button>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Tooltip;