const _ = require('underscore');

const singleDto = (item) => {
    const productData = { ...item[0], ...item[1] };
    const includeKeys = [
        'id',
        'title',
        'category_id',
        'price',
        'currency_id',
        'pictures',
        'condition',
        'shipping',
        'sold_quantity',
        'plain_text',
    ];
    const filteredProps = _.pick(productData, includeKeys);
    const formattedResponse = {
        autor: {
            name: 'Guillermo',
            lastname: 'Caramés',
        },
        item: {
            id: filteredProps.id,
            title: filteredProps.title,
            category: filteredProps.category_id,
            price: {
                currency: filteredProps.currency_id,
                amount: Math.floor(filteredProps.price),
                decimals: filteredProps.price % 1,
            },
            picture: filteredProps.pictures[0],
            condition: filteredProps.condition,
            free_shipping: filteredProps.shipping.free_shipping,
            sold_quantity: filteredProps.sold_quantity,
            description: filteredProps.plain_text,
        },
    };
    return formattedResponse;
};

module.exports = {
    singleDto,
};
