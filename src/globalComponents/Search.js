import { Button, Input, Select, Space, Form } from 'antd';
import { stringSimilarity } from 'string-similarity-js';


const Search = ({ categories, restaurantData, filterRestaurantData }) => {

    const options = categories?.map((item) => { return { ...item, value: item.category, lable: item.category } })

    // TODO: needs refactoring
    const searchRestaurantData = (searchText, filter) => {
        return restaurantData?.filter((item) => {
            return (item.name.toLowerCase().includes(searchText.toLowerCase()) || item.description.toLowerCase().includes(searchText.toLowerCase())) && (filter ? item.category === filter : true)
        });

    }

    const onFinish = (value) => {
        const data = searchRestaurantData(value.search, value.filter);
        filterRestaurantData(data)
    }

    const onFinishFailed = () => {

    }

    return (
        <>
            <Form
                name="search"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: '10vw',
                    zIndex: '10',
                }}
            >
                <Space direction="vertical">
                    <Space.Compact>
                        <Form.Item
                            name="search"
                        >
                            <Input style={{ width: '48vw', height: '42px' }} addonBefore={''} placeholder="Search" allowClear />
                        </Form.Item>
                        <Form.Item
                            name="filter"
                        >
                            <Select style={{ width: '24vw', height: '42px' }} placeholder="Filter" options={options} allowClear />
                        </Form.Item>
                        <Form.Item>
                            <Button style={{ width: '8vw', height: '42px' }} htmlType="submit">Search</Button>
                        </Form.Item>
                    </Space.Compact>
                </Space>
            </Form>
        </>
    );
}

export default Search;