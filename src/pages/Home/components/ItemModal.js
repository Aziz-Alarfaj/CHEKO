import { Modal, Button } from 'antd';


const ItemModal = ({ closeModal, modalOpen, itemData, count, addItemCount, subtractItemCount }) => {

    return (
        <>
            <Modal
                title={[
                    <span style={{ fontSize: '24px', marginRight: '16px' }}>{itemData.name}</span>,
                    <span style={{ color: '#599887', backgroundColor: '#D0EAE3', padding: '2px 15px', borderRadius: '5px', margin: '10px 0px 10px 0px', fontSize: '14px' }}> Best Sale </span>,
                    <p style={{ margin: '0px', color: '#8f8f8f' }}>{itemData.calorie} Cal</p>
                ]}
                centered
                open={modalOpen}
                onOk={closeModal}
                onCancel={closeModal}
                footer={[
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#F4CBDF', margin: '5px 16px' }}>{itemData.price} SR</span>,
                    <Button onClick={subtractItemCount}>-</Button>,
                    <span style={{ margin: '0px 10px', fontWeight: '600' }}>{count}</span>,
                    <Button onClick={addItemCount}>+</Button>
                ]}
            >
                <p>{itemData.description}</p>
                <img src={itemData.image} alt={itemData.name} style={{ width: '100%', height: '100%', borderRadius: '15px' }} />

            </Modal>
        </>
    );

}

export default ItemModal;