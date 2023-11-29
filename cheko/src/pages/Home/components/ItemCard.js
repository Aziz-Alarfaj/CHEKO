import { useState } from "react";
import { Card, Row, Col, Button } from 'antd';
import ItemModal from "./ItemModal";


const ItemCard = ({ item }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [count, setCount] = useState(0);
    const maxOrders = 30;

    // handle modal popup display
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    const addItemCount = (e) => {
        // Prevent the openModal from being triggered
        e.stopPropagation();

        const itemCount = count;
        if (itemCount < maxOrders) {
            setCount(itemCount + 1)
        }
    }

    const subtractItemCount = (e) => {
        // Prevent the openModal from being triggered
        e.stopPropagation();

        const itemCount = count;
        if (itemCount > 0) {
            setCount(itemCount - 1)
        }
    }

    return (
        <>
            <Card bodyStyle={{ padding: '15px' }} hoverable={true} onClick={openModal}>
                <Row gutter={[16, 0]}>
                    <Col span={8}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
                    </Col>
                    <Col span={16}>
                        <Row >
                            <Col span={24}>
                                <Row>
                                    <Col span={24}>
                                        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0px' }}>{item.name}</p>
                                        <p style={{ margin: '0px', color: '#8f8f8f' }}>{`${item.calorie} Cal`}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <span style={{ color: '#599887', backgroundColor: '#D0EAE3', padding: '2px 15px', borderRadius: '5px', margin: '10px 0px 10px 0px' }}>
                                        Best Sale
                                    </span>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ display: 'flex' }}>
                                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#F4CBDF' }}>
                                            {`${item.price} SR`}
                                        </span>
                                    </Col>
                                    <Col span={12} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'end' }}>
                                        <Button onClick={subtractItemCount}>-</Button>
                                        <span style={{ margin: '0px 10px', fontWeight: '600' }}>{count}</span>
                                        <Button onClick={addItemCount}>+</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <ItemModal closeModal={closeModal} modalOpen={modalOpen} itemData={item} subtractItemCount={subtractItemCount} addItemCount={addItemCount} count={count} />
        </>
    );
}

export default ItemCard;
