import { List } from 'antd';
import CategoryCard from './CategoryCard';
import icons from '../../../utils/icons';

const CategoryList = ({ categories, selectCategory }) => {
    return (
        <>
            <List
                style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    maxHeight: '150px',
                    whiteSpace: 'nowrap',
                }}

                dataSource={categories}
                renderItem={(item, index) => (
                    <List.Item style={{ display: 'inline-block', margin: '0px 8px' }}>
                        <CategoryCard item={item} icon={icons[index].icon} color={icons[index].color} selectCategory={selectCategory} />
                    </List.Item>
                )}
            />
        </>
    )
}

export default CategoryList;