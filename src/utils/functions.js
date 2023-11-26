export const getCategories = (restaurantData) => {

    const categoriesObj = restaurantData.reduce((acc, item) => {
        const category = item.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    const categories = Object.keys(categoriesObj).map((key) => {
        return { category: key, count: categoriesObj[key] }
    })

    return categories;
}

export const getItemsByCategory = (restaurantData) => {
    const groupedByCategory = restaurantData.reduce((result, currentItem) => {
        const categoryExists = result.find(item => item.category === currentItem.category);

        if (categoryExists) {
            categoryExists.items.push(currentItem);
        } else {
            result.push({ category: currentItem.category, items: [currentItem] });
        }

        return result;
    }, []);

    return groupedByCategory;
}