import { Button, Input, Select, Space, Form } from 'antd';
import { stringSimilarity } from 'string-similarity-js';


const Search = ({ categories, restaurantData, filterRestaurantData }) => {

    const options = categories?.map((item) => { return { ...item, value: item.category, lable: item.category } })

    const searchRestaurantData = (searchText) => {
        const threshold = 0.8;
        return restaurantData?.filter((item) => {
            const similarity = stringSimilarity(item.name.toLowerCase(), searchText.toLowerCase());
            return similarity >= threshold;
        });

    }

    const onFinish = (value) => {
        const data = searchRestaurantData(value.search);
        console.log('submit', data);
        filterRestaurantData(data)
    }

    const onFinishFailed = () => {

    }

    console.log('categories', categories);

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
                            <Input addonBefore={''} placeholder="Search" />
                        </Form.Item>
                        <Form.Item
                            name="filter"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a category',
                                },
                            ]}
                        >
                            <Select placeholder="Filter" options={options} />
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