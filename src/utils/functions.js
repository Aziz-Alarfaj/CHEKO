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