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
        console.log('submit', data);
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
            >
                <Space direction="vertical" size="middle">
                    <Space.Compact>
                        <Form.Item
                            name="search"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input text',
                                },
                            ]}
                        >
                            <Input addonBefore={''} placeholder="Search" allowClear />
                        </Form.Item>
                        <Form.Item
                            name="filter"
                        >
                            <Select placeholder="Filter" options={options} allowClear />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">Search</Button>
                        </Form.Item>
                    </Space.Compact>
                </Space>
            </Form>
        </>
    );
}

export default Search;