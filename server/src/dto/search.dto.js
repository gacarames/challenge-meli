const _ = require('underscore');

const singleDto = (item) => ({
    id: item.id,
    title: item.title,
    price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: item.price % 1,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: item.plain_text,
    location: item.address.state_name,
});

const multipleDto = (data) => {
    const searchData = data;
    const getResults = _.pick(searchData, 'results', 'available_filters');
    const { path_from_root } = getResults.available_filters[0].values[0];
    const { results } = getResults;
    const itemIimit = results.slice(0, 12);

    const filterProps = _.map(itemIimit, (item) => {
        return singleDto(item);
    });

    const formattedResponse = {
        autor: {
            name: 'Guillermo',
            lastname: 'Caramés',
        },
        categories: path_from_root,
        items: filterProps,
    };

    return formattedResponse;
};

module.exports = {
    singleDto,
    multipleDto,
};
